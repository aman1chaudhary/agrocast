import React from 'react'
import video_thumbnail from "../../public/images/video_thumbnail.jpg"
import AgriServices1 from '../../public/images/our-services/AgriServices1.jpg';
import AgriServices2 from '../../public/images/our-services/AgriServices2.jpg';
import AgriServices3 from '../../public/images/our-services/AgriServices3.jpg';
import AgriServices4 from '../../public/images/our-services/AgriServices4.jpg';
import Image from 'next/image';
import agrocast_app from "../../public/images/about/agrocast_app.jpg"
import Head from 'next/head';
import VideoPopup from '../../components/VideoPopup';
import Link from 'next/link';
import { SlideComparision } from '../../components/SlideComparision';

const AgricultureService = () => {

    return (
        <>
            <Head>
                <title>Service | Agriculture </title>
                <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="page_container">
                


                <header className='page_header ariculture_img'>
                    <div className="page-heading">
                        <h2>Agriculture</h2>
                        {/* <p><Link href="/">Services</Link> &#187; Agriculture</p> */}
                    </div>
                </header>


                <div className="page_section">
                    <div className="page_section_heading">
                        <h2>Agrocast Mobile App </h2>
                    </div>
                    <div className="app-btn-bx text-center">
                        <Link href={"#"}><button className='round_btn'><i className="fa fa-android"></i>Android </button> </Link>
                    </div>
                    <div className="row">
                        <div className="faq_video">
                            <VideoPopup videoID="t_EuAkunsbM" />
                            <Image src={video_thumbnail} alt="" className="img-cover" />
                        </div>



                    </div>

                </div>


                <div className='feature_container'>
                    <div className="feature_container_item">
                        <div className='feature_img'>
                            <Image src={agrocast_app} alt="App feature" />
                        </div>
                    </div>
                    <div className="feature_container_item">
                        <div className='feature_content_box'>
                            <div className="feature_content">
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

                    {/* <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={AgriServices1} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3>Agriculture Aid</h3>
                                <p>Get agriculture advisory from sowing to harvesting</p>
                                <p>Agriculture aid helps to mitigate the worst impact on crop yield and health during unfavorable events. We analyze the weather, soil moisture, and crop health indices to generate agriculture advisory. Agriculture aid provides highly accurate and real time information on the right time of sowing/harvesting, application of pesticide, and irrigation. The agriculture aid is available local languages via our mobile application. </p>
                            </div>
                        </div>
                    </div> */}



                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={AgriServices2} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3>Drought Monitor</h3>
                                {/* <p>Monitor drought propagation with time</p> */}
                                <ul>
                                    <li>Drought is the costliest natural disaster. Monitoring drought ahead of time helps reduce the unpleasant impact on water and agriculture sectors. 
                                    </li>
                                    <li>We monitor meteorological and hydrological drought at fine resolution. The drought monitoring system provides information on drought severity and area extent well in advance giving the partners time to mitigate and counter the impact of drought.</li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>

                    <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={AgriServices3} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3>Crop Acreage</h3>
                                {/* <p>Monitor crop stress</p> */}
                                <ul>



                                    <li>Using high resolution satellite images modeling along with Machine Learning, we classify crops and estimate crop yield for season.
                                    </li>


                                </ul>

                            </div>
                        </div>
                    </div>

                    {/* <div className="row services_card_container">
                        <div className="col-lg-6 col-md-12 m-b30  ">
                            <div className='services_card_img'>
                                <Image src={AgriServices4} data-tilt alt='Service' />
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="services_card_content">
                                <h3>Crop Acreage</h3>
                                <p>Estimate seasonal crop yield</p>
                                <p>Using high resolution satellite images modeling along with Machine Learning, we classify crops and estimate crop yield for season. </p>
                            </div>
                        </div>
                    </div> */}



                </div>





                <div className='feature_container'>
                    <div className="feature_container_item">
                        <div className='feature_img'>
                            <SlideComparision />
                        </div>
                    </div>
                    <div className="feature_container_item">
                        <div className='feature_content_box'>
                            <div className="feature_content">
                                <h2>Tree Counting using AI/ML</h2>
                                <ul className="list-checked">
                                    <li><span>Our ML models now capable to accurately identify trees from UAV images </span></li>
                                    <li><span> We calculate the number of trees within the area covered by drone flight. </span></li>
                                    <li><span>In addition, we provide geo tagging to each detected tree.  </span></li>
                                    <li><span>The developed system is capable of generating comprehensive report on the number of tree for record and aftermath analysis.</span></li>
                                    <li><span>Our system is useful, particularly,  for the tree counting and geotagging in wide range of areas including roadways, urban localities and plain grounds. </span></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>














            </div>


        </>
    )
}

export default AgricultureService