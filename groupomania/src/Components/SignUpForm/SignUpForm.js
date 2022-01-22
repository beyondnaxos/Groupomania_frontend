import React, { useState } from 'react';
import './SignUpForm.css'
// import { BrowserRouter as Link}  from "react-router-dom";
import Axios from 'axios'


const SignUpForm = () => {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const register = () => {
        Axios.post('http://localhost:8080/api/auth/signup', { email: usernameReg, password: passwordReg })
            .then((response) => {
                console.log(response);
            })
    }

    return (

        <>

            <form className='container-form'>
                <h1 className='title-login'>Sign Up</h1>
                <input
                    onChange={(e) => { setUsernameReg(e.target.value) }}
                    type="text"
                    id='title'
                    placeholder='email'
                    className='inp-title' />
                <input
                    onChange={(e) => { setPasswordReg(e.target.value) }}
                    type="password"
                    id='title'
                    placeholder='password'
                    className='inp-title' />

                <button
                    onClick={register}
                    className='log-btn'>Connect</button>

            </form>
        </>
    );
}

export default SignUpForm;
