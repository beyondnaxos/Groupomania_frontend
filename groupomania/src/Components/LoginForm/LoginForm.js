
import React, { useState } from 'react';
import './LoginForm.css'
import Axios from 'axios'

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const login = () => {
        Axios.post(
            'http://localhost:8080/api/auth/login', { email: email, password: password })
            .then((response) => {
                console.log(response)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('username', response.data.username)
                
            })
            .catch(error => alert(error))
    }

    // const onSubmit = (e) => e.prevent.default()

    return (

        <>

            <form className='container-form'>
                <h1 className='title-login'>Sign In</h1>
                <input
                    onChange={(e) => { setEmail(e.target.value) }}
                    type="text"
                    id='title'
                    placeholder='email'
                    className='inp-title' />
                <input
                    onChange={(e) => { setPassword(e.target.value) }}
                    type="password"
                    id='title'
                    placeholder='password'
                    className='inp-title' />

                <button
                    onClick={login}
                    className='log-btn'>Connect</button>
            </form>
        </>
    );
}

export default LoginForm;
