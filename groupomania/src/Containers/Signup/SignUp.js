import React from 'react';
import './SignUp.css'
import postLog from './Post.png'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'

const SignUp = (props) => {
    return (
        <>
        <div className='quote'>
            <h1 className='upper-quote'>Welcome to <span className='bold'>Groupomania.</span></h1>
            <h2 className='under-quote'>A new way to share with office !</h2>
        </div>
        <img className='imgLog' src={postLog} alt="Logo" />
        <div className='grayLog'></div>
        <div className="mainLog">
            <SignUpForm signup={props.signup} />
        </div>
        </>
    )
}

export default SignUp;
