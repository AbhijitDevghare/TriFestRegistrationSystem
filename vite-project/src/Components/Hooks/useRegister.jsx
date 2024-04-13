import { useState } from "react";

function useRegister()
{
    const [name,setName] = useState("");
    const [userName, setUserName] = useState("");
    const [passWord, setPassword] = useState("");
    const [email,setEmail] = useState("");
    
    const [message,setMessage] = useState("");
    
  
    const handleName = (event) => {
        setName(event.target.value);
      };
  
      
    const handleUserName = (event) => {
      setUserName(event.target.value);
    };
  
    const handleUserPassword = (event) => {
      setPassword(event.target.value);
    };

    const handleUserEmail = (event) => {
        setEmail(event.target.value);
      };
  
      
  
    async function register(navigate) {
      const payload = {
        name:name,
        username: userName,
        password: passWord,
        email:email,
        confirmPassword:passWord
      };
  
      try {
        const resp = await fetch("http://localhost:8081/signup", {
          method: "POST",
          credentials: "include",
          redirect: "follow",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
  
        const respMessage = await resp.json();
        console.log(respMessage.message)
        setMessage(respMessage.message)
  
        if (resp.ok) {
          navigate('/login');
        } else {
          // Handle login error
          console.error("Registration failed:", resp.statusText);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }
  
    return [handleName, handleUserName, handleUserPassword,handleUserEmail,register,message,setMessage];
}

export default useRegister