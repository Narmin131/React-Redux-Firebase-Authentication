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
        <h2>Welcome to our site</h2>
        <br />
        <button 
        className='btn btn-danger'
        onClick={handleAuth}
        >Log Out</button>
    </div>
  )
}

export default Home