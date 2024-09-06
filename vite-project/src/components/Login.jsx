import React, { useState,useContext} from 'react'
import { AppContext } from '../context/App_Context';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  const {login}=useContext(AppContext)
  const [gmail,setgmail]=useState("")
  const [password,setpassword]=useState("")

  const loginHandler=async(e)=>{
    e.preventDefault();
    const result=await login(gmail,password)
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
      setTimeout(()=>{
      navigate('/')
      },1500)
    //console.log(result.data)
  }
  return (
    <>
    <ToastContainer/>

    <div className='container my-5 p-3'>
      <h2 className='text-center head-card1 p-2'>Login</h2>
      <div className='log-card m-2 p-2'>
      <form className='nav-card' onSubmit={loginHandler}>
  <div className="form-group " >
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input value={gmail} onChange={(e)=>setgmail(e.target.value)} type="email" className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" className="form-control"
     id="exampleInputPassword1" required/>
  </div>
  <div className='d-flex justify-content-center m-2'>
  <button type="submit" className="btn btn-outline-warning">Login</button>
  </div>
</form>
    </div>
    </div>
    </>
  )
}

export default Login