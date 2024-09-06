import React, { useContext } from 'react'
import { AppContext } from '../context/App_Context'
import FetchRecipe from './FetchRecipe';
import '../App.css'

const Saved = () => {
  const {savedRecipe}=useContext(AppContext);
  //console.log(savedRecipe);
  return (
    <>

    <div>
    <h2 className='head-card1 text-center'>Saved Recipe</h2>
      <div className='bg-card justify-content-center'>
        
    {savedRecipe.map((da)=>(
     <div className="bg-card home-card  my-2 m-2 " key={da.recipe}>
      
        <FetchRecipe id={da.recipe}/> 
     </div>
))}

    </div>
    </div>
    </>
  )
}

export default Saved