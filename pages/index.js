import Head from 'next/head'
import Image from 'next/image'
import SliderBanner from '../components/SliderBanner'
import ClientCarousel from '../components/ClientCarousel'
import HomeContactForm from '../components/HomeContactForm'
import Link from 'next/link'
import VideoPopup from '../components/VideoPopup'
import video_thumbnail from '../public/images/video_thumbnail.jpg';
import dynamic from 'next/dynamic'

import ourMissionImg from '../public/images/about/our-mission.jpg';
import CounterSection from '../components/CounterSection'
import { useRef } from 'react'


const ProjectMap = dynamic(() => import('../components/ProjectMap'), {
  ssr: false,
});

export default function Home() {
  const pastProjectsRef = useRef(null);


  return (
    <div>
      <Head>
        <title>Agrocast Analytics </title>
        <meta name="description" content="AgroCast Analytics Pvt Ltd is an Indian registered startup that provides consultancy services in Agriculture, Water, and Climate change sectors. Our mission is to build a climate-resilient society by analyzing and eliminating the current and projected risk associated with the agriculture and water sector considering climate change threats." />
        <meta name="keywords" content="Agricultural, Water Resourse, Climate Risk, Agrocast" />
        <meta name="author" content="Agrocast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='page_container'>
          <SliderBanner />

          <div className='page_section'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='our_mission_section'>
                  <div>
                    <div className="page_section_heading">
                      <h2>Our Mission</h2>
                    </div>
                    <p>To build a climate-resilient society by analyzing and eliminating the current and projected risk associated in agriculture and water sector considering climate change threat. Our solutions have proved an extremely prudent investment since it adds the social-economic- environmental value and contributes in sustainable growth of country.</p>
                  </div>

                </div>


              </div>
              <div className='col-md-8'>
                <div className="feature-img-bx">
                  <Image src={ourMissionImg} alt="" />
                </div>

              </div>
            </div>

          </div>




          <div className='page_section'>
          <div className="page_section_heading">
              <h2>A Glance of Our Work</h2>
            </div>
            <div className='row'>
              <div className='col-lg-12 col-md-12'>
                <ProjectMap />
              </div>
              {/* <div className='col-lg-5 col-md-12'>
                <div className="page_section_heading" >
                  <h2 style={{ textAlign: "left" }}>A Glance of Our Work</h2>
                  <p>
                    In our journey at AgroCast, we take immense pride in our past projects, each a testament to our unwavering commitment to agriculture, water, and climate change sectors. Our history is woven with successes in climate-resilient farming initiatives, the implementation of solar-powered agricultural solutions, optimizing water resource management, and providing crop-specific advisory programs. Through these projects, we&apos;ve not only enhanced agricultural practices but also empowered communities with knowledge and tools to thrive in an ever-changing environment. Explore our rich portfolio of past endeavors, a testament to our dedication to sustainable growth and resilience
                  </p>
                </div>

                <Link
                  href="#"
                  className="site-button btn-icon"
                  onClick={(e) => {
                    e.preventDefault();
                    pastProjectsRef.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                >
                  Know more <i className="fa fa-angle-double-right"></i>


                </Link>

              </div> */}
            </div>


          </div>







          <div className="page_section">
            <div className="page_section_heading">
              <h2>Download Agrocast Mobile App</h2>
            </div>
            <div className="app-btn-bx text-center">
              {/* <Link href={"#"} className="site-button radius-xl m-lr5 "><i className="fa fa-apple"></i>IOS</Link> */}
              <Link href={"#"}><button className='round_btn'><i className="fa fa-android"></i>Android </button> </Link>
            </div>

            <div className="row">
              <div className="faq_video">
                <VideoPopup videoID="t_EuAkunsbM" />
                <Image src={video_thumbnail} alt="" className="img-cover" />
              </div>
            </div>
          </div>

          <div className='page_section'>
            <div className="page_section_heading">
              <h2>Our Clients</h2>
            </div>
            <ClientCarousel />

          </div>



          {/* <div className='page_section' ref={pastProjectsRef}>
            <div className="page_section_heading">
              <h2>Have a question? Contact Us</h2>
            </div>
            <HomeContactForm />
          </div> */}



          <div>
            <CounterSection />
          </div>




        </div>

      </main>
    </div>
  )
}
