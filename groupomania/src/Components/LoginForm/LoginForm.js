import React, { useState } from 'react';
import './LoginForm.css'
import Axios from 'axios'


const LoginForm = () => {

    const [usernameLog, setUsernameLog] = useState('')
    const [passwordLog, setPasswordLog] = useState('')

    const register = () => {
        Axios.post(
            'http://localhost:8080/api/auth/login', { email: usernameLog, password: passwordLog })
            .then((response) => {
                console.log(response);
            })
    }


    return (

        <>

            <form className='container-form'>
                <h1 className='title-login'>Sign In</h1>
                <input
                    onChange={(e) => { setUsernameLog(e.target.value) }}
                    type="text"
                    id='title'
                    placeholder='email'
                    className='inp-title' />
                <input
                    onChange={(e) => { setPasswordLog(e.target.value) }}
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

export default LoginForm;
