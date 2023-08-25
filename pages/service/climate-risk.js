import React from 'react'
import gifImg from '../../public/images/about/about_main_page.gif';


import ClimateService1 from '../../public/images/our-services/ClimateService1.jpg';
import ClimateService2 from '../../public/images/our-services/ClimateService2.jpg';
import ClimateService3 from '../../public/images/our-services/ClimateService3.jpg';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const dlabBox = [
    { title: 'Extreme Weather Warning', image: ClimateService1, },
    { title: 'Climate Change Assessment', image: ClimateService2, },
    { title: 'Climate Resilience Strategy', image: ClimateService3, },
];

const ClimateRiskService = () => {
    return (
        <>
            <Head>
                <title>Service | Climate Risk </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="page_container">
                <header id="page-header">
                    <div className="page-heading">
                        <h2>Climate Risk</h2>
                        <p><Link href="/">Services</Link> &#187; Climate Risk</p>
                    </div>
                </header>

                <div className="page_section">

                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={ClimateService1} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3>Extreme Weather Warning</h3>
                                <p>Receive bad weather alerts</p>
                                <p>Alert before extreme weather events help to prepare during the event. We transmit alerts well in advance of extreme precipitation and heatwaves. </p>
                            </div>
                        </div>
                    </div>

                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={ClimateService2} data-tilt alt='Service' />
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3>Climate Change Assessment</h3>
                                <p>Understand climate variability</p>
                                <p>Anthropogenic activities have increased earth temperature by 1.5 ºC over the last century, and the temperature is projected to increase by 1.5-2 ºC by the end of the 21st century. The temperature rise as a signal of climate change puts tremendous pressure on the agriculture and industry sectors. It is essential to know the past as well as the projected climate to build climate resilience society. We provide high-resolution climate change assessment report. </p>
                            </div>
                        </div>
                    </div>

                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={ClimateService3} data-tilt alt='Service' />
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3>Climate Resilience Strategy</h3>
                                <p>Know climate risk</p>
                                <p>We provide services to map risk associated due to the changing climate. It helps to identify vulnerable areas, adaptation, mitigation, and resilience strategies to cope up with climate change.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='page_section'>
                    <div className="agrocast_dashboard_container">
                        <div className="row">
                            <div className="col-lg-5" >
                                <div className="page_section_heading">
                                    <h2 style={{textAlign:"left"}}>Agrocast Dashboard</h2>
                                </div>


                                <ul className="list-checked">
                                    <li><span>Crop growth (NDVI), Crop health (EVI) and Soil condition (NDMI).</span></li>
                                    <li><span>Water body monitoring.</span></li>
                                    <li><span>Land use and land cover change mapping.</span></li>
                                    <li><span>Drought and flood analysis. Crop loss estimation.</span></li>
                                    <li><span>Crop classification and crop yield estimation.</span></li>

                                </ul>
                                <div className='generl_btn'>
                                    <a href='https://agrocastanalytics.com/gcc-dashboard/index.php' className="site-button  btn-icon" target='blank'>Explore Dashboard <i className="fa fa-angle-double-right"></i></a>
                                </div>



                            </div>



                            <div className="col-lg-7 " >
                                <div className="grocast_dashboard_img">
                                    <Image src={gifImg} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>






                </div>
            </div>


        </>
    )
}

export default ClimateRiskService