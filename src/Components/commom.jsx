import React from 'react'
import { NavLink } from 'react-router-dom'

const Commom = (props) => {
    return (
    <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 d-flex justify-content-center flex-column">
                        <h1> 
                            {props.name} <br />
                            <strong className="brand-name"> Husnul Chuluk </strong>  
                        </h1>
                        <h2 className="my-3">
                            Saya adalah pengembang berbakat yang membuat situs web
                        </h2>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn started"> 
                                {props.btname}
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 header-img">
                        <img 
                         src={props.imgsrc} 
                         className="img-fluid animated" 
                         alt="home image"/>
                    </div>
                    </div> 
                </div>
            </div>
        </div>
        </section>  
    </>
    )
}

export default Commom;
