import React from 'react'
import './Post.css'
import { MdImage, MdAddLocationAlt, MdOutlineAlternateEmail } from "react-icons/md";
import { useState } from 'react'
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid'

export default function Card(props) {

    const [content, setContent] = useState('')
    const [selectedFile, setSelectedFile] = useState('')


    const post = async (e) => {
        e.preventDefault()
        const setUser = props.setUser
        const config = {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        }
        console.log(setUser)
        console.log(config)
        let form = new FormData();
        form.append('image', selectedFile)
        form.append('userId', setUser)
        form.append('description', content)
        form.append('published', true)
        const response = await axios.post('http://localhost:8080/api/tutorials', form, config)
        console.log(selectedFile)
        // props.setPosts([...props.posts, response.data])
        console.log(response.data)

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
                        <label htmlFor="file"></label>
                        <input
                            type="file"
                            id="file"
                            onChange={(e) => { setSelectedFile(e.target.files[0]) }}
                        />

                        <MdAddLocationAlt className='icon' />
                        <MdOutlineAlternateEmail className='icon' />
                    </div>
                </div>
                <div className='btn-container'>
                    <button onClick={post} className='send-btn'>Create</button>
                </div>
            </form>
        </div>
    )
}


