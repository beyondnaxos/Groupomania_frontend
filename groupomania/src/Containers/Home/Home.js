import React from 'react'
import './Home.css'
import Post from '../../Components/Post/Post'
import Showpost from '../../Components/ShowPost/ShowPost'
import { Navigate } from "react-router-dom";
// import {  useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import { Link } from 'react-router-dom'


export default function Home(props) {

     

    return (
         props.user ? (

                <>
                    <h1 className='home-title'>Bienvenue {props.user.username}</h1>
                    <div className='container-cards'>
                        <Post setPosts={props.user}/>

                        <Showpost />
                        <Showpost />
                        <Showpost />
                        <Showpost />
                        <Showpost />
                        <Showpost />

                    </div>


                </>
            ) : (
             <Navigate to="/login" replace={true} />
            )
    )
}
