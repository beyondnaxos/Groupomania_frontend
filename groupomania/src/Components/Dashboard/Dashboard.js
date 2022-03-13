import React from 'react'
import ModalLogout from '../ModalLogout/ModalLogout'
import './StaticLogout.css'

export default function StaticLogout(props) {
    const setPosts = props.setPosts
    const username = props.username
    const token = props.token
    const userId = props.userId


    return (
    
            <ul className='staticProfil'>
                <ModalLogout setPosts={setPosts}   setIsLoggedIn={props.setIsLoggedIn} userId={userId} username={username} token={token}/>
            </ul>
    
    )
}
