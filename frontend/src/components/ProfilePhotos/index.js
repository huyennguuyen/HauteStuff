import {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import { NavLink, Route, useParams } from 'react-router-dom';
import {loadMyPhotos } from "../../store/upload";
import { useHistory } from "react-router-dom";
import "./ProfilePhotos.css"




export default function ProfilePhotos ({userId}) {

    const dispatch = useDispatch()

    const photos = useSelector(state => state.upload.photos)


    useEffect( () => {
    dispatch(loadMyPhotos(userId))
    },[userId, dispatch])


    const one = {};
    photos.forEach((photo) => {
      one[photo.id] = photo;
    });
    

    return (
        <>
        <ul className="photos">
            {photos.map(({id}) => (
            <div className="box" key={(id)}>
            <li key={id} className="box2">
                <NavLink to={`/photos/${id}`}>
                    <img src={one[id]?.imageUrl}></img>
                </NavLink>
                    {/* <p className="text">{one[id]?.description}</p> */}
            </li>   
            </div>
            ))}
        </ul>
        </>
    )


}