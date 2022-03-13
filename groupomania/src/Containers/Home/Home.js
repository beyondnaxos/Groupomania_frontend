import React, { useState, useEffect } from 'react'
import './Home.css'
import Showcomments from '../../Components/showComments/showComments'
import LikeButton from '../../Components/LikeButton/LikeButton'
import Post from '../../Components/Post/Post'
import StaticLogout from '../../Components/StaticLogout/StaticLogout'
import StyledMenu from '../../Components/StyledMenu/StyledMenu'
import { Navigate } from "react-router-dom"
import Commentpost from '../../Components/CommentPost/CommentPost'
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
import logo from './icon-left-font-monochrome-white.svg'
import en from 'javascript-time-ago/locale/en.json'
import WorkersList from '../../Components/WorkersList/WorkersList'
import MusicPlayer from '../../Components/MusicPlayer/MusicPlayer'
import AdminMsg from '../../Components/AdminMsg/AdminMsg'
TimeAgo.addDefaultLocale(en)

export default function Home(props) {
    
    const [posts, setPosts] = useState([])
    const user = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    const userId = parseInt(localStorage.getItem('userId'))
    const isAdmin = (localStorage.getItem('isAdmin') === 'true')
   
    

    

    useEffect(() => {
        async function fetchData() {
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            let data = await fetch('http://localhost:8080/api/tutorials/published', config)

            data = await data.json()
            setPosts(data)
            // console.log(props.user)
        }
        fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(posts);

    return (

        token  ? (

            <>
                <div className='mainBlock'>
                    <div className='staticLeft'><img src={logo} alt="groupomania logo" className='logo' />
                        <WorkersList token={token} />

                    </div>
                    <div className='centerBlock'>


                        <h1 className='home-title'>Welcome back, <strong>{user}</strong></h1>
                        <p className='home-subTitle'>scroll as you want, but not too much !</p>

                        <div className='container-cards'>
                            <Post setPosts={setPosts} posts={posts} setUser={user} token={token} />

                            {[...posts].reverse().map((data) => {
                                console.log(data)
                               
                                return (
                                    <div className='post rounded' key={data.id}>
                                        <div className='headPost'>
                                            <div className='main-id-container'>
                                                {/* <div className='profil-photo-container'> */}
                    
                                                <img className='profil-photo' src='https://www.w3schools.com/howto/img_avatar.png' alt='' />
                                                {/* </div> */}
                                                <div className='profil-id-container'>
                                                    <h3 className='profil-id'>{data.name}</h3>
                                                    <p className='profil-time'><ReactTimeAgo className='date-time' date={new Date(data.createdAt).getTime()} locale="en-US" /></p>
                                                </div>
                                            </div>
                                            <div className='menu'>
                                            { isAdmin || userId === data.userId ? <StyledMenu setPost={setPosts} setId={data.id} userId={data.userId} username={user} token={token} /> : null }
                                            </div>
                                        </div>
                                        <div className='post-content-container'>
                                            <p className='post-content'>{data.description}</p>
                                        </div>
                                        {data.imageUrl ? <div className='imgContainer'>
                                            <img src={data.imageUrl} alt="" className='imgPost' />
                                        </div> : null}
                                        
                                        <div className='bigger-container'>
                                            <div className='like-container'>
                                                <Commentpost setPost={setPosts} setUser={user} setId={data.id} token={token} className='allign' />
                                                <LikeButton />
                                            </div>
                                        </div>
                                        <div className="showComments">

                                            {/* <Showcomments key={data.id} text={data.comments.text} name={data.comments.name} /> */}

                                            {[...data.comments]?.reverse().map((com) => {
                                                return (
                                                    <Showcomments key={data.id} token={ token} isAdmin={isAdmin} userId={userId} user={props.user} comData={com} postId={data.id} setPost={setPosts} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                );

                            })}

                        </div>
                    </div>
                    <div className='staticRight'>
                        <div className='menuRight'>
                            <StaticLogout setPosts={setPosts} setIsLoggedIn={props.setIsLoggedIn} userId={userId} username={user} token={token} />
                            <AdminMsg/>
                            <MusicPlayer className='player' />
                        </div>
                    </div>
                </div>
            </>
        ) : (
            <Navigate to="/login" replace={true} />
        )
    )
}
