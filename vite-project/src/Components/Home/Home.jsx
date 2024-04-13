import "./Home.css";
import Theme from "../Theme/Theme";
import MenuBar from "../menuBar/menuBar";
import Competition from "../Competition/Competition";
import Photos from "../OurPhotos/Photos";
import useGetCompetitions from "../Hooks/useGetCompetitons";
import useGetUser from "../Hooks/useGetUser";

import { useContext, useEffect } from "react";
import CompetitonContext from "../../context/CompetitonContext"



function Home()  
{ 
      const [getUser,setGetUser,user,setUser] = useContext(CompetitonContext)
      const [getUserData] = useGetUser();
      const [compData,photoUrl,isGetComp] = useGetCompetitions();
      
      
     return (
      <>
            <MenuBar/>
            <div className="CenterUpperSecTheme">
            <Theme/>
            </div>  

            {/* ----------------- -------------------------------------------------------------------------- */}
            
            {/* ------------------------------------------------------------------------------------------- */}


            {!((getUser) && (isGetComp)) ? ("") :
            <>
            <div className="section">
                       <h1>Events in Tri-Fest</h1>
                        <div>
                          {compData.map((comp)=>{return <Competition imgSrc={comp.imageUrl} name={comp.name} altName={comp.name}  key={comp._id} comp_id={comp._id}/>})}
                              
                       </div>
            </div>
            <div className="section">
                        <h1>Our Photos</h1>
                        <div>
                              {photoUrl.map((photo)=>{
                                    return <Photos imgName={photo.imageUrl} altName={"Image not found"} imageId={photo._id}/>
                              })}

                         
                        </div>
            </div>
            </>
}
      
      </>
     )
        

}

export default Home