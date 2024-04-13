import { Link , Navigate, useNavigate } from "react-router-dom"
import "./Register.css"
import useRegister from "../Hooks/useRegister"

function Register()
{
    const [handleName, handleUserName, handleUserPassword,handleUserEmail,register,message,setMessage] = useRegister();
    const navigate = useNavigate(); // Use useNavigate hook

    const handleregister = () => {
        register(navigate); // Pass navigate function to the register function
      };
    
    return(
        <>
        <div className="section register">
            <h2>Signup</h2>
                <div>
                <label>Name : </label>
                <input type="text" name="" id="" placeholder="Enter your name" onChange={handleName}/>
               <label>username :</label>
               <input type="text"  placeholder="Enter username" onChange={handleUserName}/>
               <label>password</label>
               <input type="password" placeholder="Enter password" onChange={handleUserPassword} />
               <label>Confirm password : </label>
               <input type="password" name="" id="" placeholder="Confirm your password" />
               <label>Email :</label>
               <input type="text" name="" id=""  placeholder="Enter your email" onChange={handleUserEmail}/>
                </div>
            <label className='labelResp'>{message}</label>
            <button type="submit" onClick={handleregister}>Submit</button>
            <div>
                <Link to={"/login"}>
                <p>Login </p>
                </Link>
            </div>
    
               
        </div>
        </>
    )
}

export default Register