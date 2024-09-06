import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../context/App_Context'




const Navbar = () => {
 
 const {isAuthenticate,setisAuthenticate,logOut}=useContext(AppContext)
 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transprent m-0">
  <NavLink className="navbar-brand" to={"/"}>Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mx-2">
    <li className="nav-item mx-2 ">
        <NavLink className="nav-link text-white" to={"/"}>Home </NavLink>
      </li>
    {isAuthenticate && (
      <>
    <li className="nav-item mx-2">
    <NavLink className="nav-link text-white" to={"/Add"}>Add</NavLink>
     </li>
    <li className="nav-item mx-2">
     <NavLink className="nav-link text-white" to={"/Profile"}>Profile</NavLink>
     </li>
     
     
     <li className="nav-item mx-2">
     <NavLink className="nav-link text-white" to={"/Saved"}>Saved</NavLink>
   </li>
   <button className='btn btn-outline-light mx-2 m-2 but-card' onClick={logOut}>LogOut</button>
   </>
  )}
      {!isAuthenticate && (
        <>
         
      <NavLink to={"/Login"}><button className='btn btn-outline-light mx-2 m-2'>Login</button></NavLink>
      <NavLink to={"/Register"}><button className='btn btn-outline-light mx-2 m-2'>Register</button></NavLink>        
      
      
        </>
      )}
        
      
    </ul>
    
  </div>
</nav>
    </>
  )
}

export default Navbar
