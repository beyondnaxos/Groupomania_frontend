import React, { useState, useEffect } from 'react'
import './Home.css'
import Post from '../../Components/Post/Post'
import { Navigate } from "react-router-dom"
// import { v4 as uuidv4 } from 'uuid'
import Commentpost from '../../Components/CommentPost/CommentPost'
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
import logo from './icon-left-font-monochrome-white.svg'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)


export default function Home(props) {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        async function fetchData() {
            const config = {
                headers: {
                    'Authorization': `Bearer ${props.user.token}`
                }
            }
            let data = await fetch('http://localhost:8080/api/tutorials/published', config)
            
            data = await data.json()
            setPosts(data)
        }
        fetchData()

    }, [])

    console.log(posts);

    return (

        props.user ? (

            <>
                <div className='mainBlock'>
                    <div className='staticLeft'><img src={logo} alt="groupomania logo" className='logo' /></div>
                    <div className='centerBlock'>

                        <h1 className='home-title'>Welcome back, <strong>{props.user.username}</strong></h1>
                        <p className='home-subTitle'>scroll as you want, but not too much !</p>

                        <div className='container-cards'>
                            <Post setPosts={setPosts} posts={posts} setUser={props.user.username} token={props.user.token} />

                            {posts.reverse().map((data) => {
                                return (
                                    <div className='post' key={data.id}>
                                        <div className='main-id-container'>
                                            <div className='profil-photo-container'>
                                                <img className='profil-photo' src='https://www.w3schools.com/howto/img_avatar.png' alt='' />
                                            </div>
                                            <div className='profil-id-container'>
                                                <h3 className='profil-id'>{data.userId}</h3>
                                                <p className='profil-time'><ReactTimeAgo className='date-time' date={new Date(data.createdAt).getTime()} locale="en-US" /></p>
                                            </div>
                                        </div>
                                        <p className='post-content'>{data.description}</p>
                                        <div className='imgContainer'>
                                        <img src={data.imageUrl} alt="" className='imgPost'/>
                                        </div>
                                        <Commentpost setUser={props.user.username} token={props.user.token} className='allign' />
                                        <div className="showComments">
                                        {data.comments.reverse().map((com) => {
                                            return (
                                                <div className='comment' key={com.id}>
                                                    <div className='comment-id-container'>
                                                    <h3 className='comment-id'>{com.name}</h3>
                                                    <p className='comment-content'>{com.text}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                );

                            })}

                        </div>
                    </div>
                </div>

            </>
        ) : (
            <Navigate to="/login" replace={true} />
        )
    )
}
