import { csrfFetch } from "./csrf";

const COMMENT = "comments/COMMENT"
const DELETE_COMMENT = "comments/comment"


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
  const response = await csrfFetch(`/api/photos/${commentId}`, {
    method: 'DELETE',
  });

  //console.log(response)

  if (response.ok) {

    dispatch(noComment(commentId))
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
    comments: [],
  };
  
const commentsReducer = (state = initialState, action) => {
      switch (action.type) {
        case COMMENT:
          if(state[action.id]) {
            const newState = {
              ...state,
              [action.comment.id]: action.comment
            };
          return newState    
          };
          return {
            ...state,
            [action.comment.id]: {
               ...state[action.comment.id],
              ...action.form
            }
          };
        case DELETE_COMMENT: 
          const newState = {...state}
          delete newState[action.id];
          return newState;
        default:
          return state;
        }
    };
  
export default commentsReducer;



