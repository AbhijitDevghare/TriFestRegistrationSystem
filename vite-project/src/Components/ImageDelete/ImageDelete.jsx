import { useParams } from "react-router-dom"
import MenuBar from "../menuBar/menuBar";
import useDeleteImage from "../Hooks/useDeleteImage";
import {  Navigate, useNavigate } from 'react-router-dom'; // Import useNavigate
import delImage from "./deleteImage.jpg";
import "./ImageDelete.css"

function ImageDelete()
{

    const [deleteimg, message] = useDeleteImage();
    const navigate = useNavigate(); // Use useNavigate hook

    const deleteParam= useParams();
    const id = deleteParam.imageId;
    console.log("IMAGE ID "+id)
    

    const handleDeleteButton = ()=>{
        deleteimg(id,navigate);
    }
    return(
        <>
        <MenuBar/>
        <div className="section" id="deleteImageSec">
            <img src={delImage} alt="DELETE IMAGE" className="deleteImg"/>
            <label htmlFor="">{message}</label>
            <button onClick={handleDeleteButton} className="deleteButton">Delete Image</button>

        </div>
        </>
    )
}

export default ImageDelete