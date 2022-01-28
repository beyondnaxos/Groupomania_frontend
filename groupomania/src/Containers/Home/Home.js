import React from 'react'
import './Home.css'
import Post from '../../Components/Post/Post'
import Showpost from '../../Components/ShowPost/ShowPost'
// import { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import { Link } from 'react-router-dom'

export default function Home() {

    const name = localStorage.getItem('username')

    return (
        <>
            <h1 className='home-title'>Bienvenue {name}</h1>
            <div className='container-cards'>
            <Post />
            
            <Showpost />
            <Showpost />
            <Showpost />
            <Showpost />
            <Showpost />
            <Showpost />
            
            </div>
            

        </>
    )
}
