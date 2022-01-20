import React from 'react';
import './LoginForm.css'

const LoginForm = () => {
    return (<>

        <form className='container-form'>
        <h1 className='title-login'>Sign In</h1>
                <input
                    type="text"
                    id='title'
                    placeholder='email' 
                    className='inp-title'/>
                <input
                    type="password"
                    id='title'
                    placeholder='password' 
                    className='inp-title'/>
                
                <button className='log-btn'>Connect</button>
            </form>
    </>
    );
}

export default LoginForm;
