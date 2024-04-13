import "./UserAccount.css"
import MenuBar from "../menuBar/menuBar"
import UserImg from "./user.png";

import { useContext, useEffect } from "react";
import CompetitonContext from "../../context/CompetitonContext"

function Account()
{
  const [getUser,setGetUser,user,setUser] = useContext(CompetitonContext)

    return (
        <>
        <MenuBar/>
       <br /><br /><br />
        
          {
            (!getUser)?(""):(<> 
                    <div id="userAccountDiv">
          <u><p>User Details</p></u>
          <img src={UserImg} alt="Image not found" />
          <div id="details">
          <p>Name : {user.name}</p>
          <p>username : {user.username}</p>
          <p>Email : {user.email}</p>
          <p>Role : {user.role}</p>

            </div>          
        </div>
            </>)
          }
          <div>
          </div>
        </>
    )
}

export default Account