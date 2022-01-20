import React from 'react'
import './Home.css'
import Card from '../../Components/Card/Card'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

export default function Home() {

   

    return (
        <>
            <h1 className='home-title'>accueil</h1>
            <Card />

        </>
    )
}
