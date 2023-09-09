import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../public/images/achievements/1.png';
import img2 from '../public/images/achievements/2.png';
import img3 from '../public/images/achievements/3.png';
import img4 from '../public/images/achievements/4.png';

import Image from 'next/image';



const imgblog = [
	{
		image: img3,
		description: "Selected as Top 9 Agri-Tech Startup",
		Link:"https://msl.mahindra.com/"
	},
	{
		image: img2,
		description: "Srujan Grant awardee",
		Link:"http://ihubgujarat.in/srujan"
	},
	{
		image: img1,
		description: "Part of AAU Cohort 5",
		Link:"https://www.aauincubator.in/"
	},
	{
		image: img4,
		description: "Top 20 start up selected for bootcamp",
		Link:"https://www.iinpact.org/"
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


const AchievementsCarousel = () => {

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
						<a href={card.Link} target='blank'>
						<Image src={card.image} alt="achievement" className='achievement_logo' />
						<div className='achievement_content'>
							<p>{card.description}</p>
						</div>
						</a>
					</div>
				))}
			</Slider>

		</div>
	)
}

export default AchievementsCarousel