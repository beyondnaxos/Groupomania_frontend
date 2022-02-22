import React, {useState} from 'react';
import './CommentPost.css';
import axios from 'axios';



const Commentpost = (props) => {


    // const [content, setContent] = useState('')
    
    // const post = async (e) => {
    //     e.preventDefault()
    //     const setUser = props.setUser
    //     const config = {
    //         headers: {
    //             'Authorization': `Bearer ${props.token}`
    //         }
    //     }
    //     let form = new FormData();
    //     form.append('name', setUser)
    //     form.append('texte', content)
    //     const response = await axios.post('http://localhost:8080/api/comments', form, config)
    //     console.log(response.data)
    //     props.setPosts([...props.posts, response.data])
    // }

    return (
       
        <input
            type="text"
            placeholder='write your comment here'

            className='comment-post' />
            
    )
}


export default Commentpost;
