import React, { useState } from 'react';
import './SignUpForm.css'
// import { BrowserRouter as Link}  from "react-router-dom";
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {


    const UseRegex= (input) => {
        let regex = /admin@[a-zA-Z]+\.[a-zA-Z]+/i
        return regex.test(input)
    }

    const [emailReg, setEmailReg] = useState('')
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    let navigate = useNavigate()

    const register = async (e) => {
        if (UseRegex(emailReg)) {
        e.preventDefault();
        const response = await Axios.post('http://localhost:8080/api/auth/signup', { email: emailReg, username: usernameReg, password: passwordReg, isAdmin: true})
        console.log(response);
    }else {
        e.preventDefault();
        const response = await Axios.post('http://localhost:8080/api/auth/signup', { email: emailReg, username: usernameReg, password: passwordReg, isAdmin: false })
        console.log(response);

    }
        navigate('/login')
    }

    const signup = () => {
        navigate('/login')
    }

    


    return (

        <>

            <form className='container-form'>
                <h1 className='title-login'>Sign Up</h1>
                <input
                    onChange={(e) => { setEmailReg(e.target.value) }}
                    type="text"
                    id='email'
                    placeholder='email'
                    className='inp-title' />
                <input
                    onChange={(e) => { setUsernameReg(e.target.value) }}
                    type="text"
                    id='username'
                    placeholder='username'
                    className='inp-title' />
                <input
                    onChange={(e) => { setPasswordReg(e.target.value) }}
                    type="password"
                    id='password'
                    placeholder='password'
                    className='inp-title' />
                <div id="btns-allign">
                    <button
                        onClick={signup}
                        className='log-btn-alt'>Login</button>
                    <button
                        onClick={register}
                        className='sign-btn'>Create</button>
                </div>

            </form>
        </>
    );
}

export default SignUpForm;
