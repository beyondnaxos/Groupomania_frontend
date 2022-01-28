import React from 'react';
import './IdAndPhoto.css'

const Idandphoto = () => {
    return (
        <div className='main-id-container'>
            <div className='profil-photo-container'>
                <img className='profil-photo' src='https://www.w3schools.com/howto/img_avatar.png' alt='' />
            </div>
            <div className='profil-id-container'>
                <h3 className='profil-id'>Patrick Savon</h3>
                <p className='profil-time'>il y à 6 minutes</p>
            </div>
        </div>
    );
}

export default Idandphoto;
