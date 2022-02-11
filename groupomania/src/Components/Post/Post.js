import React from 'react'
import './Post.css'
import { MdImage, MdAddLocationAlt, MdOutlineAlternateEmail } from "react-icons/md";
import { useState } from 'react'
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid'


export default function Card(props) {

    const [content, setContent] = useState('')
    const [image, setImage ] = useState('')

    const post = async (e) => {
        e.preventDefault()
        const setUser = props.setUser
        const setToken= props.setToken

        const response = await axios.post('http://localhost:8080/api/tutorials', {image: image , userId: setUser , token : setToken,  description: content })
        console.log(setUser);
        console.log(setToken);
        console.log(image)
        // props.setPosts([...props.posts, response.data])
        console.log(response.data);
       
    }

    return (
        <div className="post">
            {/* //     {props.children} */}
            <form className='post-form'>
                <div className='input-container'>
                    <input
                        onChange={(e) => { setContent(e.target.value) }}
                        type="text"
                        placeholder='create a post'
                        className='inputPost' />

                    <div className='icon-form'>
                        <label htmlFor="file"></label>
                        <input type="file" id="file"
                        onChange={(e) => { setImage(e.target.files[0]) }}
                        />
                        
                        <MdAddLocationAlt className='icon'/>
                        <MdOutlineAlternateEmail className='icon'/>
                    </div>
                </div>
                <div className='btn-container'>
                    <button onClick={post} className='send-btn'>Create</button>
                </div>
            </form>
        </div>
    )
}


{/* <MdImage className='icon' /> */}