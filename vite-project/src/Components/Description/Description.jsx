import { useParams } from "react-router-dom"
import { Link, Navigate, useNavigate } from 'react-router-dom'; // Import useNavigate

import "../Home/Home.css"
import MenuBar from "../menuBar/menuBar"
import "./Description.css"
import useDeleteCompetition from "../Hooks/useDeleteCompetition"
import useDescription from "../Hooks/useDescription";
import CompetitonContext from "../../context/CompetitonContext"
import { useContext } from "react";

function Description()
{
    const [getUser,setGetUser,user,setUser] = useContext(CompetitonContext)
    console.log("USER : "+user)

    const [deleteComp,message] = useDeleteCompetition();
    const competitionIds = useParams()
    
    const navigate = useNavigate(); // Use useNavigate hook
  
    const id = competitionIds.comp_id;
    const [compData,isCompetition] = useDescription(id)

    const handleDeleteButton = ()=>{
      deleteComp(id,navigate);
    }
    
    return (
        <>
        <MenuBar/>
          <div className="section" id="descriptionId">
        {
          (!isCompetition) ?(<h2 className="">Please Wait</h2>) :<>
                        
                        <h2>{compData.name}</h2>
                      <div>
                        <h2>Description : </h2>
                       <p>{compData.description}</p>
                      </div>
                      <div>
                        <h2>Fees : </h2>
                        <p>{compData.fees}</p>
                      </div>

                      <div>
                        <h2>Start Date : </h2>
                        <p>{compData.startDate}</p>
                      </div>
                      <div>
                        <h2>End Date : </h2>
                        <p>{compData.endDate}</p>
                      </div>

                      <div>
                        <h2>Time : </h2>
                        <p>{compData.time}</p>
                      </div>

                      <div>
                        <h2>Prize</h2>
                        <p>First Prize : {compData.prize.firstPlace} <br />
                           Second Prize : {compData.prize.secondPlace} <br />
                           Third Prize : {compData.prize.thirdPlace}
                         </p>
                      </div>
                      <div>
                         <h2>Coordinators : </h2>  
                         
                           
                      <p>Coordinator 1 : {compData.coordinators.coordinator1} <br /> 
                       Coordinator 2 :   {compData.coordinators.coordinator2} <br />
                       Coordinator 3 : {compData.coordinators.coordinator3} <br />
                       Contact Number : {compData.coordinators.contactNum}
                      </p>         
                              
                      </div>
                      

                      <img src={compData.imageUrl} alt="Image Not Found" />
                      <Link to={`https://docs.google.com/forms/d/e/1FAIpQLSf7cuVGXAHBhHRUql9fgbcT6fKVPs6If_1leCNxD5CZDR87Uw/viewform`}>
                      <button id="registerCompButton">Register</button>
                      </Link>
                      {/*  */}
          </>
        }
                      
                      {
                        (!getUser)?(""):user.role === "admin" ? (
                          <>
                              <button disabled>Edit</button>
                              <button onClick={handleDeleteButton} className="deleteButton">Delete</button>
                              <label className="labelResp" >{message}</label>
                          </>
                      ) : (
                          <>

                          </>
                      )
                      }
                         
          </div>
        </>
    )
}

export default Description