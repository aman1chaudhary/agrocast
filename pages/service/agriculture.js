import React from 'react'

import video_thumbnail from "../../public/images/video_thumbnail2.jpg"
import AgriServices1 from '../../public/images/our-services/AgriServices1.jpg';
import AgriServices2 from '../../public/images/our-services/AgriServices2.jpg';
import AgriServices3 from '../../public/images/our-services/AgriServices3.jpg';
import AgriServices4 from '../../public/images/our-services/AgriServices4.jpg';
import Image from 'next/image';
import agrocast_app from "../../public/images/about/agrocast_app.jpg"
import Head from 'next/head';
import VideoPopup from '../../components/VideoPopup';
import Link from 'next/link';

const AgricultureServiceData = [
    {
        Heading: "Agriculture Aid",
        Subheading: "Get agriculture advisory from sowing to harvesting",
        Image: AgriServices1,
        Description: "Agriculture aid helps to mitigate the worst impact on crop yield and health during unfavorable events. We analyze the weather, soil moisture, and crop health indices to generate agriculture advisory. Agriculture aid provides highly accurate and real time information on the right time of sowing/harvesting, application of pesticide, and irrigation. The agriculture aid is available local languages via our mobile application."
    },
    {
        Heading: "Crop Health Monitor",
        Subheading: "Monitor crop stress",
        Image: AgriServices3,
        Description: "The Normalized Difference Vegetation Index (NDVI) and Vegetation Health Index are used to monitor crop health. We provide weekly vegetation health indexes. Utilizing real time plant and soil data and past soil data, we provide advisory on crop health and preventive measures to minimize damage to crops and prevent crop failure."
    },

    {
        Heading: "Drought Monitor",
        Subheading: "Monitor drought propagation with time",
        Image: AgriServices2,
        Description: "Drought is the costliest natural disaster. Monitoring drought ahead of time helps reduce the unpleasant impact on water and agriculture sectors. We monitor meteorological and hydrological drought at fine resolution. The drought monitoring system provides information on drought severity and area extent well in advance giving the partners time to mitigate and counter the impact of drought."
    },

    {
        Heading: "Crop Acreage",
        Subheading: "Estimate seasonal crop yield",
        Image: AgriServices4,
        Description: "Using high resolution satellite images modeling along with Machine Learning, we classify crops and estimate crop yield for season."
    },


]


const AgricultureService = () => {
    return (
        <>
            <Head>
                <title>Service | Agriculture </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="page_container">
                <header id="page-header">
                    <div className="page-heading">
                        <h2>Agriculture</h2>
                        <p><Link href="/">Services</Link> &#187; Agriculture</p>
                    </div>
                </header>

                <div className="page_section">

                    {AgricultureServiceData.map((service, index) => {
                        return (
                            <div className="row services_card_container" key={index}>
                                <div className="col-lg-6 col-md-12 m-b30  ">
                                    <div className='services_card_img'>
                                        <Image src={service.Image} data-tilt alt='Service' />
                                    </div>

                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="services_card_content">
                                        <h3>{service.Heading}</h3>
                                        <p>{service.Subheading}</p>
                                        <p>{service.Description} </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>




                <div className='agrocast_app_feature_container'>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12 p-a0">
                            <div className='agrocast_app_feature_img'>
                                <Image src={agrocast_app} alt="agrocast_app_feature" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <div className="agrocast_app_feature_content">
                                <h2>Agrocast App Features</h2>
                                <ul className="list-checked primary">
                                    <li><span>Satellite Based Indices </span></li>
                                    <li><span>Get local weather forecast on hourly to daily time step. </span></li>
                                    <li><span>Information about rainfall, temperature, humidity and wind speed.  </span></li>
                                    <li><span>Geography And Season Specific Crop Calendar </span></li>
                                    <li><span>Information about the crop. </span></li>
                                    <li><span>Get weekly farming activities starting from sowing to harvesting.</span></li>
                                    <li><span>Information on Pests and Disease management. </span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="page_section">
                    <div className="page_section_heading">
                        <h2>How to add farm in <br /> Agrocast App</h2>
                    </div>
                    <div className="row">
                        <div className="faq_video">
                            <VideoPopup videoID="PWEY6vtELd8" />
                            <Image src={video_thumbnail} alt="" className="img-cover" />
                        </div>



                    </div>

                </div>




            </div>


        </>
    )
}

export default AgricultureService