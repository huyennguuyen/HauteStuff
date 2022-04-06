import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getOne} from "../../store/upload"
import { NavLink } from "react-router-dom"
import "./OnePhoto.css"
import { deletingOne } from "../../store/upload"
import { useHistory } from "react-router-dom"


export default function OnePhoto () {
    const history = useHistory()
    const dispatch = useDispatch()
    const {imageId} = useParams()
    const sessionUser = useSelector(state => state.session.user);


    const photos = useSelector((state) => {
    return state.upload[imageId]
    })

    if (!sessionUser) {
        history.push("/")

    }

    // const one = {};
    // photos.forEach((photo) => {
    //   one[photo.id] = photo;
    // });
    


   //console.log(one)

    // console.log(currentOne)
    
    //console.log(onePhoto)


    useEffect(() => {
    dispatch(getOne(imageId))
    },[imageId, dispatch])

    return (
        <>
        <h1>One Photo</h1>
        <div>
          <img src={photos?.imageUrl}></img>
          <p>{photos?.description}</p>
          <NavLink to={`/photos/${imageId}/edit`}>
          <button>Edit</button>
          </NavLink>
          <button onClick={() => {
              dispatch(deletingOne(imageId))
                history.push("/home")
            }}>Delete</button>
          
                
        </div>
        </>
    )
}