import React from 'react'
import Slider from "react-slick";
import img1 from '../public/images/main-slider/slide1.jpg';
import img2 from '../public/images/main-slider/slide2.jpg';
import Link from 'next/link';
import Image from 'next/image';



const imgblog = [
	{
		image: img1,
		description: "IEI – The Institution of Engineers (India)",
	},
	{
		image: img2,
		description: "IWWA – Indian Water Works Association",
	},	

]

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

const ImageSlideshow = () => {



    var settings = {
        arrows: true,
        dots: true,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
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
            {imgblog.map((card, index) => (
					<div key={index} className=''>
						<Image src={card.image} alt="Image" />
					</div>
				))}


            </Slider>





        </div>


    )
}

export default ImageSlideshow