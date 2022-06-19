import { csrfFetch } from './csrf';

const LOAD_ALL_USERS= 'allUsers/loadAllUsers';



export const loadAll = (users) => {
    return {
      type: LOAD_ALL_USERS,
      payload: users
    };
  };


  export const loadAllUsers = () => async dispatch => {
    const response = await csrfFetch("/api/allUsers/all")

    console.log("THIS IS FOR ALL USERS----", response)
  
    if (response.ok) {
      const allUsers = await response.json()
      console.log("==================",allUsers)
      dispatch(loadAll(allUsers))
    }
  
    
}


  const initialState = { user: null };

  const allUsersReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case LOAD_ALL_USERS:
        newState = Object.assign({}, state);
        newState.user = action.payload;
        return newState;
    //   case CLEAR_STORE:
    //     return {}
    //   case REMOVE_USER:
    //     newState = Object.assign({}, state);
    //     newState.user = null;
    //     return newState;
      default:
        return state;
    }
  };

  export default allUsersReducer;