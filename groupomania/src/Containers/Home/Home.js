import React, { useState } from 'react'
import './Home.css'
import Post from '../../Components/Post/Post'
import Showpost from '../../Components/ShowPost/ShowPost'
import { Navigate } from "react-router-dom";
// import axios from 'axios';
// import {  useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import { Link } from 'react-router-dom'


export default function Home(props) {

    const [posts, setPosts] = useState([])

    const getPosts = (async (props) => {
        await fetch('http://localhost:8080/api/tutorials/published')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPosts(data.length)
                console.log(posts);
            })
    })()




    return (
        props.user ? (

            <>
                <h1 className='home-title'>Bienvenue {props.username}</h1>
                <div className='container-cards'>


                    <Post onchange={getPosts} setUser={props.user.username} token={props.user.token} />

                    <Showpost setPosts={props.posts} />
                    {/* <Showpost setPosts={props.setPosts}/> */}


                </div>


            </>
        ) : (
            <Navigate to="/login" replace={true} />
        )
    )
}
