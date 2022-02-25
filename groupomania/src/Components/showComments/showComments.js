import React from 'react';

const Showcomments = (props) => {
    const comData = props.comData

            return (
                <div className='comment' key={comData.key}>
                    <div className='comment-id-container'>
                        <h3 className='comment-id'>{comData.name}</h3>
                        <p className='comment-content'>{comData.text}</p>
                    </div>
                </div>
            )
        
    }



export default Showcomments;
