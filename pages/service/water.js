import React from 'react'

import WaterService1 from '../../public/images/our-services/WaterService1.jpg';
import WaterService2 from '../../public/images/our-services/WaterService2.jpg';
import WaterService3 from '../../public/images/our-services/WaterService3.jpg';
import WaterService4 from '../../public/images/our-services/WaterService4.jpg';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';


const WaterService = () => {
    return (
        <>
            <Head>
                <title>Service | Water </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="page_container">
                <header id="page-header">
                    <div className="page-heading">
                        <h2>Water Resources</h2>
                        <p><Link href="/">Services</Link> &#187; Water Resources</p>
                    </div>
                </header>

                <div className="page_section">
                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={WaterService1} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3 className="services_card_heading">Hydrological Assessment<span className="bg-primary"></span></h3>
                                {/* <p><b>{service.Subheading}</b></p> */}
                                <p>A comprehensive report on watershed management is offered by incorporating current data on aspects such as land use, land cover, soil, elevation, and climatic variables. Physics-based hydrological modeling has been used to simulate the water budget and stream flow. Leveraging our expertise, stakeholders, including solar park owners, insurance companies, state water departments, and dam authorities, can make well-informed decisions regarding resource allocation and development within the study area.</p>
                            </div>
                        </div>
                    </div>


                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={WaterService2} data-tilt alt='Service' />
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3 className="services_card_heading">Dam Breach Analysis and Emergency Action Plan (EAP)<span className="bg-primary"></span></h3>
                                {/* <p><b>{service.Subheading}</b></p> */}

                                <p>
                                    We specialized in comprehensive dam breach modeling and analysis, leveraging our expertise in feasibility-level planning and advanced forecasting techniques. Our suite of services encompasses:<br /></p>
                                <ul>
                                    <li>
                                        Dam Breach Modeling & Inundation Mapping: Delivering insights through various Annual Return Interval (ARI) maps.
                                    </li>
                                    <li>
                                        Probable Maximum Flood (PMF) Studies: Analyzing the worst-case scenarios to provide robust flood estimates.
                                    </li>
                                    <li>
                                        Hazard Classification Studies: Evaluating the potential risks associated with dam infrastructure and operations.
                                    </li>
                                    <li>
                                        Emergency Action Plan (EAP) Development: Formulating actionable plans to ensure prompt responses during emergency scenarios, safeguarding communities and resources.
                                    </li>
                                </ul>


                            </div>
                        </div>

                    </div>


                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={WaterService3} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3 className="services_card_heading">Scouring and Sedimentation analysis for Hydraulic Infrastructure Resilience<span className="bg-primary"></span></h3>
                                {/* <p><b>{service.Subheading}</b></p> */}
                                <p>We provide detailed insights into the erosion (scouring) and deposition (sedimentation) dynamics surrounding hydraulic structures by utilizing advanced software simulations for various scenarios. Our efforts are geared towards ensuring the durability, safety, and efficient operation of hydraulic structures, addressing the challenges posed by scouring and sedimentation comprehensively.</p>
                            </div>
                        </div>
                    </div>


                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={WaterService4} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3 className="services_card_heading">Comprehensive Ground Water Assessment<span className="bg-primary"></span></h3>
                                {/* <p><b>{service.Subheading}</b></p> */}
                                <p>We provide expert groundwater study and assessment using state-of-the-art tool and model. Our services encompassed detailed groundwater mapping, reliable estimations of aquifer recharge rates, identification of ground water zones and devising sustainable groundwater management plans by designing artificial recharge structures to safeguard community water resources.</p>
                            </div>
                        </div>

                    </div>



                </div>


            </div>
        </>
    )
}

export default WaterService