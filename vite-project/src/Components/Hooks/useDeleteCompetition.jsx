import { useState } from "react";

function useDeleteCompetition() {
    const [message, setMessage] = useState("");

    const deleteComp = async (id, navigate) => {
        try {
            const resp = await fetch(`http://localhost:8081/deleteComp/${id}`, {
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
                console.error("Error in deleting the competition");
            }
        } catch (error) {
            console.error("Error in deleting the competition:", error);
            setMessage("Error occurred while deleting competition");
        
        }
    }

    return [deleteComp, message];
}

export default useDeleteCompetition;
