import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ls from 'local-storage';
import { ErrorMessages } from '../../components';
import ListInstitutes from '../UserSignup/listInstitutes';
import ListBranches from '../UserSignup/listBranches';
import RenderPostContents from './renderContents';
import './index.scss';

const serverURL = process.env.REACT_APP_BE_URL || '';
const PostUploadAPI = process.env.REACT_APP_Create_Post || '';
const PostEditAPI = process.env.REACT_APP_Edit_Post || '';
const ListInstitutesAPI = process.env.REACT_APP_List_Institutes || '';

const CreatePost = props => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState([{ type: 'p' }]);
  const [generic, setGeneric] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [institute, setInstitute] = useState({});
  const [branch, setBranch] = useState('');
  const [institutesList, setInstitutesList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if(props.edit) {
      setTitle(props.post.title);
      setContents(props.post.content);
      setGeneric(props.post.tag === 'generic');
    } else if(props.draftId !== null) {
      let draft = ls.get('drafts')[props.draftId];
      setTitle(draft.title);
      setContents(draft.content);
      setGeneric(draft.tag === 'generic');
      setInstitute({ name: draft.institute || '', branches: [] });
      setBranch(draft.branch || '');
    } else {
      setTitle('');
      setContents([{ type: 'p' }]);
      setGeneric(false);
      setInstitute({});
      setBranch('');
    }

    const getInstitutesList = async () => {
      const response = await axios.get(serverURL + ListInstitutesAPI);
      setInstitutesList(response.data);
    }

    getInstitutesList();
  }, [props.edit, props.post, props.draftId]);

  const handleContentsChange = (index, obj) => setContents([
    ...contents.slice(0, index),
    { ...contents[index], ...obj },
    ...contents.slice(index+1)
  ]);

  const addNewElement = e => {
    let newEl = {};
    if(e.target.value === 'p') {
      newEl = { type: 'p', content: '' };
    } else if(e.target.value === 'img') {
      newEl = { type: 'img', src: '', description: '' };
    } else if(e.target.value === 'ul') {
      newEl = { type: 'ul', contents: [''] };
    } else if(e.target.value === 'h2') {
      newEl = { type: 'h2', text: '' }
    } else if(e.target.value === 'hr') {
      newEl = { type: 'hr' }
    }
    setContents([...contents, newEl]);
  }

  const removeElement = index =>
    setContents([
      ...contents.slice(0, index),
      ...contents.slice(index+1)
    ]);

  var canSubmit = title.length > 0 && contents.length > 0;
  if(canSubmit) {
    for(const el of contents) {
      if(('content' in el && el.content.length === 0) || ('src' in el && el.src.length === 0)) {
        canSubmit = false;
      }
    }
  }

  const handleSubmit = () => {
    if(canSubmit) {
      if(props.edit) {
        axios.post(serverURL + PostEditAPI,
          {
            postId: props.id,
            content: contents
          },
          { withCredentials: true }
        ).then(() => history.push('/viewPost/' + props.id))
        .catch(({response}) => setErrorMessages(response.data.errors));
      } else {
        axios.post(serverURL + PostUploadAPI,
          {
            title: title,
            content: contents,
            institute: institute.name,
            branch,
            tag: generic ? 'generic' : 'blog',
          },
          { withCredentials: true }
        ).then(res => history.push('/viewPost/' + res.data.postId))
        .catch(({response}) => {
          setErrorMessages(response.data.errors);
          if(response.status === 401) {
            props.setUser({});
          }
        });
      }
    }
  }

  const saveAsDraft = () => {
    let drafts = ls.get('drafts') || [];
    const obj = {
      title: title,
      content: contents,
      institute: institute.name,
      branch: branch,
      tag: generic ? 'generic' : 'blog',
    };
    if('draftId' in props && props.draftId !== null) {
      drafts[props.draftId] = obj;
    } else {
      drafts.push(obj);
    }
    ls.set('drafts', drafts);
    props.setDraftId(props.draftId !== null ? props.draftId : drafts.length-1)
  }

  const deleteDraft = () => {
    let drafts = ls.get('drafts') || [];
    drafts = [
      ...drafts.slice(0, props.draftId),
      ...drafts.slice(props.draftId+1)
    ];
    ls.set('drafts', drafts);
    props.setDraftId(null);
    history.push('/');
  }

  return (
    <div className='createPost'>
      {
        errorMessages.length ?
        <ErrorMessages errors={errorMessages} /> :
        null
      }

      <div className='titlearea'>
        <label htmlFor='blog-title'>Title</label>
        <input type='text' id='blog-title' name='blog-title' className='blog-heading'
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          disabled={props.edit}
        />
      </div>

      {
        !props.edit ?
          <div>
            <p>Post type:</p>
            <div className='radioGroup'>
              <label htmlFor='generic'>Factual post</label>
              <input type='radio' name='generic' checked={generic} onChange={() => setGeneric(true)} />
              <label htmlFor='blog'>Blog post</label>
              <input type='radio' name='blog' checked={!generic} onChange={() => setGeneric(false)} />
            </div>
          </div> :
          null
      }

      <div>
        <hr />
      </div>

      <div>
        <RenderPostContents
          contents={contents}
          handleContentsChange={handleContentsChange}
          removeElement={removeElement}
          addBulletListLine={index => setContents([
            ...contents.slice(0, index),
            {
              ...contents[index],
              contents: [...contents[index].contents, '']
            },
            ...contents.slice(index+1)
          ])}
          removeBulletListLine={(index, lineIndex) => setContents([
            ...contents.slice(0, index),
            {
              ...contents[index],
              contents: [
                ...contents[index].contents.slice(0, lineIndex),
                ...contents[index].contents.slice(lineIndex+1),
              ]
            },
            ...contents.slice(index+1)
          ])}
          editBulletListLine={(index, lineIndex, line) => setContents([
            ...contents.slice(0, index),
            {
              ...contents[index],
              contents: [
                ...contents[index].contents.slice(0, lineIndex),
                line,
                ...contents[index].contents.slice(lineIndex+1)
              ]
            },
            ...contents.slice(index+1)
          ])}
        />
      </div>

      <div className='buttonGroup'>
        <hr />
        
        <ListInstitutes
          institute={institute}
          setInstitute={setInstitute}
          institutesList={institutesList}
        />

        <ListBranches
          branch={branch}
          setBranch={setBranch}
          branchesList={institute.branches}
          disabled={Object.keys(institute).length === 0}
        />

        <select value='' onChange={addNewElement}>
          <option value='' disabled selected>Add Element</option>
          <option value='h2'>Subheading</option>
          <option value='hr'>Horizontal Line</option>
          <option value='p'>Paragraph</option>
          <option value='img'>Image</option>
          <option value='ul'>Bullet List</option>
        </select>

        <button onClick={handleSubmit} disabled={!canSubmit}>Submit</button>
        <button onClick={saveAsDraft}>Save as draft</button>
        <button onClick={deleteDraft} disabled={props.draftId === null}>Delete this draft</button>
      </div>
    </div>
  );
}

export default CreatePost;
