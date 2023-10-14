import Head from 'next/head'
import Image from 'next/image'
import SliderBanner from '../components/SliderBanner'
import ClientCarousel from '../components/ClientCarousel'
import dynamic from 'next/dynamic'
import ourMissionImg from '../public/images/about/our-mission.jpg';
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
import CountUp from 'react-countup';


const counterSection = [
  { icon: <i className="icon ti-bag" />, num: '4', title: 'Years in Business', },
  { icon: <i className="icon ti-user" />, num: '12', title: 'Happy Clients', },
  // { icon: <i className="icon flaticon-users" />, num: '5', title: 'Technical Experts', },
  { icon: <i className="icon ti-mobile" />, num: '20', title: 'Number of Projects', },
];


const WorkGlance = [
  {
    Image: work1,
    Description: "Agriculture"
  },
  {
    Image: work2,
    Description: "Water Resources"
  },
  {
    Image: work3,
    Description: "Solar"
  },
  {
    Image: work4,
    Description: "Industry"
  },
  {
    Image: work5,
    Description: "Urban Planning"
  },
  {
    Image: work6,
    Description: "Dam Safety"
  },
  {
    Image: work7,
    Description: "Metro"
  },
  {
    Image: work8,
    Description: "Insurance"
  },
  {
    Image: work9,
    Description: "Banking"
  },
]
const ProjectMap = dynamic(() => import('../components/ProjectMap'), {
  ssr: false,
});

export default function Home() {

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
              <div className='col-md-6'>
                <div className='our_mission_section'>
                  <div>
                    <div className="page_section_heading">
                      <h2>Our Mission</h2>
                    </div>
                    <p>To build a climate-resilient society by analyzing and eliminating the current and projected risk associated in agriculture and water sector considering climate change threat. Our solutions have proved an extremely prudent investment since it adds the social-economic-environmental value and contributes in sustainable growth of country.</p>
                  </div>

                </div>


              </div>
              <div className='col-md-6'>
                {/* <div className="feature-img-bx">
                  <Image src={ourMissionImg} alt="" />
                </div> */}
                <div className="our_mission">
                  <Image src={ourMissionImg} alt="Mission Img" />
                </div>

              </div>
            </div>

          </div>







          <div className='page_section'>
            <div className='row'>
              <div className='col-lg-9 col-md-12'>
                <div className="page_section_heading our_work_mobile" >
                  <h2 style={{ textAlign: "left" }}>A Glance of Our Work</h2>

                </div>

                <ProjectMap />
              </div>
              <div className='col-lg-3 col-md-12'>
                <div className="page_section_heading our_work_desktop" >
                  <h2 style={{ textAlign: "left" }}>A Glance of Our Work</h2>
                  <p>We take immense pride in our past projects, each a testament our unwavering commitment to serve the follwoing sectors:</p>
                </div>

                <div className='work_glance_container'>
                  <div className='row'>
                    {WorkGlance.map((item, index) => (
                      <div key={index} className="work_glance_item col-lg-4 col-md-4 col-sm-4 col-4">
                        <div className="inner-box">
                          <div className="image-box">
                            <div className="image">
                              <Image src={item.Image} alt='work_glance' />
                              <div className="image-content">
                                <p>{item.Description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>


          </div>





          <div>
            <div className='counter_container'>
              <div className="row">
                {counterSection.map((data, index) => (
                  <div className="col-lg-4 col-md-4 col-sm-12" key={index} style={{ display: "flex", justifyContent: "center" }}>
                    <div className="counter_style">
                      <div className="counter_icon">{data.icon}<span className="counter"><CountUp end={data.num} duration={4} />+</span></div>
                      <span className="counter_text">{data.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


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




          <div style={{ display: "none" }}>
            <a href="https://clustrmaps.com/site/1bwn5" title="Visit tracker">
              <img src="//www.clustrmaps.com/map_v2.png?d=l478EeMh0ThPcTSQK8w-vYX6ydQJ7z9wUt2gKay9zV8&cl=ffffff" /></a>


          </div>




        </div>

      </main>
    </div>
  )
}
