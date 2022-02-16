import React, { useState, useEffect } from 'react'
import './Home.css'
import Post from '../../Components/Post/Post'
// import Showpost from '../../Components/ShowPost/ShowPost'
import { Navigate } from "react-router-dom";
// import axios from 'axios';
// import {  useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import { Link } from 'react-router-dom'
import Commentpost from '../../Components/CommentPost/CommentPost';
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'

import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)


export default function Home(props) {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        fetch('http://localhost:8080/api/tutorials/published')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPosts(data)
            })
        return () => {

        };
    }, []);

    console.log(posts);

    return (

        props.user ? (

            <>
                <h1 className='home-title'>Bienvenue {props.user.username}</h1>
                <div className='container-cards'>

                    <Post setUser={props.user.username} token={props.user.token} />

                    {posts.reverse().map((data) => {
                        return (
                            <div className='post' key={data.id}>
                                <div className='main-id-container'>
                                    <div className='profil-photo-container'>
                                        <img className='profil-photo' src='https://www.w3schools.com/howto/img_avatar.png' alt='' />
                                    </div>
                                    <div className='profil-id-container'>
                                        <h3 className='profil-id'>{data.userId}</h3>
                                        <p className='profil-time'><ReactTimeAgo className='date-time' date={data.createdAt} locale="en-US"/></p>
                                    </div>
                                </div>
                                <p className='post-content'>{data.description}</p>
                                <img src="data.imageUrl" alt="" />
                                <Commentpost setUser={props.user.username} token={props.user.token} className='allign' />
                            </div>
                        );

                    })}

                </div>

            </>
        ) : (
            <Navigate to="/login" replace={true} />
        )
    )
}
