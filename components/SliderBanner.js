import React from 'react'
import Slider from "react-slick";
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
        dots: true,
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
                                <p>AgroCast monitors farms remotely in near real-time and provide insights into crop growth, soil moisture, and crop health condition along with geography-season-crop specific weekly advisory in vernacular languages and it helps farmers to optimize the use of farm resources and increase crop yield.</p>
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
                                <p>AgroCast offers topography survey, hydrology-hydraulics modeling, flood risk assessment, drainage design and groundwater investigation.</p>
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
                                <p>AgroCast assess climatic variables using climate models projection under different scenarios at local to national level.</p>
                                <Link href="/service/climate-risk"> <button><span>Discover More</span></button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='home_carousel home_carousel_img4'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className="banner-content">
                                <h1>Solar-Powered Solutions: Energizing Agriculture</h1>
                                <p>AgroCast harnesses the power of sunlight to empower agriculture, offering innovative solar solutions for enhanced productivity.</p>
                                <Link href="/"> <button><span>Discover More</span></button></Link>
                            </div>
                        </div>
                    </div>
                </div> */}


            </Slider>





        </div>


    )
}

export default SliderBanner