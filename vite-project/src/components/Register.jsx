import React, { useState,useContext} from 'react'
import { AppContext } from '../context/App_Context';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate=useNavigate()
  const {register}=useContext(AppContext)
  const [name,setName]=useState("")
  const [gmail,setgmail]=useState("")
  const [password,setpassword]=useState("")

  const registerHandler=async(e)=>{
    e.preventDefault();
    const result=await register(name,gmail,password)
    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
      if(result.data.message !== "User already exist"){
        setTimeout(()=>{
          navigate('/Login')
          },1500);
      }
  }

  return (
    <>
    <ToastContainer/>
    <div className='container my-5 p-3'>
      <h2 className='text-center head-card1 p-2'>Register</h2>
      <div className='log-card m-2 p-2'>
      <form className='nav-card' onSubmit={registerHandler}>
      <div className="form-group " >
    <label htmlFor="exampleInputName">Name</label>
    <input value={name} onChange={(e)=>setName(e.target.value)} required type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
    
  </div>
 
  <div className="form-group ">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input value={gmail} onChange={(e)=>setgmail(e.target.value)} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input value={password} onChange={(e)=>setpassword(e.target.value)} required type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className='d-flex justify-content-center m-2'>
  <button type="submit" className="btn btn-outline-warning">Register</button>
  </div>
</form>
    </div>
    </div>
    </>
  )
}

export default Register