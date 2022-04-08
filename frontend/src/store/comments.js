import { csrfFetch } from "./csrf";

const COMMENT = "comments/COMMENT"
const DELETE_COMMENT = "comments/DELETE_COMMENT"


export const commenting = (comment) => {
    return {
        type: COMMENT,
        comment
    }
}

const noComment = (id) => {

  return {
    type: DELETE_COMMENT,
    id
  }

}

export const deletingComment = (commentId) => async dispatch => {
  const response = await csrfFetch(`/api/comments/${commentId}`, {
    method: 'DELETE',
  });

  //console.log(response)

  if (response.ok) {
    const id = await response.json()
    dispatch(noComment(id))
    return id
    
  }


}


export const uploadComment = (id, comment) => async dispatch => {

    const response = await csrfFetch(`/api/photos/${id}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
   

    if(response.ok) {
        const data = await response.json()
       dispatch(commenting(data))
       return data
    }
   
   }




const initialState = {
  comments:[]
};
  
  
const commentsReducer = (state = initialState, action) => {
      switch (action.type) {
        case COMMENT:
          console.log("this is the state", state)
          console.log("this is the action.comment", action.comment)
          // if(!state[action.id]) {
          //   const newState = {
          //     ...state,
          //     [action.comment.id]: action.comment
          //   };
          //   return newState    
          // };
          // return {
          //   ...state,
          //   [action.comment.id]: {
          //      ...state[action.comment.id],
          //     ...action.comment
          //   }
          // };
           const rightNow = {
            ...state,
            [action.comment.id]: action.comment
          };
          return rightNow 
        case DELETE_COMMENT: 
          console.log("this is state", state)
          const newState = {...state}
          console.log("this is new state", newState)
          delete newState[action.id];
          return newState;
          //return {}
        default:
          return state;
        }
    };
  
export default commentsReducer;



