import React from 'react';
import './CommentPost.css';
// import axios from 'axios';



const Commentpost = (props) => {

    // const [comContent, setComContent] = useState('')


    // const postCom = async (e) => {
    //     e.preventDefault()
    //     const setUser = props.setUser
    //     const config = {
    //         headers: {
    //             'Authorization': `Bearer ${props.token}`
    //         }
    //     }
    //     console.log(setUser)
    //     console.log(config)
    //     let form = new FormData();
    //     form.append('name', setUser)
    //     form.append('text', comContent)
    //     const response = await axios.post('http://localhost:8080/api/tutorials', form, config)
    //     // props.setPosts([...props.posts, response.data])
    //     console.log(response.data)

    // }

    return (
        // <form className='comment-post'>
        <input
            type="text"
            placeholder='write your comment here'
            className='comment-post' />
      
            
    )
}


export default Commentpost;
