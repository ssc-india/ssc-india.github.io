import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { ErrorMessages } from "../../components";
import './index.scss';

const serverURL = process.env.REACT_APP_BE_URL || '';
const AuthenticateUserAPI = process.env.REACT_APP_Auth_User || '';

const AuthenticateUser = ({ setUser }) => {
  const [identity, setIdentity] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  const history = useHistory();

  const login = () =>
    axios.post(serverURL + AuthenticateUserAPI,
      { identity: identity, password: password },
      { withCredentials: true }
    ).then(res => {
      setUser(res.data);
      history.push('/');
    }).catch(({ response }) => setErrorMessages(response.data.errors));

  return (
    <div className='AuthUser'>
      <div className='AuthContainer'>
        {
          errorMessages.length ?
            <ErrorMessages errors={errorMessages} /> :
            null
        }

        <div>
          <label htmlFor='identity'>Email or username</label>
          <input type='text' name='identity' id='identity'
            onChange={e => setIdentity(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password'
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button type='submit' onClick={login} disabled={identity.length*password.length === 0}>
          Login
        </button>

        <div className='registerGroup'>
          <hr />
          <p>First time? Register as a content creator!</p>
          <button onClick={() => history.push('/userSignup')}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default AuthenticateUser;
