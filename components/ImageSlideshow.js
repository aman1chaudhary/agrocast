import React from 'react'
import Slider from "react-slick";
import img1 from '../public/images/main-slider/slide1.jpg';
import img2 from '../public/images/main-slider/slide2.jpg';
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


function SampleDots(props) {
    const { onClick } = props;
    return (
        <div className="slick-dots">
            <button className="" onClick={onClick}>Change</button>
        </div>
    );
}

const ImageSlideshow = ({ images }) => {
    var settings = {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        appendDots: dots => (
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.2)",
                // borderRadius: "10px",
                padding: "10px"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
        //   customPaging: i => (
        //     <div
        //       style={{
        //         // width: "30px",
        //         // color: "black",
        //         border: "1px black solid"
        //       }}
        //     >
        //       {i + 1}
        //     </div>
        //   ),
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
                {images.map((card, index) => (
                    <div key={index} className=''>
                        <Image src={card.image} alt="Image" />
                    </div>
                ))}


            </Slider>





        </div>


    )
}

export default ImageSlideshow