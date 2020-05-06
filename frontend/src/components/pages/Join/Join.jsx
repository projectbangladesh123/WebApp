import React from "react";
import { useState } from 'react';
import axios from "axios";
import './Join.css'



const Join = props => {
    // we set proxy in the package.json file to be "http://localhost:5000 so we can just do /email, it will 
    // automatically build the url as http://localhost:5000/email"
    const url = "/email"
    const positiveAlertMessage = "Message Sent"
    const negativeAlertMessage = "Sorry Something Went Wrong"
    const [successAlert, setSuccessAlert] = useState(false);
    const [failureAlert, setFailureAlert] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
        institution: ''
    })

    const clearForm = () => {
        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
            institution: '',
            
        })
    }
    const handleOnChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        sendMessage();
        // console.log("Success");
        // console.log(formData);
    }

    const sendMessage = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const body = JSON.stringify({ name, email, phoneNumber, message, institution });

        try {
            const res = await axios.post(url, body, config);
            console.log(res)
            clearForm()
            showSuccessMessage();

        } catch (error) {
            console.log(error)
            showFailureMessage();
        }
    }

    const showFailureMessage = () => {
        setFailureAlert(true);
        setTimeout(() => {
            setFailureAlert(false)
        }, 3000);
    }

    const showSuccessMessage = () => {
        setSuccessAlert(true);
        setTimeout(() => {
            setSuccessAlert(false)
        }, 3000);
    }


    const { name, email, phoneNumber, message, institution  } = formData;
    return (
        <div className="Join">
            <p style={{ display: successAlert ? "block" : "none" }} className="alert">{positiveAlertMessage}</p>
            <p style={{ display: failureAlert ? "block" : "none" }} className="alert negative_alert">{negativeAlertMessage}</p>
            <h1 className="title">Join Project Bangladesh</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                    <label for="InputName">Name (নাম)</label>
                    <input
                        name="name"
                        value={name}
                        onChange={e => handleOnChange(e)}
                        type="text"
                        className="form-control"
                        id="InputName"
                        aria-describedby="name"
                        placeholder="Your Name"
                        required />
                </div>
                <div className="form-group">
                    <label for="InputEmail">Email address (ইমেইল অ্যাড্রেস)</label>
                    <input
                        name="email"
                        value={email}
                        onChange={e => handleOnChange(e)}
                        type="email"
                        className="form-control"
                        id="InputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Your Email"
                        required />
                </div>
                <div className="row form-group">
                    <div className="col">
                        <label for= "Institution" > Institution (প্রতিষ্ঠান) </label>
                        <input 
                            name= "institution"
                            value= {institution}
                            onChange={e => handleOnChange(e)}
                            type="text" 
                            id= "Institution "
                            className="form-control" 
                            placeholder="Your institution" />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Yearn And Semester" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="InputPhone">Phone Number</label>
                    <input
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={e => handleOnChange(e)}
                        type="tel"
                        className="form-control"
                        id="InputPhone"
                        aria-describedby="phone"
                        placeholder="Your Phone"
                        required />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">How do you spend leisure time? </label>
                    <textarea
                        name="message"
                        value={message}
                        onChange={e => handleOnChange(e)}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="10"></textarea>
                </div>
                <button type="submit" className="btn btn-success">Send</button>
            </form>
            <p style={{ display: failureAlert ? "block" : "none" }} className="alert negative_alert">{negativeAlertMessage}</p>
            <p style={{ display: successAlert ? "block" : "none" }} className="alert">{positiveAlertMessage}</p>
        </div>
    );
}


export default Join
