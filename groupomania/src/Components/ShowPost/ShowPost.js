import React from 'react';
import Idandphoto from '../IdAndPhoto/IdAndPhoto';
import './ShowPost.css'
import Commentpost from '../CommentPost/CommentPost';

const Showpost = () => {
    return (
        <div className='post'>
            <Idandphoto />
            <p className='post-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni consequatur ea minima voluptas nemo ab, quasi tenetur. Qui tempore eos exercitationem reprehenderit modi cupiditate.</p>
            <Commentpost className='allign'/>
        </div>
    );
}

export default Showpost;
