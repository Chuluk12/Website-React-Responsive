import React from 'react';
import web5 from "./../images/wave.png";
import web6 from "./../images/bg.svg";
import web7 from "./../images/avatar.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
    return (
        <>
            <div className="container-login">
                <div className="img">
                    <img src={web6} alt="" />
                </div>
                <div className="login-content">
                    <form action="">
                        <img src={web7} alt="" />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="div">
                                <input type="text" className="input" placeholder="Fullname "/>
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <FontAwesomeIcon icon={faVoicemail} />
                            </div>
                            <div className="div">
                                <input type="text" className="input" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <div className="div">
                                <input type="password" className="input" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <div className="div">
                                <input type="password" className="input" placeholder="Confrim Password"/>
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="div">
                                <input type="text" className="input" placeholder="Gender"/>
                            </div>
                        </div>
                        <input type="submit" className="btn-forgot" value="login"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login