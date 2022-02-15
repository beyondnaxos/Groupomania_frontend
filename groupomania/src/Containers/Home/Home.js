import React, { useState, useEffect } from 'react'
import './Home.css'
import Post from '../../Components/Post/Post'
// import Showpost from '../../Components/ShowPost/ShowPost'
import { Navigate } from "react-router-dom";
// import axios from 'axios';
// import {  useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import { Link } from 'react-router-dom'
import Idandphoto from '../../Components/IdAndPhoto/IdAndPhoto';
import Commentpost from '../../Components/CommentPost/CommentPost';

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
                <h1 className='home-title'>Bienvenue {props.username}</h1>
                <div className='container-cards'>

                    <Post setUser={props.user.username} token={props.user.token} />
               
                    {posts.reverse().map((data) => {
                        return (
                            <div className='post' key={data.id}>
                                <Idandphoto />
                                <p className='post-content'>{data.description}</p>
                                
                                <Commentpost className='allign' />
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
