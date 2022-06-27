import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import "../components/assets/css/Login.css"
import { googleSignInInitiate, loginInitiate,fbSignInInitiate } from '../redux/actions'


const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const {currentUser} = useSelector((state)=>state.user);

    const history  = useHistory();

    useEffect(()=>{
        if(currentUser){
           history.push("/")
        }
    }, [currentUser,history]);

    const dispatch = useDispatch();

    const { email, password } = state;

    const handleGoogleSignIn = () => {
        dispatch(googleSignInInitiate());
     }

    const handleFBSignIn = () => { 
        dispatch(fbSignInInitiate());
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            return;
        };
        dispatch(loginInitiate(email,password));
        setState({email:"",password:""});
     };

    const handleChange = (e) => { 
        let {name,value} = e.target;
        setState({...state,[name]:value});
    }
    return (
        <div>
            <div id="logreg-forms">
                <form className='form-signin' onSubmit={handleSubmit}>
                    <h1 className='h3 mb-3' >Sign In</h1>
                    <div className="social-login">
                        <button className='btn google-btn social-btn' type='button' onClick={handleGoogleSignIn}>
                            <span>
                                <i className='fab fa-google-plus-g f'></i> <h6>Sign in with  Google</h6>
                            </span>
                        </button>

                        <button className='btn facebook-btn social-btn' type='button' onClick={handleFBSignIn}>
                            <span>
                                <i className='fab fa-facebook f'></i> <h6>Sign in with Facebook</h6>
                            </span>
                        </button>
                    </div>
                    <p >OR</p>
                    <input type="email"
                        id='inputEmail'
                        className='form-control'
                        name='email'
                        placeholder='Email Address'
                        onChange={handleChange}
                        value={email}
                        required />

                    <input type="password"
                        id='inputPassword'
                        className='form-control'
                        name='password'
                        placeholder='Password'
                        onChange={handleChange}
                        value={password}
                        required />

                     <button className='btn btn-secondary ' type='submit' > 
                       <i className='fas fa-sign-in-alt'></i> Sign In</button>
                     <hr />
                     <p >Don't have an account ?</p>
                     <Link to='/register'>
                     <button className='btn btn-primary ' type='button' id='btn-signup'>
                        <i className='fas fa-user-plus'></i> Sign Up New Account
                        </button>
                     </Link>
                </form>
            </div>
        </div>
    )
}

export default Login