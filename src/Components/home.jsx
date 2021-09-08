import React from 'react'
import web from "../images/Work time-pana.png"
import Commom from './commom'

const Home = () => {
    return (
    <>
        <Commom
        name=" Kembangkan bisnis Anda dengan " 
        imgsrc={web} 
        visit="/service" 
        btname="Get Started"
        />
    </>
    )
}

export default Home
