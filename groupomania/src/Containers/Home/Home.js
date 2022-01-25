import React from 'react'

import './Home.css'
import Post from '../../Components/Post/Post'
// import { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import { Link } from 'react-router-dom'

export default function Home() {


    const name = 'patrick'

    return (
        <>
            <h1 className='home-title'>Bienvenue {name}</h1>
            <div className='container-cards'>
            <Post />

            
            </div>
            

        </>
    )
}
