import { csrfFetch } from './csrf';

const LOAD_CURRENT_USER = 'user/loadCurrentUser';

// const LOAD_CURRENT_USER = 'user/loadCurrentUser';

export const loadCurrentUser = (currentUser) => {
    return {
      type: LOAD_CURRENT_USER,
      payload: currentUser,
    };
  };


  export const oneUser = (id) => async(dispatch) => {

    // console.log("THIS IS ID--------", id)

    const response = await csrfFetch(`/api/users/${id}`)
    
    // console.log("THIS IS RES FROM THE STORE---------", response)

    if(response.ok) {
      const res = await response.json()
      console.log("THIS IS RES FROM THE STORE---------", res)
      dispatch(loadCurrentUser(res))
    }
  }

  export const updateUserBanner = (id, payload) => async(dispatch) => {

    const {bannerUrl} = payload
   
   
  
    const formData = new FormData();
  
    formData.append("image", bannerUrl)
  
  
    const response = await csrfFetch(`/api/users/${id}/banner/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: formData,
    })
  
    if(response.ok){
      const updateUser = await response.json()
      console.log("THIS IS DATA FROM STORE no image-----", updateUser)
      dispatch(loadCurrentUser(updateUser))
      return updateUser
      
      // console.log("THIS IS RES FROM THE STORE---------", response)
  
      // if(response.ok) {
      //   const res = await response.json()
      // //   console.log("THIS IS RES FROM THE STORE---------", res)
      //   dispatch(loadCurrentUser(res))
      // }
  
  
  
    }
  }


  export const updateUserProfile = (id, payload) => async(dispatch) => {

  const {profileUrl} = payload
 
 

  const formData = new FormData();

  formData.append("image", profileUrl)


  const response = await csrfFetch(`/api/users/${id}/profile/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: formData,
  })

  if(response.ok){
    const updateUser = await response.json()
    console.log("THIS IS DATA FROM STORE no image-----", updateUser)
    dispatch(loadCurrentUser(updateUser))
    return updateUser
    
    // console.log("THIS IS RES FROM THE STORE---------", response)

    // if(response.ok) {
    //   const res = await response.json()
    // //   console.log("THIS IS RES FROM THE STORE---------", res)
    //   dispatch(loadCurrentUser(res))
    // }



  }
}


  export const updateUser = (id, payload) => async(dispatch) => {

    // console.log("THIS IS ID--------", id)

    console.log("THIS IS FORM------", payload)
  const { lastName, firstName, username, about} = payload

 

//   const formData = new FormData();
//   formData.append("image", bannerUrl)
//   formData.append("image", profileUrl)
//   formData.append("lastName", lastName)
//   formData.append("firstName", firstName)
//   formData.append("username", username)

  const response = await csrfFetch(`/api/users/${id}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({lastName,firstName,username, about}),
  })

  if(response.ok){
    const updateUser = await response.json()
    console.log("THIS IS DATA FROM STORE no image-----", updateUser)
    dispatch(loadCurrentUser(updateUser))
    return updateUser
    
    // console.log("THIS IS RES FROM THE STORE---------", response)

    // if(response.ok) {
    //   const res = await response.json()
    // //   console.log("THIS IS RES FROM THE STORE---------", res)
    //   dispatch(loadCurrentUser(res))
    // }



  }
}

  const initialState = { user: null };

  const currentUserReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case LOAD_CURRENT_USER:
        newState = Object.assign({}, state);
        newState.user = action.payload;
        return newState;
      case CLEAR_STORE:
        return {}
    //   case REMOVE_USER:
    //     newState = Object.assign({}, state);
    //     newState.user = null;
    //     return newState;
      default:
        return state;
    }
  };

  export default currentUserReducer;
