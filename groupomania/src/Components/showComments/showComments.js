import React from 'react';
import axios from 'axios';
import './showComments.css'
import DeleteIcon from '@mui/icons-material/Delete'

const Showcomments = (props) => {
    const comData = props.comData
    const handleDeleteComment = async (e) => {
    
        e.preventDefault()
        const id = props.postId
        console.log(comData);
        const commentId = props.comData.id
        
        // const userId = props.userId
        // console.log('last clg' + setId, userId)
        const config = {
          headers: {
            'Authorization': `Bearer ${props.token}`
          }
        }

    
    
        const response = await axios.delete(`http://localhost:8080/api/tutorials/${id}/comment/${commentId}`, config)
        console.log(response)
        props.setPost((oldState) => {
            const posts = [...oldState]
            
            
          return posts
        })
    
    }
            return (
                <div className='comment' key={comData.key}>
                    <div className='comment-id-container'>
                        <h3 className='comment-id'>{comData.name}</h3>
                        <p className='comment-content'>{comData.text}</p>
                    </div>
                    <div className='comment-button-container'>
                        <button className='comment-button' onClick={handleDeleteComment}><DeleteIcon /></button>

                    </div>
                </div>
            )
        
    }



export default Showcomments;
