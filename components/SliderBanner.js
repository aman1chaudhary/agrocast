import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider1 from '../public/images/main-slider/slide1.jpg';
import Slider2 from '../public/images/main-slider/slide2.jpg';
import Slider3 from '../public/images/main-slider/slide3.jpg';
import Slider4 from '../public/images/main-slider/slide4.jpg';
import Link from 'next/link';
import Image from 'next/image';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="home_carousel_arrow">
            <div className="next flaticon-right-arrow" onClick={onClick} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="home_carousel_arrow">
            <div className="prev flaticon-left-arrow" onClick={onClick} />
        </div>
    );
}

const SliderBanner = () => {



    var settings = {
        arrows: true,
        dots: false,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                <div className='home_carousel home_carousel_img1'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className="banner-content">
                                <h1>A platform for Agricultural Outlook</h1>
                                <p>AgroCast remotely monitors farms in near real-time, providing valuable data on crop growth, soil moisture, and crop health. Our weekly advisories in regional languages help farmers optimize resources and boost crop yields.</p>
                               <Link href="/service/agriculture"> <button><span>Discover More</span></button></Link>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='home_carousel home_carousel_img2'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className="banner-content">
                                <h1>From Water Measurement to Resource Management</h1>
                                <p>AgroCast offers comprehensive services, including topography surveys, hydrology assessments, drainage design, and groundwater investigations for effective water resource management.</p>
                                <Link href="/service/water"> <button><span>Discover More</span></button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home_carousel home_carousel_img3'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className="banner-content">
                                <h1>Meet the challenges of a changing climate.</h1>
                                <p>AgroCast evaluates climatic variables using advanced models, projecting scenarios at local and national levels to help you tackle climate challenges.</p>
                                <Link href="/service/climate-risk"> <button><span>Discover More</span></button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home_carousel home_carousel_img4'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className="banner-content">
                                <h1>Solar-Powered Solutions: Energizing Agriculture</h1>
                                <p>AgroCast harnesses the power of sunlight to empower agriculture, offering innovative solar solutions for enhanced productivity.</p>
                                <Link href="/service/solar-power"> <button><span>Discover More</span></button></Link>
                            </div>
                        </div>
                    </div>
                </div>


            </Slider>





        </div>


    )
}

export default SliderBanner