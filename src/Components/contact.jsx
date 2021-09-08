import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: "",
    })

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `Nama saya${data.fullname}. NO telp saya ${data.phone} email saya ${data.email} Pesan saya ${data.message}`);
    }

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal)=> {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact US</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="Enter your name"
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input 
                                type="number" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="Mobile Number"
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input
                                type="email" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="name@example.com"
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTexttarea" className="form-label">Message</label>
                                <textarea
                                 className="form-control" 
                                 id="exampleFormControlTexttarea"
                                rows="3"
                                name="message"
                                value={data.message}
                                onChange={InputEvent}
                                >
                                
                                </textarea>
                            </div>
                            <div class="col-12">
                                <button 
                                className="btn btn-outline-primary" 
                                type="submit">
                                    Submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
