import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/App_Context";
import { Link,useLocation } from "react-router-dom";

const FetchRecipe = ({ id }) => {
  const location=useLocation()
  const { getRecipeById } = useContext(AppContext);
  const [recipe,setRecipe]=useState("");

  useEffect(() => {
    const fetchRecipeapi =async (id) => {
      const result = await getRecipeById(id);
      //console.log("recipe by id", result);
      setRecipe(result.data.recipe)
    };

    fetchRecipeapi(id);
  }, [id]);

  return (
    <>
    <div className="container">
    <div className="row">
    <div className="col-12  text-center">
    <div className="d-flex justify-content-center align-items-center p-2 m-2 ">
    <img src={recipe.imgUrl} className="card-img-top image-card" alt="image" />
    </div>
    <h3 className="head-card1">{recipe.title}</h3>
    </div>
    
    {location.pathname !== '/Saved' &&(
      <>
      <div className="col-12 text-center">
      <p className="para-card">{recipe.inst}</p>
       
       
       <div className=" text-center m-2">
         
         <h2 className="ing-card">{recipe.ing1},{recipe.qty1}</h2>
         <h2 className="ing-card">{recipe.ing2},{recipe.qty2}</h2>
         
         </div>  

       </div>
       
           
      </>
    )}
    </div>
    <Link to={"/"}><button className="btn btn-success mx-2 m-2">back</button></Link>
    </div>
 
    </>
  )
};

export default FetchRecipe;
