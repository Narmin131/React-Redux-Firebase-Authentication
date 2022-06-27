import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import "../components/assets/css/Register.css"
import { registerInitiate } from '../redux/actions'


const Register = () => {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })

    const {currentUser} = useSelector((state)=>state.user);

    const history  = useHistory();

    useEffect(()=>{
        if(currentUser){
           history.push("/")
        }
    }, [currentUser,history]);

    const dispatch = useDispatch();
    
    const { email, password, displayName, passwordConfirm } = state;

    const handleSubmit = (e) => { 
        e.preventDefault();
        if(password !== passwordConfirm){
            return;
        }
        dispatch(registerInitiate(email,password,displayName))
        setState({email:"",displayName:"",password:"",passwordConfirm:""})
    }
    const handleChange = (e) => { 
        let {name,value} = e.target;
        setState({...state,[name]:value});
    }
    return (
        <div>
            <div id="register-form">
                <form className='form-signup' onSubmit={handleSubmit}>
                    <h1 className='h3 mb-3 font-weight-normal' style={{ textAlign: "center" }}>Sign Up</h1>

                    <input type="text"
                        id='displayName'
                        className='form-control'
                        name='displayName'
                        placeholder='Full Name'
                        onChange={handleChange}
                        value={displayName}
                        required />

                    <input type="email"
                        id='user-email'
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

                    <input type="password"
                        id='inputRePassword'
                        className='form-control'
                        name='passwordConfirm'
                        placeholder='Repeat Password'
                        onChange={handleChange}
                        value={passwordConfirm}
                        required />

                    <button className='btn btn-primary mx-auto ' type='submit' >
                        <i className='fas fa-user-plus'></i> Sign Up</button>
                   <Link to="/login">
                    <i className="fas fa-angle-left"></i> Back
                   </Link>
                    
                </form>
                <br />
            </div>
        </div>
    )
}

export default Register