import React, { useState, useEffect }from 'react';
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import * as sessionActions from "./store/session";
import SignupFormPage from './components/SignUpFormPage';
import Navigation from './components/Navigation';
import Homepage from "./components/Homepage"



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/home" >
            <Homepage />
          </Route>
          {/* <Route exact path="/">
            <Splashpage />
          </Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;
