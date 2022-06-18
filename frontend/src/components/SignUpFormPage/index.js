import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false)

  
  useEffect(() => {
      let errors = [];
    
      if(!firstName.length) errors.push("Please enter your first name.")
      if(!lastName.length) errors.push("Please enter your last name.")
      // if(!email.length) errors.push("Please enter an email.")
      // if(!username.length) errors.push("Please enter a username.")
      // if(!password.length) errors.push("Please enter a password.")
      // if(!confirmPassword.length) errors.push("Please confirm your password.")
      setErrors(errors)
    
    }, [firstName, lastName])
    
    if (sessionUser) return (
      // <Redirect to="/" />
      <Redirect to="/home" />
    );


  const handleSubmit = (e) => {
    e.preventDefault();

    setHasSubmitted(true)

    if(errors.length > 0) return; 

    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password, lastName, firstName}))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="firstContainer">
        <div className="inside-signup">
            <form onSubmit={handleSubmit} className="forms" id="signupForm">
            <ul>
                {hasSubmitted && errors.map((error, idx) => <li key={idx} className="errors">{error}</li>)}
            </ul>
            <label>
                First Name
                <input
                type="text"
                className="signing"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label className="sign-margin">
                Last Name
                <input
                type="text"
                className="signing"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <label className="sign-margin">
                Email
                <input
                type="text"
                className="signing"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label className="sign-margin">
                Username
                <input
                type="text"
                className="signing"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label className="sign-margin">
                Password
                <input
                type="password"
                className="signing"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label className="sign-margin">
                Confirm Password
                <input
                type="password"
                className="signing"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>
            <button type="submit" className="signUpButton">Sign Up</button>
            </form>
        </div>
    </div>
  );
}

export default SignupFormPage;