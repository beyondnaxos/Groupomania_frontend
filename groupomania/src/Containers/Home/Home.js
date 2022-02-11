import React  from 'react'
import './Home.css'
import Post from '../../Components/Post/Post'
import Showpost from '../../Components/ShowPost/ShowPost'
import { Navigate } from "react-router-dom";
// import axios from 'axios';
// import {  useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import { Link } from 'react-router-dom'


export default function Home(props) {

        // const [content, setContent] = useState('')
        // const [username , setUsername] = useState('')
        // const [posts, setPosts] = useState([])
        // async function getpost(e, props) {
        //     e.preventDefault()
            
        //     console.log(response.data);
        //     setPosts([...posts, response.data])
        //     console.log(posts);
        //     props.setPosts([...props.posts, response.data])
        //     console.log(props.posts);
        //     setContent('')
        // }

    return (
         props.user ? (

                <>
                    <h1 className='home-title'>Bienvenue {props.user.username}</h1>
                    <div className='container-cards'>


                        <Post setUser={props.user.username} token={props.user.token}/>

                        <Showpost />
                       

                    </div>


                </>
            ) : (
             <Navigate to="/login" replace={true} />
            )
    )
}
