import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { ErrorMessages } from "..";
import DeleteModal from "../../modals/DeleteModal";
import './index.scss';

const serverURL = process.env.REACT_APP_BE_URL;
const deletePostAPI = process.env.REACT_APP_Delete_Post;

const Navbar = props => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const history = useHistory();
  const location = useLocation();

  const deletePost = postId =>
    axios.post(serverURL + deletePostAPI,
      { postId: postId },
      { withCredentials: true }
    ).then(() => {
      setDeleteModalVisible(false);
      history.push('/');
    })
    .catch(({response}) => setErrorMessages(response.data.errors));

  return (
    <div className='Navbar-container'>
      {
        errorMessages.length ?
        <ErrorMessages errors={errorMessages} /> :
        null
      }
      
      <button onClick={() => history.goBack()} disabled={location.pathname === '/'}>Back</button>

      {
        props.user.username ?
          <p>Signed in as {props.user.username}</p> :
          null
      }

      {
        props.user.username ?
          <button onClick={() => {
            props.setDraftId(null);
            history.push('/createPost');
          }}>
            Create Post
          </button> :
          null
      }

      {
        props.user.username &&
        location.pathname.slice(0, location.pathname.lastIndexOf('/')) === '/viewPost' &&
        props.user.id === props.postAuthor ?
          <button onClick={() => history.push('/editPost/' + props.postId)}>Edit Post</button> :
          null
      }

      {
        props.user.username &&
        location.pathname.slice(0, location.pathname.lastIndexOf('/')) === '/viewPost' &&
        props.user.id === props.postAuthor ?
          <button onClick={() => setDeleteModalVisible(true)}>Delete Post</button> :
          null
      }

      {
        deleteModalVisible?
          <DeleteModal
            confirmDelete={() => deletePost(props.postId)}
            cancelDelete={() => setDeleteModalVisible(false)}
          /> :
          null
      }

      <button onClick={props.setUser}>
        { props.user.username ? 'Sign out' : 'Sign in' }
      </button>
    </div>
  );
}

export default Navbar;