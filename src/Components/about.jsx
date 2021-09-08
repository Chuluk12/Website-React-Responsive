import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../images/Work chat-amico.png"
import Commom from './commom'

const About = () => {
    return (
    <>
        <Commom 
        name="Selamat datang di Tentang Halaman " 
        imgsrc={web} 
        visit="/contact" 
        btname="Contact Now"
        />
    </>
    )
}

export default About
