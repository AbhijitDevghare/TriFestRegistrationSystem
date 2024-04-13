import { Link } from "react-router-dom"
import "./Competition.css";


function Competition(props)
{
  
  
  return(
    <>
       <div id="Competition-Box" data-aos="fade-up" >
        
        <img src={props.imgSrc} alt={props.altName} />
         <p>{props.name}</p>
         {/* <p>Registration Fee : {props.fees}/-</p> */}
         {/* <p>Prize : {props.prize}/-</p>     */}

        <Link to={`/${props.comp_id}`}>
            <button id="Register-Button">Event Details</button>
        </Link>
       </div>

       
    </>
  )
}

export default Competition


