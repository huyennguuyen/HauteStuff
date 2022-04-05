import { csrfFetch } from "./csrf"


const LOAD = "upload/LOAD"
const UPLOAD = 'upload/UPLOAD'
const REMOVE = 'upload/REMOVE'
const UPDATE = 'upload/UPDATE'

const uploadPhoto = (form) => {
   return {
    type: UPLOAD,
    form
   }
}

const load = (photos) => {
    return {
      type: LOAD,
      photos
    }
}

export const loading = () => async dispatch => {
  const response = await csrfFetch("/api/photos/home")

  if (response.ok) {
    const photos = await response.json()
    //console.log("==================",photos)
    dispatch(load(photos))
  }

  
}

export const uploading = (form) => async dispatch => {
 const response = await csrfFetch("/api/photos/", {
     method: "POST",
     headers: {
         "Content-Type": "application/json"
     },
     body: JSON.stringify(form)
 })

 //console.log(response)

  if (response.ok) {
      const data = await response.json()
      console.log(data)
      dispatch(uploadPhoto(data))
      return response
  }

}

const initialState = {
  photos: [],
};

const uploadReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case UPLOAD:
        newState = Object.assign({}, state);
        newState.form = action.payload;
        return newState;
      case LOAD:
        return {
            ...state,
          photos: [...action.photos]   
        }
      default:
        return state;
    }
  };


  export default uploadReducer;