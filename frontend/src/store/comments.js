import { csrfFetch } from "./csrf";

const COMMENT = "comments/COMMENT"
const DELETE_COMMENT = "comments/DELETE_COMMENT"
const LOAD_COMMENT = "comments/LOAD_COMMENT"


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

const loadingComments = (comments) => {

  return {
    type: LOAD_COMMENT,
    comments
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

   export const allComments = (id) => async dispatch => {

    const response = await csrfFetch (`/api/photos/${id}/comments`)

   

    if(response.ok) {
      const data = await response.json()
  
      dispatch(loadingComments(data))
      return data 
    }

   }

   export const updateComment =(id, form ) => async dispatch => {
    const {userId, comment} = form 



    const response = await csrfFetch(`/api/comments/${id}/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userId, comment}),
    })


    if(response.ok){
      const updateComment = await response.json()
      // console.log("THIS IS DATA FROM STORE no image-----", updateComment)
      dispatch(commenting(updateComment))
      return updateComment

    }

   }




const initialState = {
  comments:[]
};
  
  
const commentsReducer = (state = initialState, action) => {
      switch (action.type) {
        case LOAD_COMMENT: 
          const allComments = {}
          action.comments.forEach((comment) => {
           allComments[comment.id] = comment
          })
          return {...allComments, ...state.comments}
        case COMMENT:
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
            [action.comment.id]: {...action.comment}
          };
          return rightNow 
        case DELETE_COMMENT: 
          const newState = {...state}
          delete newState[action.id];
          return newState;
          //return {}
        default:
          return state;
        }
    };
  
export default commentsReducer;



