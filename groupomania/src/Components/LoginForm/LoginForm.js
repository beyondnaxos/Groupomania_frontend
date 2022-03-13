
import React, { useState } from 'react';
import './LoginForm.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'


const LoginForm = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const setIsLoggedIn = props.setIsLoggedIn
    let navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault();
        const response = await Axios.post('http://localhost:8080/api/auth/login', { email: email, password: password })

        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userId', response.data.userId)
        localStorage.setItem('username', response.data.username)
        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem('isAdmin', response.data.isAdmin)

      
        console.log(response);
        props.setUser({
            ...response.data
        })
        setIsLoggedIn(true)
       
        navigate('/')
    }

    const signup = () => {
        navigate('/signup')
    }

    return (

        <>

            <form className='log-container-form'>
                <h1 className='title-login'>Sign In</h1>
                <input
                    onChange={(e) => { setEmail(e.target.value) }}
                    type="text"
                    id='email'
                    placeholder='email'
                    className='inp-title' />
                <input
                    onChange={(e) => { setPassword(e.target.value) }}
                    type="password"
                    id='password'
                    placeholder='password'
                    
                    className='inp-title' />

                <div id="btns-allign">
                    <button
                        onClick={signup}
                        className='log-btn-alt'>Sign Up</button>
                    <button
                        onClick={login}
                        className='log-btn'>Connect</button>

                </div>
            </form>
        </>
    );
}

export default LoginForm;
