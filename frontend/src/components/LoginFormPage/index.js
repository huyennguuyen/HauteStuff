import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    // <Redirect to="/" />
    <Redirect to="/home" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        console.log(data)
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className="firstContainer">
      <div className="secondContainer">
          <form onSubmit={handleSubmit} className="forms">
          <ul>
              {errors.map((error, idx) => <li key={idx} className="errors">{error}</li>)}
          </ul>
          <label className="form">
              Username or Email
              <input
              className="emails"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              />
          </label>
          <label className="loginForm">
              Password
              <input
              className="passwords"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </label>
          <button type="submit" className="loginButton">Log In</button>
          </form>
      </div>
    </div>
  );
}

export default LoginFormPage;