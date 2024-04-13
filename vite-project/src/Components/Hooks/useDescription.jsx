import { useEffect, useState } from "react";

function useDescription(id)
{
    const [message, setMessage] = useState("");
    const  [compData,setCompData]=useState({});
    const [isCompetition,setisCompetition] = useState(false);

    const getDescription = async () => {
        try {
            const resp = await fetch(`http://localhost:8081/getCompDescription/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            });


            if(resp.status==200)
            {   
            const respMessage = await resp.json();
            setCompData(respMessage.message);
            
            setisCompetition(true)
            }
            



            
        } catch (error) {
            console.error("Error in fetching the competition:", error);
            setMessage("Error occurred while fetching competition");
            // Handle error
        }
    }

    useEffect(()=>{
        getDescription();
    },[])

    return [compData,isCompetition]
   
}

export default useDescription