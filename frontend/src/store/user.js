import { csrfFetch } from './csrf';

const LOAD_CURRENT_USER = 'user/loadCurrentUser';

export const loadCurrentUser = (currentUser) => {
    return {
      type: LOAD_CURRENT_USER,
      payload: currentUser,
    };
  };

  export const oneUser = (id) => async(dispatch) => {

    console.log("THIS IS ID--------", id)

    const response = await csrfFetch(`/api/users/${id}`)
    
    // console.log("THIS IS RES FROM THE STORE---------", response)

    if(response.ok) {
      const res = await response.json()
    //   console.log("THIS IS RES FROM THE STORE---------", res)
      dispatch(loadCurrentUser(res))
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
    //   case REMOVE_USER:
    //     newState = Object.assign({}, state);
    //     newState.user = null;
    //     return newState;
      default:
        return state;
    }
  };

  export default currentUserReducer;
