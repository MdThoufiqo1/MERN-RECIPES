import React, { useState,useContext} from 'react'
import { AppContext } from '../context/App_Context';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const AddRecipe = () => {
    const navigate=useNavigate()
    const {addRecipe}=useContext(AppContext)
    const [formdata,setformdata]=useState({
        title:"",inst:"",ing1:"",ing2:"",qty1:"",qty2:"",imgUrl:"",
    })

    const onChangeHandler=(e)=>{
        const {name,value}=e.target
        setformdata({...formdata,[name]:value})
    }
    const onSubmitHandler=async(e)=>{
        e.preventDefault()
        const {title,inst,ing1,ing2,qty1,qty2,imgUrl,}=formdata

        const result=await addRecipe(title,inst,ing1,ing2,qty1,qty2,imgUrl,);

        //console.log("create recipe",result)
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
          //
       
    }
  
  return (
    <>
    <ToastContainer/>
    <div className='container my-2 '>
      <h2 className='text-center head-card1 p-2'>Add Recipe</h2>
      <div className='log-card m-2 p-2'>
      <form className='nav-card ' onSubmit={onSubmitHandler}>
      <div className="form-group ">
    <label htmlFor="exampleInputtitle">title</label>
    <input name="title" value={formdata.title} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputtitle" aria-describedby="emailHelp"/>
    
  </div>
  <div className="form-group ">
    <label htmlFor="exampleInputdes">description</label>
    <input name="inst" value={formdata.inst} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputdes" aria-describedby="emailHelp"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputing1">ing1</label>
    <input name="ing1" value={formdata.ing1} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputing1"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputing2">ing2</label>
    <input name="ing2" value={formdata.ing2} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputing2"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputqty1">ing3</label>
    <input name="qty1" value={formdata.qty1} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputqty1"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputqty2">ing4</label>
    <input name="qty2" value={formdata.qty2} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputqty2"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputUrl">Image Url</label>
    <input name="imgUrl" value={formdata.imgUrl} onChange={onChangeHandler} type="text" className="form-control" id="exampleInputUrl"/>
  </div>
  <div className='d-flex justify-content-center m-2'>
  <button type="submit" className="btn btn-outline-warning">Add</button>
  </div>
</form>
    </div>
    </div>
    </>
  )
}

export default AddRecipe