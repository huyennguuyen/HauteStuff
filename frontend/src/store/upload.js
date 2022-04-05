import { csrfFetch } from "./csrf"


const LOAD = "upload/LOAD"
const UPLOAD = 'upload/UPLOAD'
const REMOVE = 'upload/REMOVE'


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

export const getOne = (id) => async dispatch => {

  const response = await csrfFetch (`/api/photos/${id}`)

  if(response.ok) {
    const photo = await response.json()
    dispatch(uploadPhoto(photo))
    return photo
  }
}

export const uploading = (form) => async dispatch => {
 const response = await csrfFetch("/api/photos/new", {
     method: "POST",
     headers: {
         "Content-Type": "application/json"
     },
     body: JSON.stringify(form)
 })

 //console.log(response)
    const data = await response.json()
      //console.log(data)
    dispatch(uploadPhoto(data))
   return data

}

export const updatePhoto = (id, form) => async dispatch => {

  // console.log("this is the id", )

  const response = await csrfFetch(`/api/photos/${id}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  })

  if(response.ok){
    const updatePhoto = await response.json()
    dispatch(uploadPhoto(updatePhoto))
    return updatePhoto 
  }
}


const initialState = {
  photos: [],
};

const uploadReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPLOAD:
        console.log("action form", action.form)
        if(!state[action.form.id]) {
          const newState = {
            ...state,
            [action.form.id]: action.form
          };
        return newState
        }     
        return {
          ...state,
          [action.form.id]: {
            ...state[action.form.id],
            ...action.form
          }
        };
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