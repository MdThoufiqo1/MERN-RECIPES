import React,{useContext} from 'react'
import { AppContext } from '../context/App_Context'
import { Link } from 'react-router-dom'

const Profile = () => {
  const {user,userRecipe}=useContext(AppContext)
  return (
    <>
    <div className='container text-center'>
    <h1 className='head-card1'>Welcome,{user.name}</h1>
    <h2 className='head-card1'>{user.gmail}</h2>
    </div>
    <div>
    <div className="container text-center mx-auto " >
        <div className="row d-flex justify-content-center align-items-center">
          {userRecipe?.map((data) => {
            return (
              <div key={data._id} className=" my-3  m-2 bg-card">

                <div className="card profile-card" style={{width: "16rem"}}>
                  <div className="d-flex justify-content-center align-items-center p-2 m-2">
                  <img src={data.imgUrl} className="card-img-top image-card" alt="image" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-white">{data.title}</h5>
                    <Link to={"/"}><button className="btn btn-success mx-2">back</button></Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile