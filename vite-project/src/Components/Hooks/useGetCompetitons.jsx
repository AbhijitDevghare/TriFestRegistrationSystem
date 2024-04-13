import { useEffect, useState } from "react";

function useGetCompetitions()
{
    const [compData,setCompData] = useState({})
    const [photoUrl,setPhotoUrl] = useState({})
    const [isGetComp,setisGetComp] = useState(false);

    

    const getCompetitonData=async()=>{
        try {
            const resp = await fetch("http://localhost:8081/getCompetitions",{
               method:"GET"
           });

           if(resp.status==200)
           {
            const data = await resp.json();
            
            console.log("=========== GETCOMPETITION =============")
           
            const competition = await data.competitionData; 
            const photos = await data.photos;
            setPhotoUrl(photos)
           
            console.log(data);
            setCompData(competition);
            setisGetComp(true);

           
           }
            
          } catch (error) {
               console.log(error.message);

          }
    }

    useEffect(()=>{
        getCompetitonData();
    },[])

    return [compData,photoUrl,isGetComp]

}

export default useGetCompetitions