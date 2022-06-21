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

    // useEffect(() => {
    //     async function fetchData() {
    //       const response = await fetch('/api/users/all');
    //       const responseData = await response.json();
    //       const one = {};
    //       responseData.forEach((user) => {
    //           one[user.id] = user;
    //         });
            
    //     console.log("THIS IS response DATA-----", one)
    //       setUsers(one);
    //     }
    //     fetchData();
    //   }, []);


    const one = {};
    photos?.forEach((photo) => {
      one[photo.id] = photo;
    });

   console.log("THIS IS PHOTOS-----------", photos)

    


    const users = {};
    allUsers?.forEach((user) => {
      users[user.id] = user;
    });

    console.log("THIS IS ONE---------", users)

    // const photosArray = Object.values(photos)

    

    useEffect(() => {
        dispatch(loading())
        dispatch(loadAllUsers())
    }, [dispatch])


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
                                    <p className="text">{one[id]?.description}</p>
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
                                    {/* <p className="text">{one[id]?.description}</p> */}
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
                        
                    </div>
                </div>
            </div>
        </div>
        </>

        


    )

    


}

