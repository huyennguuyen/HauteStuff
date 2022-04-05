import {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import { NavLink, Route, useParams } from 'react-router-dom';
import {loading } from "../../store/upload";
import { useHistory } from "react-router-dom";



export default function Homepage () {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory()
    const dispatch = useDispatch()
    const {imageId} = useParams()

    const photos = useSelector(state => {
      return state.upload.photos
    })

    if (!sessionUser) {
        history.push("/")

    }

    //console.log(photos)

    const one = {};
    photos.forEach((photo) => {
      one[photo.id] = photo;
    });

    

    useEffect(() => {
        dispatch(loading())
    }, [dispatch])


    if(!photos) {
        return null;;
    }

    return (
        <div>
            <h1>Photos</h1>
            <ol>
            {photos.map(({id, imgUrl}) => (
              <li key={id}>
                  <NavLink to={`/photos/${id}`}>
                      <img src={one[id].imageUrl}></img>
                  </NavLink>
                <p>{one[id]?.description}</p>
              </li>   
            ))}
            </ol>
        </div>

        


    )

    


}

