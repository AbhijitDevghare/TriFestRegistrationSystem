import { useState,useEffect, useContext } from "react";
import {   useNavigate } from 'react-router-dom'; // Import useNavigate

import CompetitonContext from "../../context/CompetitonContext"

function useGetUser()
{
    const navigate = useNavigate(); // Use useNavigate hook
    const [getUser,setGetUser,user,setUser] = useContext(CompetitonContext)

    
    const getUserData = async() =>{
             try {
               const resp = await fetch("http://localhost:8081/getuser",{
                  method:"GET",
                  credentials:"include"
              });
               
                 if (resp.status!=200) {
                    navigate('/login');  
                }


            
               const data = await resp.json();
               
               console.log("=========== GETUSER =============")
               const userInfo = await data.data;

               setUser(userInfo)              
               console.log(data);
               setGetUser(true); 
             
             } catch (error) {
                  console.log(error.message);
             }
          } 

    useEffect(()=>{
      getUserData();
    },[])

    return []


}

export default useGetUser