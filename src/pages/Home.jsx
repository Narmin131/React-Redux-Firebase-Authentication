import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { logoutInitiate } from '../redux/actions';

const Home = () => {

  const {currentUser} = useSelector((state)=>state.user);
  const dispatch = useDispatch();

  const handleAuth =()=>{
   if(currentUser){
    dispatch(logoutInitiate());
   }
  }

  return (
    <div>
        <h2 style={{textAlign:"center",fontWeight:"bold",marginTop:"30px"}}>Welcome to our site</h2>
        <br />
        <button 
        className='btn btn-danger'
        onClick={handleAuth}
        style={{textAlign:"center",
        display:"flex",
        margin:"0 auto"
      }}
        >Log Out</button>
    </div>
  )
}

export default Home