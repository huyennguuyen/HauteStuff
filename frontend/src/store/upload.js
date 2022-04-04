
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

// const load = () => {
//     return {
//         type: load,
//          photos
//     }
// }

export const loading = () => {

}

export const uploading = (form) => async dispatch => {
 const response = await fetch("/api/photos/", {
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

const initialState = {};

const uploadReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case UPLOAD:
        newState = Object.assign({}, state);
        newState.form = action.payload;
        return newState;
      case LOAD:
        newState = Object.assign({}, state);
        newState.user = null;
        return newState;
      default:
        return state;
    }
  };


  export default uploadReducer;