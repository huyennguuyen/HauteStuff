import { csrfFetch } from "./csrf";

const COMMENT = "comments/COMMENT"
const DELETE_COMMENT = "comments/comment"


export const commenting = (comment) => {
    return {
        type: COMMENT,
        comment
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
   
    console.log(response)

    if(response.ok) {
        const data = await response.json()
          console.log(data)
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
        console.log("response", state)
          if(!state[action.id]) {
            const newState = {
              ...state,
              [action.comment.id]: action.comment
            };
          return newState
          }     
          return {
            ...state,
            [action.comment.id]: {
              ...state[action.comment.id],
              ...action.comment
            }
          };
    //     case REMOVE: 
    //      const newState = {...state}
    //      const newPhotos = newState.photos.filter((image) => {
    //        return image.id !== action.imageId
    //      })
  
    //      newState.photos = newPhotos
    //      return newState
    //     default:
    //       return state;
    //   }
        }
    };
  
export default commentsReducer;



