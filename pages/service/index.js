import React from 'react'

import thum1 from '../../public/images/our-services/AgriServices4.jpg';
import thum2 from '../../public/images/our-services/WaterService1.jpg';
import thum3 from '../../public/images/our-services/ClimateService2.jpg';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Services = () => {
    return (
        <>
            <Head>
                <title>Services </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="page_container">
                <header id="page-header">
                    <div className="page-heading">
                        <h2>Services</h2>
                        <p><Link href="/">Home</Link> &#187; Services</p>
                    </div>
                </header>

                <div className="page_section">

                    <div className="row services_card_container">
                        <div className="col-lg-12 col-md-12">
                            <div className='services_card_img'>
                                <Link href="/service/agriculture"><Image src={thum1} data-tilt alt='Service' /></Link>
                            </div>

                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="services_card_content">
                                <h3 className="services_card_heading">Agriculture<span className="bg-primary"></span></h3>
                                <p>AgroCast monitors farms remotely in near real-time and provide insights into crop growth, soil moisture, and crop health condition along with geography-season-crop specific weekly advisory in vernacular languages and it helps farmers to optimize the use of farm resources and increase crop yield.</p>
 

                                    <Link href="/service/agriculture" title="Read More" rel="bookmark" className="card_btn">
                                        <button><span>Read More</span></button>
                                    </Link>

                            </div>
                        </div>
                    </div>


                    <div className="row services_card_container">
                        <div className="col-lg-12 col-md-12">
                            <div className='services_card_img'>
                                <Link href="/service/water"><Image src={thum2} data-tilt alt='Service' /></Link>
                            </div>

                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="services_card_content">
                                <h3 className="services_card_heading">Water Resources<span className="bg-primary"></span></h3>
                                <p>AgroCast offers topography survey, hydrology assessment, drainage design, groundwater investigation and modeling services.</p>

                                <Link href="/service/water" title="Read More" rel="bookmark" className="card_btn">
                                        <button><span>Read More</span></button>
                                    </Link>

                            </div>
                        </div>
                    </div>


                    <div className="row services_card_container">
                        <div className="col-lg-12 col-md-12">
                            <div className='services_card_img'>
                                <Link href="/service/climate-risk"><Image src={thum3} data-tilt alt='Service' /></Link>
                            </div>

                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="services_card_content">
                                <h3 className="services_card_heading">Climate Risk<span className="bg-primary"></span></h3>
                                <p>AgroCast assess climatic variables using climate models projection under different scenarios at local to national level.</p>
                                
                                <Link href="/service/climate-risk" title="Read More" rel="bookmark" className="card_btn">
                                        <button><span>Read More</span></button>
                                    </Link>
            
                            </div>
                        </div>
                    </div>









                </div>


            </div>
        </>
    )
}

export default Services