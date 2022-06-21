import {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import { NavLink, Route, useParams } from 'react-router-dom';
import {loading } from "../../store/upload";
import { loadAllUsers } from "../../store/allUsers";
// import ProfilePhotos from "../ProfilePhotos";
import { useHistory } from "react-router-dom";
import "./Homepage.css"
import ProfilePhotos from "../ProfilePhotos";



export default function Homepage () {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory()
    const dispatch = useDispatch()
    const {imageId} = useParams()
    // const [image, setImage] = useState("")
    // const [image2, setImage2] = useState("")
    // const [users, setUsers] = useState("")

    // const photos = useSelector(state => {
    //   return state.upload
    // })

    const photos = useSelector(state => state.upload.photos)

    const allUsers = useSelector(state => state.allUsers.user);

    //console.log(photos)

    if (!sessionUser) {
        history.push("/")

    }



    const one = {};
    photos?.forEach((photo) => {
      one[photo.id] = photo;
    });

//    console.log("THIS IS PHOTOS-----------", photos)

    


    const users = {};
    allUsers?.forEach((user) => {
      users[user.id] = user;
    });

    // console.log("THIS IS ONE---------", users)

    // const photosArray = Object.values(photos)

    

    useEffect(() => {
        dispatch(loading())
        dispatch(loadAllUsers())
    }, [dispatch])

    
    const random = Math.floor(Math.random() * photos.length);
    const random1 = Math.floor(Math.random() * photos.length);
    const random2 = Math.floor(Math.random() * photos.length);
    const random3 = Math.floor(Math.random() * photos.length);
    const random4 = Math.floor(Math.random() * photos.length);
    const random5 = Math.floor(Math.random() * photos.length);
    const random6 = Math.floor(Math.random() * photos.length);
    
    // useEffect(() => {
        
        
    // setImage(photos[random]?.imageUrl)
    // // setImage2(photos[random]?.imageUrl)

    // })



    if(!photos) {
        return null;;
    }



    return (
        <>
        <div className="home-container">
            <div className="home-inside">
                <div className="left-home">
                    <ul className="photos">
                        {/* {photos.map(({id}) => (
                        <div className="box" key={(id)}>
                        <li key={id} className="box2">
                            <div>
                                <NavLink to={`/users/${one[id]?.userId}`} className="user-profile-home">
                                    {users[one[id]?.userId]?.profileUrl ? <img src={users[one[id]?.userId]?.profileUrl} className="profile-homepage"></img>:
                                    <img src="https://cdn.myportfolio.com/0da7f5fbc31f3b0a622becb5c04363c6/ee759715-7080-4029-8458-50a20bff014c_rw_1920.jpg?h=ba7face07c8aec7970909f3eb3c91045" className="profile-homepage"></img>
                                    }
                                    <h4 className="user-name">{users[one[id]?.userId]?.firstName} {users[one[id]?.userId]?.lastName}</h4>
                                </NavLink>
                            </div>
                            <div className="user-profile-photos">
                                <NavLink to={`/photos/${id}`}>
                                    <img src={one[id]?.imageUrl} className="homepage-photos"></img>
                                </NavLink>
                            </div>
                        </li>   
                        </div>
                        ))} */}
                        {photos.map((photo, id) => (
                        <div className="box" key={id}>
                        <li key={id} className="box2">
                            <div>
                                <NavLink to={`/users/${photo?.userId}`} className="user-profile-home">
                                    {users[photo?.userId]?.profileUrl ? <img src={users[photo?.userId]?.profileUrl} className="profile-homepage"></img>:
                                    <img src="https://cdn.myportfolio.com/0da7f5fbc31f3b0a622becb5c04363c6/ee759715-7080-4029-8458-50a20bff014c_rw_1920.jpg?h=ba7face07c8aec7970909f3eb3c91045" className="profile-homepage"></img>
                                    }
                                    <h4 className="user-name">{users[photo?.userId]?.firstName} {users[photo?.userId]?.lastName}</h4>
                                </NavLink>
                            </div>
                            <div className="user-profile-photos">
                                <NavLink to={`/photos/${photo?.id}`}>
                                    <img src={photo?.imageUrl} className="homepage-photos"></img>
                                </NavLink>
                            </div>
                        </li>   
                        </div>
                        ))}
                        {/* {allUsers?.map(({id}) => (
                            <div className="user-box" key={(id)}>
                                <li key={id} className="inside-user-box">
                                    <NavLink to={`/users/${users[id]?.id}`}>
                                    {users[id]?.profileUrl ? <img src={users[id]?.profileUrl} className="profile-homepage"></img>:
                                    <img src="https://cdn.myportfolio.com/0da7f5fbc31f3b0a622becb5c04363c6/ee759715-7080-4029-8458-50a20bff014c_rw_1920.jpg?h=ba7face07c8aec7970909f3eb3c91045" className="profile-homepage"></img>
                                    }
                                    <h4>{users[id]?.firstName} {users[id]?.lastName}</h4>
                                    </NavLink>
                                    <NavLink to={`/photos/${}`}>
                                    <img src={one[id]?.imageUrl}></img>
                                    </NavLink>  
                                </li>
                            </div>
                        ))} */}
                    </ul>
                </div>
                <div className="right-home">
                    <div className="random-pics">
                        <h3 className="explore-header">Explore photos here</h3>
                        <div className="pics-box">
                            <NavLink to={`/photos/${photos[random]?.id}`} className="photo-link">
                                <img src={photos[random]?.imageUrl} className="random-right"></img>
                            </NavLink>
                            <NavLink to={`/photos/${photos[random1]?.id}`}className="photo-link">
                                <img src={photos[random1]?.imageUrl} className="random-right-one"></img>
                            </NavLink>
                            <NavLink to={`/photos/${photos[random2]?.id}`}
                            className="photo-link">
                                <img src={photos[random2]?.imageUrl}
                                className="random-right-two"></img>
                            </NavLink>
                            <NavLink to={`/photos/${photos[random3]?.id}`}className="photo-link">
                                <img src={photos[random3]?.imageUrl}
                                className="random-right-three"></img>
                            </NavLink>
                            <NavLink to={`/photos/${photos[random4]?.id}`}className="photo-link">
                                <img src={photos[random4]?.imageUrl}
                                className="random-right-four"></img>
                            </NavLink>
                            <NavLink to={`/photos/${photos[random5]?.id}`}className="photo-link">
                                <img src={photos[random5]?.imageUrl}
                                className="random-right-five"></img>
                            </NavLink>
                            <NavLink to={`/photos/${photos[random6]?.id}`}className="photo-link">
                                <img src={photos[random6]?.imageUrl}
                                className="random-right-six"></img>
                            </NavLink>   
                        </div>
                    </div>
                    <div className="editorial">
                        <h3 className="explore-header">Haute Stuff Editorial</h3>
                        <div className="latest-news">
                            <img src="https://i.postimg.cc/qvMyHtqN/287253098-2718787858255885-6572968416685801941-n.jpg" className="emma"></img>
                            <p>
                                Ran out of clothes to wear? Don't worry, pajama sets will work just fine. This  latest trend is too good to be true, cute and comfy. Time to swap out mini bags for pillows. What do you think? Share your lastest set!
                            </p>
                            <a href="https://www.instagram.com/emmachamberlain/" target="_blank" rel="noopener noreferrer">
                            <p className="emma-insta">
                                pc: Emma Chamberlain
                            </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

        


    )

    


}

