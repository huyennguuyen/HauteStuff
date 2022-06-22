import React, { useState, useEffect }from 'react';
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import * as sessionActions from "./store/session";
import SignupFormPage from './components/SignUpFormPage';
import Navigation from './components/Navigation';
import Homepage from "./components/Homepage"
import UploadForm from './components/UploadFormPage';
import OnePhoto from './components/OnePhoto/OnePhoto';
// import EditFormPage from './components/EditFormPage/EditFormPage';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom"
import CommentFormPage from './components/CommentFormPage/CommentFormPage';
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import Splashpage from './components/Splashpage/Splashpage';
import ProfilePage from './components/ProfilePage';
import Settings from './components/Settings';



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
        <>
        <div className="developerInfo">
          <div className="rightSide">
            <p className="name">@2022 Haute Stuff</p>
            <p className="name">Created By: Huyen Nguyen</p>
          </div>
          <div className="leftSide">
              <a className="developerLink" href='https://github.com/huyennguuyen' target="_blank" rel="noopener noreferrer">Github <AiFillGithub /></a>
              <a className="developer-link" href="https://www.linkedin.com/in/huyen-nguyen-2804b523b/" target="_blank" rel="noopener noreferrer">LinkedIn <AiFillLinkedin/></a>
          </div> 
        </div>
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
          {/* <Route exact path="/photos/:imageId/edit">
            <EditFormPage />
          </Route> */}
          <Route path="/photos/new">
            <UploadForm />
          </Route>
          <Route exact path="/">
            <Splashpage />
          </Route>
          <Route path="/photos/:imageId">
            <OnePhoto/>
          </Route>
          <Route exact path="/photos/:imageId/comments">
            <CommentFormPage/>
          </Route>
          <Route exact path="/users/:userId">
            <ProfilePage/>
          </Route>
          <Route exact path="/users/:userId/edit">
            <Settings />
          </Route>
        </Switch>
      </>
      )}
    </>
  );
}

export default App;
