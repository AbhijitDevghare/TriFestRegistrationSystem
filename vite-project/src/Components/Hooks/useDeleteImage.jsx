import { useState } from "react";

function useDeleteImage()
{
    const [message, setMessage] = useState("");
    
    const deleteimg = async (id, navigate) => {
        try {
            const resp = await fetch(`http://localhost:8081/deleteImage/${id}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    // You may need to include other headers like authorization token if required
                }
            });

            const respMessage = await resp.json();

            if (resp.ok) {
                setMessage(respMessage.message);
                // Handle success
                if (resp.status === 200) {
                    if (navigate) {
                        navigate('/');
                    }
                } else {
                    console.error("Delete failed:", resp.statusText);
                }
            } else {
                console.error("Error in deleting the Image");
            }
        } catch (error) {
            console.error("Error in deleting the Image:", error);
            setMessage("Error occurred while deleting Image");
        
        }
    }

    return [deleteimg, message];
}

export default useDeleteImage