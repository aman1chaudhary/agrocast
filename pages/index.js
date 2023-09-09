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
import work1 from "../public/images/about/work-1.jpg"
import work2 from "../public/images/about/work-2.jpg"
import work3 from "../public/images/about/work-3.jpg"
import work4 from "../public/images/about/work-4.jpg"
import work5 from "../public/images/about/work-5.jpg"
import work6 from "../public/images/about/work-6.jpg"
import work7 from "../public/images/about/work-7.jpg"
import work8 from "../public/images/about/work-8.jpg"
import work9 from "../public/images/about/work-9.jpg"
import AchievementsCarousel from '../components/AchievementsCarousel'
import MediaAndTalkCarousel from '../components/MediaAndTalk'
import MembershipAndCertificate from '../components/MembershipAndCertificate'

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
                    <p>To build a climate-resilient society by analyzing and eliminating the current and projected risk associated in agriculture and water sector considering climate change threat. Our solutions have proved an extremely prudent investment since it adds the social-economic-environmental value and contributes in sustainable growth of country.</p>
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
              {/* <h2>A Glance of Our Work</h2> */}
            </div>
            <div className='row'>
              <div className='col-lg-9 col-md-12'>
                <ProjectMap />
              </div>
              <div className='col-lg-3 col-md-12'>
                <div className="page_section_heading our_work" >
                  <h2 style={{ textAlign: "left" }}>A Glance of Our Work</h2>
                  <p>We take immense pride in our past projects, each a testament our unwavering commitment to Agriculture, Water and Climate Change sectors. We serve the follwoing sectors:</p>
                </div>

                <div className='work_glance_container'>
                  <div className='row work_glance_item'>
                    <div className='col-4 '>
                      <Image src={work1} />
                    </div>
                    <div className='col-4'>
                      <Image src={work6} />
                    </div>
                    <div className='col-4'>
                      <Image src={work9} />
                    </div>
                  </div>
                  <div className='row work_glance_item'>
                    <div className='col-4'>
                      <Image src={work4} />
                    </div>
                    <div className='col-4'>
                      <Image src={work3} />
                    </div>
                    <div className='col-4'>
                      <Image src={work2} />
                    </div>
                  </div>
                  <div className='row work_glance_item'>
                    <div className='col-4'>
                      <Image src={work5} />
                    </div>
                    <div className='col-4'>
                      <Image src={work8} />
                    </div>
                    <div className='col-4'>
                      <Image src={work7} />
                    </div>
                  </div>
                </div>

                {/* <Link
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


                </Link> */}

              </div>
            </div>


          </div>





          <div>
            <CounterSection />
          </div>




          {/* <div className="page_section">
            <div className="page_section_heading">
              <h2>Download Agrocast Mobile App</h2>
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
          </div> */}

          <div className='page_section'>
            <div className="page_section_heading">
              <h2>Our Clients</h2>
            </div>
            <ClientCarousel />

          </div>


          <div className='page_section'>
            <div className="page_section_heading">
              <h2>Achievements</h2>
            </div>
            <AchievementsCarousel />

          </div>



          <div className='page_section'>
            <div className="page_section_heading">
              <h2>Membership and Certificate</h2>
            </div>
            <MembershipAndCertificate />

          </div>


          <div className='page_section'>
            <div className="page_section_heading">
              <h2>Media and Talks</h2>
            </div>
            <MediaAndTalkCarousel />
          </div>



          {/* <div className='page_section' ref={pastProjectsRef}>
            <div className="page_section_heading">
              <h2>Have a question? Contact Us</h2>
            </div>
            <HomeContactForm />
          </div> */}








        </div>

      </main>
    </div>
  )
}
