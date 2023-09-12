import React from 'react'

import WaterService1 from '../../public/images/our-services/WaterService1.jpg';
import WaterService2 from '../../public/images/our-services/WaterService2.gif';
import WaterService3 from '../../public/images/our-services/WaterService3.jpg';
import WaterService4 from '../../public/images/our-services/WaterService4.jpg';
import SolarService1 from '../../public/images/our-services/SolarService1.jpg';
import SolarService2 from '../../public/images/our-services/SolarService2.jpg';
import SolarService3 from '../../public/images/our-services/SolarService3.jpg';

import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import ImageSlideshow from '../../components/ImageSlideshow';

const imgblog = [
    {
        image: SolarService1,
    },
    {
        image: SolarService2,
    },
    {
        image: SolarService3,
    },

]

const WaterService = () => {
    return (
        <>
            <Head>
                <title>Service | Water </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className="page_container">
                <header className='page_header water_img'>
                    <div className="page-heading">
                        <h2>Water Resources</h2>
                        {/* <p><Link href="/">Services</Link> &#187; Water Resources</p> */}
                    </div>
                </header>

                <div className="page_section">
                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                {/* <Image src={SolarService2} data-tilt alt='Service' /> */}
                                <ImageSlideshow images={imgblog} />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3>Hydrological and Hydraulic Assessment</h3>
                                {/* <p><b>{service.Subheading}</b></p> */}
                                {/* <p>A comprehensive report on watershed management is offered by incorporating current data on aspects such as land use, land cover, soil, elevation, and climatic variables. Physics-based hydrological modeling has been used to simulate the water budget and stream flow. Leveraging our expertise, stakeholders, including solar park owners, insurance companies, state water departments, and dam authorities, can make well-informed decisions regarding resource allocation and development within the study area.</p> */}
                                <ul>



                                    <li>Develop high resolution DEM, DSM, 3D model and Point cloud of study area using UAV.
                                    </li>
                                    <li>Watershed delineation. </li>
                                    <li> Simulate water budget components (Runoff, Baseflow, Soil Moisture and Evapotranspiration). </li>
                                    <li>Analysis of flood events.</li>
                                    <li> Prepare flood inundation maps (water depth and water level). </li>
                                    <li>Design drainage system to prevent water logging.</li>

                                </ul>


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
                                <h3>Dam Breach Analysis and Emergency Action Plan (EAP)</h3>
                                {/* <p><b>{service.Subheading}</b></p> */}

                                {/* <p>
                                    We specialized in comprehensive dam breach modeling and analysis, leveraging our expertise in feasibility-level planning and advanced forecasting techniques. Our suite of services encompasses:<br /></p> */}
                                <ul>

                                    <li>Dam Breach Modeling & Inundation Mapping: Delivering insights through various Annual Return Interval (ARI) maps.</li>
                                    <li>Probable Maximum Flood (PMF) Studies: Analyzing the worst-case scenarios to provide robust flood estimates.</li>
                                    <li>Hazard Classification Studies: Evaluating the potential risks associated with dam infrastructure and operations.</li>
                                    <li>Emergency Action Plan (EAP) Development: Formulating actionable plans to ensure prompt responses during emergency scenarios, safeguarding communities and resources.</li>

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
                                <h3>Scouring and Sedimentation analysis for Hydraulic Infrastructure Resilience</h3>
                                {/* <p><b>{service.Subheading}</b></p> */}
                                <ul>



                                    <li>Quantitative Sediment Profiles: comprehensive insights into sediment transport rates, erosion-deposition patterns, and temporal sediment behaviors, presented in graphical and tabulated format.
                                    </li>


                                </ul>

                                <p></p>
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
                                <h3>Ground Water Investigation</h3>
                                {/* <p><b>{service.Subheading}</b></p> */}
                                <p>Groundwater mapping using electric resistivity survey</p>
                                <ul>
                                    <li>To identify aquifer zone</li>
                                    <li>To estimate aquifer recharge rate</li>
                                    <li>To design bore well and artificial recharge structure.</li>

                                </ul>

                            </div>
                        </div>

                    </div>


                    {/* <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={SolarService1} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3>Survey using UAV</h3>
                                <ul>
                                    <li>Develop high resolution DEM, DSM, 3D model and Point cloud of study area.
                                    </li>
                                    <li>Analyze ground features.</li>
                                    <li> Monitoring mega project activities.</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={SolarService2} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3>Hydrological Modeling using Physics based Model</h3>
                                <ul>
                                    <li>Watershed delineation.</li>
                                    <li> Simulate water budget components (Runoff, Baseflow, Soil Moisture and Evapotranspiration).</li>
                                    <li>Analysis of flood/drought events.</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={SolarService3} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3>Hydraulics Modeling to simulate flood inundation</h3>
                                <ul>
                                    <li>Prepare flood inundation maps (water depth and water level).</li>
                                    <li>Design drainage system to prevent water logging.</li>
                                    <li>Dam break analysis.</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}



                </div>


            </div>
        </>
    )
}

export default WaterService