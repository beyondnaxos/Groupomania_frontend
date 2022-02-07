import React from 'react';
import Idandphoto from '../IdAndPhoto/IdAndPhoto';
import './ShowPost.css'
import Commentpost from '../CommentPost/CommentPost';
// import axios from 'axios';

const Showpost = () => {

    // const getpost = async (e, props) => {
    //     e.preventDefault()
    //     const response = await axios.get('http://localhost:8080/api/tutorials', { description: content })
    //     .then(res => {
    //         console.log(res.data);
    //         return res.data;
    //     })
    
    //     // props.setPosts([...props.posts, response.data])

    //     console.log(response.data);
       
    // }

    return (
        <div className='post'>
            <Idandphoto />
            <p className='post-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni consequatur ea minima voluptas nemo ab, quasi tenetur. Qui tempore eos exercitationem reprehenderit modi cupiditate.</p>
            <Commentpost className='allign'/>
        </div>
    );
}

export default Showpost;
