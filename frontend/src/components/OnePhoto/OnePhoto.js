import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { addAPhoto } from "../../store/upload"


export default function OnePhoto () {

    const dispatch = useDispatch()
    const {imageId} = useParams()

    const onePhoto = useSelector((state) => state.upload.photos)
    
    //console.log(onePhoto)

    // useEffect(() => {
    //     dispatch(addAPhoto(imageId))
    // },[dispatch, imageId])

    return (
        <>
        <h1>One Photo</h1>
        </>
    )
}