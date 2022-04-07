import React, { useState, useEffect }from 'react';
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import * as sessionActions from "./store/session";
import SignupFormPage from './components/SignUpFormPage';
import Navigation from './components/Navigation';
import Homepage from "./components/Homepage"
import UploadFormButton from './components/Navigation/UploadFormButton';
import UploadForm from './components/UploadFormPage';
import OnePhoto from './components/OnePhoto/OnePhoto';
import EditFormPage from './components/EditFormPage/EditFormPage';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom"
import AlbumPage from './components/AlbumPage/AlbumPage';
import UploadAlbumPage from './components/UploadAlbumPage/UploadAlbumPage';



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
          <Route exact path="/photos/:imageId/edit">
            <EditFormPage />
          </Route>
          <Route path="/photos/new">
            <UploadForm />
          </Route>
          {/* <Route exact path="/">
            <Splashpage />
          </Route> */}
          <Route path="/photos/:imageId">
            <OnePhoto/>
          </Route>
          <Route exact path="/albums">
            <AlbumPage />
          </Route>
          <Route path="/albums/new">
            <UploadAlbumPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
