import {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import { NavLink, Route, useParams } from 'react-router-dom';
import {loading } from "../../store/upload";
import { useHistory } from "react-router-dom";
import "./Homepage.css"



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


    console.log(photos)

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
            <h1 className="header">Photos</h1>
            <ul className="photos">
                {photos.map(({id, imgUrl}) => (
                <div className="box">
                <li key={id} className="box2">
                    <NavLink to={`/photos/${id}`}>
                        <img src={one[id]?.imageUrl}></img>
                    </NavLink>
                        <p className="text">{one[id]?.description}</p>
                </li>   
                </div>
                ))}
            </ul>
        </div>

        


    )

    


}

