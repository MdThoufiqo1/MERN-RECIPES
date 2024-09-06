import React, { useEffect, useState } from 'react'
import { AppContext } from './App_Context'
import axios from 'axios'


const App_State = (props) => {
  const url="https://mern-recipes-api.onrender.com/api";
  const [token,setToken]=useState("")
  const [recipe,setRecipe]=useState([])
  const [savedRecipe,setSavedRecipe]=useState([])
  const [user,serUser]=useState([])
  const [userId,setUserId]=useState("")
  const [userRecipe,setUserRecipe]=useState([])
  const [isAuthenticate,setisAuthenticate]=useState(false)
  const [reload,setreload]=useState(true)
  
  useEffect(()=>{
   const fetchRecipe=async()=>{
    const api =await axios.get(`${url}/`,
      {
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true
     }
    
    );
    //console.log(api.data.recipe)
    setRecipe(api.data.recipe) 
   };
   fetchRecipe();
   getSavedRecipeById();
   profile();
   recipeByUser(userId);
  },[token,userId,reload])
  
  useEffect(()=>{
    if(token){
      localStorage.setItem("token",token)
    }
    const tokenFromLocal=localStorage.getItem("token",token)
    if(tokenFromLocal){
      setToken(tokenFromLocal);
      setisAuthenticate(true)
    }
  },[token,reload])

  //register
  const register = async (name,gmail,password)=>{
    const api =await axios.post(`${url}/register`,{
     name,gmail,password,
    },{
     headers:{
       "Content-Type":"application/json"
     },
     withCredentials:true
    })
    setToken(api.data.token)
    return api
    //console.log("login data",api)
   }


  //login
  const login = async (gmail,password)=>{
   const api =await axios.post(`${url}/login`,{
    gmail,password,
   },{
    headers:{
      "Content-Type":"application/json"
    },
    withCredentials:true
   })
   setToken(api.data.token)
   setisAuthenticate(true)
   return api
   //console.log("login data",api)
  }

   //addrecipe
   const addRecipe=async (title,inst,ing1,ing2,qty1,qty2,imgUrl)=>{
    const api =await axios.post(`${url}/add`,{
      title,inst,ing1,ing2,qty1,qty2,imgUrl,
     },{
      headers:{
        "Content-Type":"application/json",
        Auth:token
      },
      withCredentials:true
     })
     setToken(api.data.token)
     setreload(!reload)
     return api
     

   }
  //
   const getRecipeById=async(id)=>{
    const api =await axios.get(`${url}/${id}`,
      {
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true
     });
    return api 
   }
   //savedRecipebyid
   const SavedRecipeById=async (id)=>{
    const api =await axios.post(`${url}/${id}`,{},
      {
      headers:{
        "Content-Type":"application/json",
        Auth:token,
      },
      withCredentials:true
     });
     setreload(!reload)
    return api
   }
   //getsaved
   const getSavedRecipeById=async()=>{
    const api =await axios.get(`${url}/saved`,
      {
      headers:{
        "Content-Type":"application/json",
      },
      withCredentials:true,
     });
     //console.log("getting saved recipe",api.data.recipe)
     setSavedRecipe(api.data.recipe);
    //return api
   };

   const profile=async()=>{
    const api =await axios.get(`${url}/user`,
      {
      headers:{
        "Content-Type":"application/json",
         Auth:token,
      },
      withCredentials:true,
      
     });
     //console.log("this is user profile",api.data.user)
     setUserId(api.data.user._id)
     serUser(api.data.user)   
    }

    const recipeByUser=async(id)=>{
      const api =await axios.get(`${url}/user/${id}`,
        {
        headers:{
          "Content-Type":"application/json",
        },
        withCredentials:true,
        
       });
      //console.log("user specific",api.data.recipe)
      setUserRecipe(api.data.recipe)
    }
    const logOut=()=>{
      localStorage.removeItem("token",token)
      setToken("")
      setisAuthenticate(false)
    }
    

  return (
    <AppContext.Provider value={{
  login,register,addRecipe,recipe,getRecipeById,SavedRecipeById,savedRecipe,user,userRecipe
  ,isAuthenticate,setisAuthenticate,setToken,logOut,
    }}>{props.children}</AppContext.Provider>
  )
}

export default App_State
