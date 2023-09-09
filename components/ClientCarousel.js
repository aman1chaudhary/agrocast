import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import logo1 from '../public/images/client-logo/logo1.jpg';
import logo2 from '../public/images/client-logo/logo2.jpg';
import logo5 from '../public/images/client-logo/logo5.jpg';
import logo6 from '../public/images/client-logo/logo6.jpg';
import logo8 from '../public/images/client-logo/logo8.jpg';
import logo9 from '../public/images/client-logo/logo9.jpg';
import logo10 from '../public/images/client-logo/logo10.jpg';
import logo11 from '../public/images/client-logo/logo11.jpg';
import logo12 from '../public/images/client-logo/logo12.jpg';
import logo13 from '../public/images/client-logo/logo13.jpg';
import logo14 from '../public/images/client-logo/logo14.jpg';
import logo15 from '../public/images/client-logo/logo15.jpg';
import Image from 'next/image';



const imgblog =[
	{image:logo1, },  {image:logo5, }, {image:logo2, }, 
	{image:logo8, }, {image:logo9, },{image:logo6, }, 
	{image:logo10, }, {image:logo11, }, {image:logo12, },
	{image:logo13, }, {image:logo14, }, {image:logo15, },
]

function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div className="carousel_arrow">
		  <div className="owl-next flaticon-right-arrow"  onClick={onClick}/>
	  </div>	
	);
  }
  
  function SamplePrevArrow(props) {
	  const { onClick } = props;
	  return (
		  <div className="carousel_arrow">
			  <div className="owl-prev flaticon-left-arrow" onClick={onClick} style={{zIndex:1}}/>
		  </div>
	  );
  } 


const ClientCarousel = () => {

var settings = {		
			arrows: true,
            slidesToShow: 4,	
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 591,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 360,
				  settings: {
					slidesToShow: 2,
				  }
				},
			]
        };



  return (
	<div className='client_carousel_container'>
		<Slider {...settings}>
        {imgblog.map((card, index) => (
          <div key={index} className='client_logo_container'>
            <Image src={card.image} alt="Client" className='client_logo' />
          </div>
        ))}
      </Slider>

	</div>
  )
}

export default ClientCarousel