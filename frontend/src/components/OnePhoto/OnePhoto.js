import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getOne} from "../../store/upload"
import { NavLink } from "react-router-dom"
import "./OnePhoto.css"


export default function OnePhoto () {

    const dispatch = useDispatch()
    const {imageId} = useParams()

    const photos = useSelector((state) => {
    //console.log(state.upload.photos)
    return state.upload[imageId]
    })

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
                
        </div>
        </>
    )
}