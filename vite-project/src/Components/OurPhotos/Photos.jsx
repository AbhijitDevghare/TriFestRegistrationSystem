import "./Photos.css"
import CompetitonContext from "../../context/CompetitonContext"
import { useContext } from "react";
import {  Navigate, useNavigate } from 'react-router-dom'; // Import useNavigate


function Photos(props)
{
    const [getUser,setGetUser,user,setUser] = useContext(CompetitonContext)
    const navigate = useNavigate(); // Use useNavigate hook

    const handleImage=()=>{
        (user.role === "admin") ? navigate(`/deleteImage/${props.imageId}`) :""
    }


    return(
        <div id="photo-section" data-aos="fade-up">
            <img src={props.imgName} alt={props.altName} onClick={handleImage}/>
        </div>
    )
}

export default Photos