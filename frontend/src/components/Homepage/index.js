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

    // const photos = useSelector(state => {
    //   return state.upload
    // })

        const photos = useSelector(state => {
      return state.upload.photos
    })

    //console.log(photos)

    if (!sessionUser) {
        history.push("/")

    }


    const one = {};
    photos.forEach((photo) => {
      one[photo.id] = photo;
    });

    // const photosArray = Object.values(photos)

    

    useEffect(() => {
        dispatch(loading())
    }, [dispatch])


    if(!photos) {
        return null;;
    }

    return (
        <>
        <div className="upNav">
            <div className="outer">
                <h1 className="header">Photos</h1>
                <ul className="photos">
                    {/* {photosArray.map((photo, idx) => (
                    <div className="box">
                    <li key={idx} className="box2">
                        <NavLink to={`/photos/${idx}`}>
                            <img src={photo?.imageUrl}></img>
                        </NavLink>
                            <p className="text">{photo?.description}</p>
                    </li>   
                    </div>
                    ))} */}
                    {photos.map(({id}) => (
                    <div className="box" key={(id)}>
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
        </div>

        </>

        


    )

    


}

