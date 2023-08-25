import React from 'react'
import about2 from '../public/images/about/about-2.jpg';

import Image from 'next/image';
import Head from 'next/head';

import pic1 from '../public/images/our-team/pic1.jpg';
import pic2 from '../public/images/our-team/pic2.jpg';
import pic3 from '../public/images/our-team/pic3.jpg';
import pic4 from '../public/images/our-team/pic4.jpg';
import pic5 from '../public/images/our-team/pic5.jpg';
import Link from 'next/link';


const TeamData = [
    {
        images: pic1,
        name: "Dr. Harsh Shah",
        role: "Founder and CEO",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        LinkedIn: "https://www.linkedin.com/in/vimal-mishra-21162265/",
        Twitter: "https://twitter.com/"
    },
    {
        images: pic2,
        name: "Prof. Vimal Mishra",
        role: "Co-Founder",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        LinkedIn: "https://www.linkedin.com/in/vimal-mishra-21162265/",
        Twitter: "https://twitter.com/i/flow/login?redirect_after_login=%2Fintent%2Ffollow%3Foriginal_referer%3Dhttps%253A%252F%252Fvmishra.people.iitgn.ac.in%252F%26ref_src%3Dtwsrc%255Etfw%257Ctwcamp%255Ebuttonembed%257Ctwterm%255Efollow%257Ctwgr%255Evmishraiit%26region%3Dfollow_link%26screen_name%3Dvmishraiit%26original_referer%3Dhttps%3A%2F%2Fvmishra.people.iitgn.ac.in%2Fwater%26climate%2F#/people/current"
    },
    {
        images: pic3,
        name: "Mrs. Shaily Shah",
        role: "Director",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        LinkedIn: "https://www.linkedin.com/",
        Twitter: "https://twitter.com/",
    },
    {
        images: pic5,
        name: "Dr. Azaz Pathan",
        role: "Sr. Water Resource Engineer",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        LinkedIn: "https://www.linkedin.com/",
        Twitter: "https://twitter.com/",
    },
    {
        images: pic4,
        name: "Mr. Meen Patel",
        role: "Jr. Civil Engineer",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        LinkedIn: "https://www.linkedin.com/",
        Twitter: "https://twitter.com/",
    },

]

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="page_container">
                <header id="page-header">
                    <div className="page-heading">
                        <h2>About Us</h2>
                        <p><Link href="/">Home</Link> &#187; About Us</p>
                    </div>
                </header>

                <div className="page_section">

                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <p>
                                The next step in the agrarian revolution is the digital and technical transformation. We at AgroCast firmly believe in leading this revolution by bringing technology and analytics to all partners in the agrarian value chain.<br />

                                AgroCast is an agrarian forecasting and analytics firm; offers a wide range of consulting services in agriculture and water sectors. Backed by a team of experts specialising in agroclimatic analytics, machine learning, AI and policy design, we provide scientific solutions to business problems. We believe in bringing the most efficient, effective and affordable knowledge solutions to our partners and have built a practice of the most robust and state of the art analytics tools and applications.<br />

                                With our structured approach and ability to provide bespoke, contextually relevant solutions in the fields of agriculture and water resources we have partnered with farmers, government agencies, agrarian industries, and crop insurance companies. AgroCast Analytics Pvt Ltd is an Indian registered startup incubated at Indian Institute Technology Gandhinagar incubation Centre. AgroCast analytics is a joint venture of members from the Indian Institute of Technology Gandhinagar and Indian Institute of Management Ahmedabad. Team AgroCast has extensive experience in the field of agriculture, water resources management, climate change analysis, and policymaking.<br />

                                Our vision is to build a climate-resilient society by analyzing and eliminating the risk associated in agriculture and water sectors under climate change.
                            </p>

                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="about_img">
                                <Image src={about2} alt="" />
                            </div>
                        </div>

                    </div>
                </div>



                <div className="page_section">
                    <div className="page_section_heading">
                        <h2>Meet Our Team</h2>
                    </div>
                    <div>
                        {TeamData.map((data, index) => (
                            <div className="row card_container" key={index}>
                                <div className="col-md-4 card_item">
                                    <div className="">
                                        <Image src={data.images} alt="" />
                                        {/* <div className="card_item_overlay">
                                            <div className="card_item_social_icon">
                                                <a href={data.LinkedIn} target='blank' className="fa text-white fa-linkedin"></a>

                                            </div>
                                        </div> */}
                                    </div>

                                </div>
                                <div className='col-md-8'>
                                    <div className="card_item_description">
                                        <h3>{data.name}</h3>
                                        <h5>{data.role}</h5>
                                        <p >
                                            {data.about}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </>
    )
}

export default AboutPage