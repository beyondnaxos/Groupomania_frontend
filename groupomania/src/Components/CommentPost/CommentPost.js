import React, { useState } from 'react';
import './CommentPost.css';
import axios from 'axios';



const Commentpost = (props) => {


    const [content, setContent] = useState('')


    const handleSend = async (e) => {
        e.preventDefault()
        const setUser = props.setUser
        const setId = props.setId
        console.log("setUser :", setUser);
        const config = {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        }

        const response = await axios.post(
            'http://localhost:8080/api/tutorials/:tutorialId/comment', {
            name: setUser,
            text: content,
            tutorialId: setId
        },
            config)
        console.log(response.data)
        // console.log(content);
        // props.setPosts([...props.posts, response.data])
    }

    return (
        <form className='comment-form'>
            <input
                type="text"
                placeholder='write your comment here'
                value={content}
                onChange={(e) => { setContent(e.target.value) }}
                className='comment-post' />
            <button onClick={(e) => { handleSend(e) }} className='comment-btn'>Send</button>
        </form>
    )
}


export default Commentpost;
