import React, { useEffect, useState } from 'react'
import axios from 'axios';

const HomeContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: 'Agrocast Website New Message', phone: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("")


    useEffect(() => {
        const messageTimer = setTimeout(() => {
            setMessage('');
        }, 2000);

        return () => {
            clearTimeout(messageTimer);
        };
    }, [message]);


    const handleChange = ({ target }) =>
        setFormData((prev) => ({
            ...prev,
            [target.name]: target.value,
        }));

    const onSubmit = async () => {
        const hasNullValue = Object.values(formData).some(value => value === null || value === '');
        if (hasNullValue) {
            setMessage('Please fill in all fields before submitting.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post('/api/contact', formData, {
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            });

            if (response.status !== 200) {
                throw new Error('Failed to send message');
            }

            setIsLoading(false);
            setFormData({ name: '', email: '', subject: 'Portfolio Website Contact Form', phone: '', message: '' });
            setMessage('Message Sent Successfully');
        } catch (error) {
            setIsLoading(false);
            setMessage('Error sending message:', error);

        }
    };

    return (


<div className='home_contact_form_container'>
            <form className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="home_form_group">
                        <div className="home_form_input">
                            <input
                                name="name" required
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full name" />
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4">
                    <div className="home_form_group" >
                        <div className="home_form_input">
                            <input
                                name="email"
                                required type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address" />
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4">
                    <div className="home_form_group" >
                        <div className="home_form_input">
                            <input name="phone" r
                                equired type="text"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number" />
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="home_form_group" >
                        <div className="home_form_input">
                            <textarea
                                name="message" rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                 required
                                placeholder="Your Questions"></textarea>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 text-center ">
                    <button
                        onClick={onSubmit}
                        className="round_btn"
                        disabled={isLoading}
                        style={{ opacity: isLoading ? 0.5 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}
                    >
                        <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                    </button>
                    <p>{message}</p>
                </div>
            </form>

            </div>

    )
}

export default HomeContactForm