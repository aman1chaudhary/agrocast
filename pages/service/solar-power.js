import React from 'react'


import SolarService1 from '../../public/images/our-services/SolarService1.jpg';
import SolarService2 from '../../public/images/our-services/SolarService2.jpg';
import SolarService3 from '../../public/images/our-services/SolarService3.jpg';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';


const SolarService = () => {
    return (
        <>
            <Head>
                <title>Service | Solar Power </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="page_container">
                <header id="page-header">
                    <div className="page-heading">
                        <h2>Solar Power</h2>
                        <p><Link href="/">Services</Link> &#187; Solar Power</p>
                    </div>
                </header>
                <div className="page_section">

                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={SolarService1} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3 className="services_card_heading">Survey using UAV</h3>
                                {/* <p><b>{service.Subheading}</b></p> */}
                                <ul>
                                    <li>Develop high resolution DEM, DSM, 3D model and Point cloud of study area.
                                    </li>
                                    <li>Analyze ground features.</li>
                                    <li> Monitoring mega project activities.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={SolarService2} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3 className="services_card_heading">Hydrological Modeling using Physics based Model</h3>
                                {/* <p><b>{service.Subheading}</b></p> */}
                                {/* <p>Introducing Agrocast's Solar Power service – your gateway to a brighter and more sustainable future. Imagine fields bathed in sunlight, not only nurturing crops but also generating power to fuel your operations. Our expert team specializes in crafting solar solutions that seamlessly integrate with your farm's layout and energy requirements. By harnessing the power of solar panels, you'll not only enjoy reduced energy costs but also contribute to a more resilient and environmentally conscious agricultural industry. From initial assessment to system installation and ongoing maintenance, Agrocast is your partner in cultivating clean energy for a thriving tomorrow. </p> */}
                                <ul>
                                    <li>Watershed delineation.</li>
                                        <li> Simulate water budget components (Runoff, Baseflow, Soil Moisture and Evapotranspiration).</li>
                                        <li>Analysis of flood/drought events.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={SolarService3} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3 className="services_card_heading">Hydraulics Modeling to simulate flood inundation</h3>
                                {/* <p><b>{service.Subheading}</b></p> */}
                                {/* <p></p> */}
                                <ul>
                                    <li>Prepare flood inundation maps (water depth and water level).</li>
                                    <li>Design drainage system to prevent water logging.</li>
                                    <li>Dam break analysis.</li>
                                </ul>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default SolarService