    import { useState } from "react"

    function useAddImage()
    {
        const [PhotoUrl,setPhotoUrl] = useState("");
        const [message,setMessage] = useState("");

        const handleImageInput=(event)=>{
            setPhotoUrl(event.target.value);
            // console.log(event.target.value)
        }
        
        const addImage=async()=>{
            console.log("PHOTO URL :"+PhotoUrl)
            try{
            const payload ={
            imageUrl:PhotoUrl
            }    
            const resp = await fetch("http://localhost:8081/addPhoto", {
                method: "POST",
                credentials: "include",
                redirect: "follow",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const responseMessage = await resp.json();
            setMessage(responseMessage.message)

            console.log("Response : "+responseMessage.message)
            }catch(error){
                console.log("Error during Adding Image:"+error)
            }
        
        }

        return [handleImageInput,addImage,message]
    }
    export default useAddImage