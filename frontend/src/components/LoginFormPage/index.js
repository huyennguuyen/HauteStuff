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
        if (data && data.errors) setErrors(data.errors);
      });
  }
  const submitting = (e) => {
      e.preventDefault()
      const email = document.getElementById('emails');
      const password = document.getElementById('passwords');
      //const loginForm = document.getElementById('forms');
  
      // loginForm.style.visibility = 'hidden'
      email.value = 'FakeUser1';
      password.value = 'password2';

      // console.log(email)
      //console.log(password)
  }

  return (
    <div className="firstContainer">
        <div className="secondContainer">
            <form onSubmit={handleSubmit} className="forms">
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Username or Email:
                <input
                id="emails"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                />
            </label>
            <label>
                Password:
                <input
                id="passwords"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <button type="submit">Log In</button>
            {/* <button onClick={submitting}>Demo User</button> */}
            </form>
        </div>
    </div>
  );
}

export default LoginFormPage;