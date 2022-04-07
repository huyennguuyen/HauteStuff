import { csrfFetch } from "./csrf";

const LOAD = "albums/load"


const loading = (albums) => {
    return {
        type: LOAD,
        albums

    }
}


 export const loadingAlbums = (albums) => async dispatch => {

    const response = await csrfFetch("/api/albums/")
    
    if (response.ok) {
      const photos = await response.json()
      //console.log("==================",photos)
      dispatch(loading(photos))
    }
}

const initialState = {
    albums: [],
  };


 const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD:
            return {
              ...state,
            albums: [...action.albums]   
          }
    }
  };


  export default albumsReducer;
