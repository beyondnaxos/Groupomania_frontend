import React from 'react'
import './StaticLogout.css'

export default function StaticLogout() {
    return (
    
            <ul className='staticProfil'>
                <li className='btnStatic'><a className="navink" href="/profil">Profil</a></li>
                <li className='btnStatic'><a className="navink" href="/">Logout</a></li>
            </ul>
    
    )
}
