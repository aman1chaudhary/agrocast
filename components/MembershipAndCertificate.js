import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../public/images/certificates/1.png';
import img2 from '../public/images/certificates/2.png';
import img3 from '../public/images/certificates/3.png';
import img4 from '../public/images/certificates/4.png';
import img5 from '../public/images/certificates/5.png';
import img6 from '../public/images/certificates/6.png';
import img7 from '../public/images/certificates/7.png';


import Image from 'next/image';



const imgblog = [
	{
		image: img1,
		description: "IEI – The Institution of Engineers (India)",
		Link:""
	},
	{
		image: img2,
		description: "IWWA – Indian Water Works Association",
		Link:"https://timesofindia.indiatimes.com/city/ahmedabad/surface-water-availability-down-8-in-narmada-basin/articleshow/71040099.cms"
	},
	{
		image: img3,
		description: "GICEA – The Gujarat Institute of Civil Engineers & Architects",
		Link:""
	},
	{
		image: img4,
		description: "INCOLD – The Committee for International Commission on Large Dams",
		Link:""
	},
    {
		image: img5,
		description: "DGCA Certified Drone Pilot",
		Link:""
	},
    {
		image: img7,
		description: "MSME Certificate",
		Link:""
	},
    
	{
		image: img6,
		description: "Startup India Certificate",
		Link:""
	},
    

	

]

function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div className="carousel_arrow">
			<div className="owl-next flaticon-right-arrow" onClick={onClick} />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div className="carousel_arrow">
			<div className="owl-prev flaticon-left-arrow" onClick={onClick} style={{ zIndex: 1 }} />
		</div>
	);
}


const MembershipAndCertificate = () => {

	var settings = {
		arrows: true,
		slidesToShow: 4,
		infinite: true,
		// adaptiveHeight: true,
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
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 591,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 360,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	};



	return (
		<div className='achievement_carousel_container'>
			<Slider {...settings}>
				{imgblog.map((card, index) => (
					<div key={index} className='achievement_logo_container'>
						{/* <a href={card.Link} target='blank'> */}
						<Image src={card.image} alt="achievement" className='achievement_logo' />
						<div className='achievement_content'>
							<p>{card.description}</p>
						</div>
						{/* </a> */}
					</div>
				))}
			</Slider>

		</div>
	)
}

export default MembershipAndCertificate