import React, { useState } from 'react';
import './SignUpForm.css'
// import { BrowserRouter as Link}  from "react-router-dom";
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'

const SignUpForm = () => {

    const [emailReg, setEmailReg] = useState('')
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    let navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault();
        const response = await Axios.post('http://localhost:8080/api/auth/signup', { email : emailReg, username: usernameReg, password: passwordReg })
        console.log(response);
        navigate('/login')
    }




    return (

        <>

            <form className='container-form'>
                <h1 className='title-login'>Sign Up</h1>
                <input
                    onChange={(e) => { setEmailReg(e.target.value) }}
                    type="text"
                    id='title'
                    placeholder='email'
                    className='inp-title' />
                <input
                    onChange={(e) => { setUsernameReg(e.target.value) }}
                    type="text"
                    id='title'
                    placeholder='username'
                    className='inp-title' />
                <input
                    onChange={(e) => { setPasswordReg(e.target.value) }}
                    type="password"
                    id='title'
                    placeholder='password'
                    className='inp-title' />

                <button
                    onClick={register}
                    className='log-btn'>Create</button>

            </form>
        </>
    );
}

export default SignUpForm;
