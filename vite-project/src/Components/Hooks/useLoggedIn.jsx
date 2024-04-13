import { useState } from "react";

function useLoggedIn() {
  // const [isLoggedInState, setIsLoggedInState] = useState(false);
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [message,setMessage] = useState("");

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleUserPassword = (event) => {
    setPassword(event.target.value);
  };

  async function login(navigate) {
    const payload = {
      username: userName,
      password: passWord
    };

    try {
      const resp = await fetch("http://localhost:8081/login", {
        method: "POST",
        credentials: "include",
        redirect: "follow",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const respMessage = await resp.json();
      console.log(respMessage.message)
      setMessage(respMessage.message)
      
      if (resp.status==200) {
        navigate('/');
      } else {
        console.error("Login failed:", resp.statusText);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  return [handleUserName, handleUserPassword, login,message,setMessage];
}

export default useLoggedIn;
