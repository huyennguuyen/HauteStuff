import { csrfFetch } from "./csrf"

const LOAD = "upload/LOAD"
const UPLOAD = 'upload/UPLOAD'
const LOAD_ONE="upload/LOAD_ONE"
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

const deleting = (imageId) => {
  return {
    type: REMOVE,
    imageId
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

export const loadMyPhotos = (userId) => async dispatch => {
  const response = await csrfFetch(`/api/photos/users/${userId}`)

  if (response.ok) {
    const photos = await response.json()
    //console.log("==================",photos)
    dispatch(load(photos))
  }

  
}

export const getOne = (id) => async dispatch => {

  const response = await csrfFetch (`/api/photos/${id}`)
  
  //console.log(response)

  if(response.ok) {
    const photo = await response.json()
    dispatch(uploadPhoto(photo))
    return photo
  }


}

export const uploading = (form) => async dispatch => {
const {imageUrl, description, userId} = form 
// console.log("THIS IS FORM------", form)
const formData = new FormData();
formData.append("image", imageUrl)
formData.append("description", description)
formData.append("userId", userId)

 const response = await csrfFetch("/api/photos/new", {
     method: "POST",
     headers: {
         "Content-Type": "multipart/form-data"
     },
     body: formData,
 })
  
 
//  console.log("THIS IS RESPONSE-----", response)
    const data = await response.json()

    
    dispatch(uploadPhoto(data))
   return data

}

export const updatePhoto = (id, form) => async dispatch => {
  // console.log("THIS IS FORM------", form)
  const {imageUrl, description, userId} = form 


//  console.log("THIS IS imageURL store--------", imageUrl)

 

  const formData = new FormData();
  formData.append("image", imageUrl)
  formData.append("description", description)
  formData.append("userId", userId)

  const response = await csrfFetch(`/api/photos/${id}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: formData,
  })

  if(response.ok){
    const updatePhoto = await response.json()
    // console.log("THIS IS DATA FROM STORE no image-----", updatePhoto)
    dispatch(uploadPhoto(updatePhoto))
    return updatePhoto 
  }

  

  // console.log("this is the id", )

  // const response = await csrfFetch(`/api/photos/${id}/edit`, {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "multipart/form-data"
  //   },
  //   body: formData,
  // })

  // if(response.ok){
  //   const updatePhoto = await response.json()
  //   console.log("THIS IS DATA FROM STORE-----", updatePhoto)
  //   dispatch(uploadPhoto(updatePhoto))
  //   return updatePhoto 
  // }
}

export const deletingOne = (imageId) => async dispatch => {
    const response = await csrfFetch(`/api/photos/${imageId}`, {
      method: 'DELETE',
    });

    //console.log(response)
  
    if (response.ok) {

      dispatch(deleting(imageId))
    }

}


const initialState = {
  photos: [],
};

const uploadReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPLOAD:
        if(!state[action.id]) {
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
      case REMOVE: 
       const newState = {...state}
       const newPhotos = newState.photos.filter((image) => {
         return image.id !== action.imageId
       })

       newState.photos = newPhotos
       return newState
      default:
        return state;
    }
  };



  export default uploadReducer;