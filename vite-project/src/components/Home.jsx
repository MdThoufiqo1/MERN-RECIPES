import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const navigate = useNavigate()
  const { recipe,SavedRecipeById } = useContext(AppContext);

  const saved=async(id)=>{
    const result=await SavedRecipeById(id)
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
    
  }
  return (
    <>
    <ToastContainer/>
      <div className="container text-center mx-auto " >
        <div className="row d-flex justify-content-center align-items-center">
          {recipe.map((data) => {
            return (
              <div key={data._id} className=" my-3  m-2 bg-card">
                <div className="card home-card" style={{width: "16rem"}}>
                  <div className="d-flex justify-content-center align-items-center p-2 m-2">
                  <img src={data.imgUrl} className="card-img-top image-card" alt="image" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title ">{data.title}</h5>
                    <div className="my-2">
                      <button className="btn btn-success m-2" onClick={()=>saved(data._id)}>Save</button>
                      <button className="btn btn-outline-warning m-2" onClick={()=>navigate(`/${data._id}`)}>View More</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
