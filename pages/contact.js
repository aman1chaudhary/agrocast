import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', phone: '', message: '' });
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
            setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
            setMessage('Message Sent Successfully');
        } catch (error) {
            setIsLoading(false);
            setMessage('Error sending message:', error);

        }
    };

    return (
        <>
            <Head>
                <title>Contact Us </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>




            <div className="page_container">
                <header id="page-header">
                    <div className="page-heading">
                        <h2>Contact Us</h2>
                        <p><Link href="/">Home</Link> &#187; Contact Us</p>
                    </div>
                </header>

                <div className="page_section">
                    <div className="page_section_heading">
                        <h2>Let&apos;s Connect</h2>
                    </div>

                    <div className="contact_form_container">

                        <form className="contact_form" >
                            {/* <h3 className="contact_form_title">Let&apos;s Connect</h3> */}

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form_group">
                                        <div className="input_group">
                                            <div className="input_group_addon"><i className="ti-user"></i></div>
                                            <input
                                                name="name"
                                                type="text" required
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form_group">
                                        <div className="input_group">
                                            <div className="input_group_addon"><i className="ti-mobile"></i></div>
                                            <input
                                                name="phone"
                                                type="text" required
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form_group">
                                        <div className="input_group">
                                            <div className="input_group_addon"><i className="ti-email"></i></div>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="Email Id"
                                                value={formData.email}
                                                onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form_group">
                                        <div className="input_group">
                                            <div className="input_group_addon"><i className="ti-pencil-alt"></i></div>
                                            <select
                                                name="subject"
                                                onChange={handleChange}
                                                value={formData.subject}
                                                required
                                            >
                                                <option value="">Subject</option>
                                                <option value="Business">Business</option>
                                                <option value="Partnership">Partnership</option>
                                                <option value="Job">Job</option>
                                                <option value="Internship">Internship</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form_group">
                                        <div className="input_group">
                                            <div className="input_group_addon"><i className="ti-agenda"></i></div>
                                            <textarea
                                                name="message" rows="8"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">

                                    <div className='card_btn contact_btn'>
                                        <button
                                            onClick={onSubmit}
                                            // className="site_button"
                                            disabled={isLoading}
                                            style={{ opacity: isLoading ? 0.5 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}
                                        >
                                            <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                                        </button>
                                    </div>

                                    <p>{message}</p>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>





            <div className="page_section">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="contact_page_card">

                            <div className='contact_card_item'>
                                <div className='contact_card_item_icon'>
                                    <i className="ti-location-pin"></i>
                                </div>
                                <div className='contact_card_item_content'>
                                    <h5>Address</h5>
                                    <p>Research Park, IIT Gandhinagar, Gujarat, 382355 </p>
                                </div>

                            </div>
                            <div className='contact_card_item'>
                                <div className='contact_card_item_icon'>
                                    <i className="ti-alarm-clock"></i>
                                </div>
                                <div className='contact_card_item_content'>
                                    <h5>Office Hours</h5>
                                    <p >Mon To Sat - 09.00-18.00</p>
                                    <p>Sunday - Close</p>
                                </div>
                            </div>


                        </div>


                        <div className="contact_page_card">
                            <div className='contact_card_item'>
                                <div className='contact_card_item_icon'>
                                    <i className="ti-email"></i>
                                </div>
                                <div className='contact_card_item_content'>
                                    <h5> E-mail</h5>
                                    <p>support@agrocastanalytics.com</p>

                                </div>
                            </div>
                            <div className='contact_card_item'>
                                <div className='contact_card_item_icon'>
                                    <i className="ti-mobile"></i>
                                </div>
                                <div className='contact_card_item_content'>
                                    <h5> Phone Numbers</h5>
                                    <p>+91 7600756598</p>

                                </div>
                            </div>


                        </div>



                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="contact_page_card" style={{ height: "100%" }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14666.716008600612!2d72.6903549!3d23.2183661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bdd10281fa1%3A0xc3f3a36276b39c77!2sIIT%20Gandhinagar%20Research%20Park!5e0!3m2!1sen!2sin!4v1691746161029!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex={0}
                                referrerPolicy="no-referrer-when-downgrade" title='Google Map'>
                            </iframe>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default ContactPage