import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadAuthorInfo from "./loadAuthorInfo";
import LoadPostContents from "./loadContents";
import './index.scss';
import { ErrorMessages } from "../../components";

const serverURL = process.env.REACT_APP_BE_URL;
const showPostAPI = process.env.REACT_APP_View_Post;

const ShowPost = props => {
  const [post, setPost] = useState({});
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() =>
    axios.get(serverURL + showPostAPI, { params: { id: props.id } })
      .then(res => {
        setPost(res.data.posts[0]);
        props.setSimilarQuery({ institute: res.data.posts[0].institute, branch: res.data.posts[0].branch });
        props.setPost(res.data.posts[0]);
      }).catch(({response}) => setErrorMessages(response.data.errors))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [props.id]);

  if(errorMessages.length) {
    return (
      <div className='ShowPost'>
        <ErrorMessages errors={errorMessages} />
      </div>
    );
  } else {
    return (
      <div className='ShowPost'>
        <div className='postHead'>
          <h2>{post.title}</h2>
          <p>{Date(post.timestamp)}</p>
        </div>

        <div className='postContents'>
          <LoadPostContents
            contents={post.content}
          />
        </div>

        <LoadAuthorInfo
          post={post}
        />
      </div>
    );
  }
}

export default ShowPost;