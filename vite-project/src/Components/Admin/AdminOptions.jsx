import AddCompetition from "../AddCompetition/AddCompetition"
import AddPhotos from "../AddPhotos/AddPhotos"
import MenuBar from "../menuBar/menuBar"
import "./AdminOptions.css"
import CompetitonContext from "../../context/CompetitonContext"
import { useContext } from "react";

function AdminOptions()
{
    const [getUser,setGetUser,user,setUser] = useContext(CompetitonContext)

    return (
        <>
            <MenuBar/>
            {
                (user.role=="admin")?  <><AddCompetition/><AddPhotos/></> :<h2 className="centerH2">You are not an admin</h2>
               
            }
        </>
    )
}

export default AdminOptions