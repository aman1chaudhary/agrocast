import React from 'react'
import Image from 'next/image';
import Head from 'next/head';

import pic1 from '../public/images/our-team/pic1.jpg';
import pic2 from '../public/images/our-team/pic2.jpg';
import pic3 from '../public/images/our-team/pic3.jpg';
import pic4 from '../public/images/our-team/pic4.jpg';
import pic5 from '../public/images/our-team/pic5.jpg';
import pic6 from '../public/images/our-team/pic6.jpg';
import Link from 'next/link';


const TeamData = [
    {
        images: pic1,
        name: "Dr. Harsh L. Shah",
        Email: "harsh.shah@agrocastanalytics.com",
        role: "Founder and CEO",
        about: "Dr. Harsh Shah is founder and Chief Executive Officer at AgroCast Analytics Pvt. Ltd. He leads Agriculture, Water and Climate risk sectors. Before starting AgroCast, Dr. Shah worked as a research associate in the Monsoon Mission Project at Indian Institute of Technology Gandhinagar. He was selected as an alternative sponsored fellow at PNNL, USA. Dr. Shah has published more than 15 research papers in internationally reviewed journals and also presented work in national/international conferences. He is actively working as hydrological modeler in the ISIMIP project. He also contributed to a book chapter published in the COP24 meeting and part of Gujarat State Action Plan on Climate Change (SAPCC) report. Dr. Shah has an intricate knowledge of various physics based hydrological models (VIC, SWAT and CWatM), stemming from his time spent working on hydrological models ever since his Ph.D. Dr. Shah has evaluated hydrological model to analyze long-term change in water budget across Indian sub-continental river basins. Dr. Shah is skillful in the evaluation of climate change and its impact on the water budget.",
        BackgroundInformation: ["Research Associate at IIT Gandhinagar", "Ph.D. in Civil Engineering (IIT), Gandhinagar", "Bachelor in Civil Engineering (Gold Medal)", "Harsh is native in Gujarati and fluent in Hindi and English"],
        LinkedIn: "https://www.linkedin.com/in/harsh-shah-77595179/",
    },
    {
        images: pic2,
        name: "Prof. Vimal Mishra",
        Email: "",
        role: "Co-Founder",
        BackgroundInformation: [],
        about: "Dr. Vimal Mishra, currently a professor in Civil Engineering and Earth Sciences at In- dian Institute of Technology Gandhinagar, is one of the new the GLASS Panel mem- bers. Prior to joining IIT Gandhinagar, he completed his Ph.D. from Purdue Uni- versity and postdoctoral fellowship from University of Washington, Seattle. Dr. Mishra's research focuses on large scale hy- drological modeling, remote sensing, and climate change im- pact assessment. He is a fellow of the American Geophysical Union (AGU) and the National Academy of Sciences, India (NASI). He is currently serving as an editor of Earth's Future and associate editor of Journal of Hydrology.",
        LinkedIn: "https://www.linkedin.com/in/vimal-mishra-21162265/",
    },
    {
        images: pic3,
        name: "Mrs. Shaily Shah",
        Email: "shaily.shah@agrocastanalytics.com",
        role: "Director",
        BackgroundInformation: ["Bachelor in commerce (B.com)", "Shaily  is native in Gujarati and fluent in Hindi and English", "Mrs. Shaily possesses in-depth knowledge of Tally ERP, a renowned accounting software, ensuring meticulous management and representation of financial data."],
        about: "Mrs. Shaily D. Shah serves as the esteemed Director and CFO of our firm, bringing to the table her robust educational background with a B. Com and an MBA in Finance from Gujarat University. Her ascension to the directorship came during a challenging period following the unfortunate passing of Shri. Love K. Shah, the former Director. Demonstrating resilience and intelligent leadership, Mrs. Shaily has adeptly assumed responsibility for the company's auditing operations, upholding transparency, adherence to standards, and financial accountability. She is well-versed with a comprehensive array of commerce-related courses, encompassing areas from financial accounting and taxation to business law and economics, fortifying the company's financial and operational backbone. Her profound understanding of finance, combined with her unwavering dedication, solidifies the financial foundation of our enterprise, guiding us forward with vision and integrity.",
        LinkedIn: "https://www.linkedin.com/",
    },
    {
        images: pic5,
        name: "Dr. Azaz Pathan",
        Email: "azaz.pathan@agrocastanalytics.com",
        role: "Sr. Water Resource Engineer",
        BackgroundInformation: ["Senior Research Fellow at IIT Gandhinagar",
            "Ph.D. in Civil Engineering (NIT), Surat",
            "M.E in WRE (GEC), Surat",
            "Bachelor in Civil  Engineering (CKPCET), Surat",
            "Azaz is native in Gujarati and fluent in Hindi and English"],
        about: "Dr. Azaz Pathan is Senior Hydrologist at AgroCast Analytics Pvt. Ltd. He leads  GIS based flood risk assessment, mappings, and hydrological sectors. Before starting AgroCast, Dr. Azaz worked as a Senior Research Fellow in the Indo-Netherlands Project at Indian Institute of Technology Gandhinagar. He has delivered hands-on training (flood modeling) at different university of India and abroad as an expert. Dr. Azaz has published more than 30 research papers in internationally reviewed journals/conference and also presented work in national/international conferences. Dr. Azaz has an intricate knowledge of various software including HEC-RAS, HEC-HMS, SWAT, Arc-GIS, QGIS, SWMM, WaterGEM, QGIS. His area of interests are flood inundation mapping (1D/2D), Flood Risk mapping using MCDM techniques, Flood control measures, Flood resilience strategies, Water Conservation, Water Harvesting, Dam Break Analysis, Dam Safety management, Water Distribution System, Integrated Water Management, Hydrologic modeling.",
        LinkedIn: "https://www.linkedin.com/in/dr-azazkhan-i-pathan-25398870/",
    },
    {
        images: pic4,
        name: "Mr. Meen Patel",
        Email: "meenpatel9@gmail.com",
        role: "Jr. Civil Engineer",
        BackgroundInformation: ["Bachelor in Civil  Engineering",
            "Meen is native in Gujarati and fluent in Hindi and English"],
        about: "Mr. Meenkumar Patel is a dynamic Junior Civil Engineer at AgroCast Analytics Pvt. Ltd, with a specialized expertise in the Surveying and GIS sector. Proficient in deploying advanced techniques like DGPS and Drone Surveys, Mr. Patel seamlessly integrates cutting-edge technology with traditional GIS-GPS methodologies to deliver precise and efficient survey outcomes. His foundational internship experiences at GWSSB and hands-on involvement in bridge construction sites during his Bachelor's degree have endowed him with a holistic understanding of the field. His commitment to innovation and continuous learning ensures our projects stand out in quality and precision. A true asset to our team, Meenkumar consistently elevates our standard of work, bringing unmatched expertise and vision to every venture.",
        LinkedIn: "https://www.linkedin.com/",
    },
    {
        images: pic6,
        name: "Mr. Preet Mehta",
        role: "Jr. Civil Engineer",
        BackgroundInformation: ["Diploma in Civil  Engineering", "Preet is native in Gujarati and fluent in Hindi and English"],
        Email: "mehtapreet1514@gmail.com",
        about: "Mr. Preet Mehta is a proficient Junior Civil Engineer at AgroCast Analytics Pvt. Ltd, showcasing profound expertise in Storm Water Management, Image Processing, Surveying and GIS domain. Proficient in harnessing advanced tools, including DGPS, Drones, and GIS for detailed surveying, Mr. Mehta also holds a distinctive proficiency in image processing techniques, bringing added layers of depth and precision to projects. Further elevating his credentials, he possesses a valid DGCA Drone Pilot license, reflecting not just his expertise in flying drones but also his commitment to adhering to industry standards and safety. An indispensable member of our team, Preet's multifaceted skill set ensures that our projects remain at the forefront of innovation, accuracy, and comprehensive solutions.",
        LinkedIn: "https://www.linkedin.com/",
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
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className='about_content'>
                                <p>
                                    The next step in the agrarian revolution is the digital and technical transformation. We at AgroCast firmly believe in leading this revolution by bringing technology and analytics to all partners in the agrarian value chain.<br />

                                    AgroCast is an agrarian forecasting and analytics firm; offers a wide range of consulting services in agriculture and water sectors. Backed by a team of experts specialising in agroclimatic analytics, machine learning, AI and policy design, we provide scientific solutions to business problems. We believe in bringing the most efficient, effective and affordable knowledge solutions to our partners and have built a practice of the most robust and state of the art analytics tools and applications.<br />

                                    With our structured approach and ability to provide bespoke, contextually relevant solutions in the fields of agriculture and water resources we have partnered with farmers, government agencies, agrarian industries, and crop insurance companies. AgroCast Analytics Pvt Ltd is an Indian registered startup incubated at Indian Institute Technology Gandhinagar incubation Centre. AgroCast analytics is a joint venture of members from the Indian Institute of Technology Gandhinagar and Indian Institute of Management Ahmedabad. Team AgroCast has extensive experience in the field of agriculture, water resources management, climate change analysis, and policymaking.<br />

                                    Our vision is to build a climate-resilient society by analyzing and eliminating the risk associated in agriculture and water sectors under climate change.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>



                {/* <div className="page_section">
                    <div className="page_section_heading">
                        <h2>Meet Our Team</h2>
                    </div>
                    <div>
                        {TeamData.map((data, index) => (
                            <div className="row card_container" key={index}>
                                <div className="col-md-4 card_item">
                                    <div className="">
                                        <Image src={data.images} alt="" />
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
                </div> */}







                <div className="page_section">
                    <div className="page_section_heading">
                        <h2>Meet Our Team</h2>
                    </div>

                        {TeamData.map((data, index) => (
                            <div className="row" key={index}>
                                <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Image src={data.images} alt="" />
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href={data.Email} target='blank'><span className="ti-email"></span></a></li>
                                                        <li><a href={data.LinkedIn} target='blank'><span className="ti-linkedin"></span></a></li>
                                                    </ul>
                                                </div>
                                            </figure>
                                        </div>
                                        {/* <div className="caption-box">
                                        <h4 className="name"><a href="#">{data.name} </a></h4>
                                        <span className="designation">{data.role}</span>
                                    
                                    </div> */}
                                    </div>
                                </div>
                                <div className='speaker-block col-lg-8 col-md-8 col-sm-12'>
                                    <div className="caption-box">
                                        <h4 className="name">{data.name}</h4>
                                        <p className="designation">{data.role}</p>
                                        <span className="about">{data.about}</span>

                                    </div>



                                </div>

                            </div>
                        ))}


                    </div>



                </div>


            </>
            )
}

            export default AboutPage