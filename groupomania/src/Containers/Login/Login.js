import React from 'react';
import './Login.css'
import LoginForm from '../../Components/LoginForm/LoginForm';
import postLog from './Post.png'

const Login = (props) => {
    return (
        <>
        <div className='quote'>
            <h1 className='upper-quote'>Welcome to <span className='bold'>Groupomania.</span></h1>
            <h2 className='under-quote'>A new way to share with office !</h2>
        </div>
        <img className='imgLog' src={postLog} alt="Logo" />
        <div className='grayLog'></div>
        <div className="mainLog">
            <LoginForm setUser={props.setUser}/>
        </div>
        </>
    )
}

export default Login;
