import React, { useState } from 'react';
import './LoginForm.css'
import Axios from 'axios'


const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        Axios.post(
            'http://localhost:8080/api/auth/login', { email: username, password: password })
            .then((response) => {
                alert('Vous êtes connecté');
            })
            .catch(error => alert(error))
    }


    return (

        <>

            <form className='container-form'>
                <h1 className='title-login'>Sign In</h1>
                <input
                    onChange={(e) => { setUsername(e.target.value) }}
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
