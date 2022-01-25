import React from 'react'
import './Post.css'
import { MdImage, MdAddLocationAlt, MdOutlineAlternateEmail } from "react-icons/md";



export default function Card(props) {

    return (
        <div className="post">
            {/* //     {props.children} */}
            <form className='post-form'>
                <div className='input-container'>
                    <input
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
                    <button className='send-btn'>Create</button>
                </div>
            </form>
        </div>
    )
}

