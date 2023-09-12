import React from 'react'
import rainfall from '../../public/images/about/rainfall.gif';
import max_temp from '../../public/images/about/max_temp.gif';


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
                <header className='page_header climate_img'>
                    <div className="page-heading">
                        <h2>Climate Risk</h2>
                        {/* <p><Link href="/">Services</Link> &#187; Climate Risk</p> */}
                    </div>
                </header>


                <div className='page_section'>
                    <div className="agrocast_dashboard_container">
                        <div className="row">
                            <div className="col-lg-6" >
                                <div className="page_section_heading">
                                    <h2 style={{ textAlign: "left" }}>Monitoring Climatic Variables through Dashboard</h2>
                                </div>


                                <ul className="list-checked">

                                    <li>Taluka and District level analysis of daily rainfall, maximum temperature, and minimum temperature. </li>
                                    <li>The last 7 days, previous 6 months, and 3 years climatic variables can be analyzed through the platform.</li>
                                    <li>Heatmaps for daily climatic variables.</li>
                                    <li>Trend analysis of climatic variables.</li>
                                    <li>Data source: Indian Meteorological Department</li>

                                </ul>
                                <div className='generl_btn'>
                                    <a href='https://agrocastanalytics.com/gcc-dashboard/index.php' className="site-button  btn-icon" target='blank'>Explore Dashboard <i className="fa fa-angle-double-right"></i></a>
                                </div>



                            </div>

                            <div className="col-lg-3" >
                                <div className="grocast_dashboard_img">
                                    <Image src={rainfall} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3" >
                                <div className="grocast_dashboard_img">
                                    <Image src={max_temp} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


                <div className="page_section">


                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={ClimateService1} data-tilt alt='Service' />
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3>Climate Change Assessment</h3>
                                {/* <p>Understand climate variability</p> */}
                                <ul>

                                    <li>Anthropogenic activities have increased earth temperature by 1.5 °C over the last century, and the temperature is projected to increase by 1.5-2 °C by the end of the 21st century. The temperature rise as a signal of climate change puts tremendous pressure on the agriculture and industry sectors. It is essential to know the past as well as the projected climate to build climate resilience society.</li>
                                    <li>Assessment of climatic variables using climate models projection under different scenarios at local to national level. </li>

                                </ul>
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
                                <h3>Climate Change Impact Assessment</h3>
                                {/* <p>Receive bad weather alerts</p> */}
                                <ul>
                                    <li>Evaluate climate change impact on Agriculture and Water sectors. </li>
                                    <li>Develop climate resilient framework by mapping possible risk and vulnerability associated among different sectors. </li>

                                </ul>
                              
                            </div>
                        </div>
                    </div>



                    {/* <div className="row services_card_container">
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
                    </div> */}
                </div>



            </div>


        </>
    )
}

export default ClimateRiskService