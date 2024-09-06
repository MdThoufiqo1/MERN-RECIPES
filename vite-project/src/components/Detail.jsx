import React from 'react'
import { useParams } from 'react-router-dom'

import FetchRecipe from './FetchRecipe'

const Detail = () => {
    const { id }=useParams();
    
  return (
    <div>
        <FetchRecipe id={id}/>
    </div>
  )
}

export default Detail