import React, { useState } from 'react';
import './CommentPost.css';
import axios from 'axios';

const NewComment = (props) => {

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
        console.log('new commentaire', response.data)
        props.setPost((oldState) => {
            const posts = [...oldState]
            const index = posts.findIndex(post => post.id === response.data.tutorialId)
            posts[index].comments.push(response.data)
            console.log('new state', posts)
            return posts
        })

        setContent('')
    }

    return (
        <form onSubmit={(e) => { handleSend(e) }} className='comment-form'>
            <input
                type="text"
                placeholder='write your comment here'
                value={content}
                onChange={(e) => { setContent(e.target.value) }}
                className='comment-post' />
        </form>
    )
}


export default NewComment;
