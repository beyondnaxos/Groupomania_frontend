import React from 'react'
import './Post.css'
import { MdImage, MdAddLocationAlt, MdOutlineAlternateEmail } from "react-icons/md";
import { useState } from 'react'
import axios from 'axios';


export default function Card(props) {

    const [content, setContent] = useState('')
    

    const post = async (e, props) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:8080/api/tutorials', { description: content })
    
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
                        <MdImage className='icon' />
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

