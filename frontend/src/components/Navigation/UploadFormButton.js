import { NavLink } from "react-router-dom"
import UploadForm from "../UploadFormPage"

export default function UploadFormButton () {
    
    return (
        <>
        <NavLink to="/new">
            <button>Upload a Photo</button>
        </NavLink>
        </>
    )
}