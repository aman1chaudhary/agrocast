import React from 'react'
import Logo from "../public/images/logo.png"
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <>
      <div className="footer_container" >
        <div className="footer_top">
          <div className="row">
            <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
              <div className="footer_item">
                <h5>Company</h5>
                <ul>
                  <li> <Link href="/"><i className="fa fa-solid fa-angle-right"></i> Home </Link></li>
                  <li> <Link href="/about"><i className="fa fa-solid fa-angle-right"></i> About Us</Link></li>
                  {/* <li> <Link href="/service"><i className="fa fa-solid fa-angle-right"></i> Our Services</Link></li> */}
                  <li><Link href="/contact"><i className="fa fa-solid fa-angle-right"></i> Contact Us</Link></li>
                  <li> <Link href="/privacy-policy"><i className="fa fa-solid fa-angle-right"></i> Privacy Policies</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
              <div className="footer_item">
                <h5>Useful Links</h5>
                <ul>
                  <li> <Link href="/terms-and-condition"><i className="fa fa-solid fa-angle-right"></i> Terms & Conditions </Link></li>

                  <li> <Link href="/refund-and-cancellation-policy"><i className="fa fa-solid fa-angle-right"></i> Refund & Cancellation Policy</Link></li>
                  <li><a href='https://clustrmaps.com/site/1bwn5' target="_blank" rel="noreferrer"><i className="fa fa-solid fa-angle-right"></i> Website Visitors</a></li>
                </ul>

              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
              <div className="footer_item">
                <h5>Contact us</h5>
                <div className='footer_item_icon_section'>
                  <div className='footer_item_icon'>
                    <i className="ti-location-pin"></i>
                  </div>
                  <div className='footer_item_icon_content'>
                    <strong>Address: </strong>Research Park, IIT Gandhinagar, Gujarat, 382355
                  </div>
                </div>

                <div className='footer_item_icon_section'>
                  <div className='footer_item_icon'>
                    <i className="ti-mobile"></i>
                  </div>
                  <div className='footer_item_icon_content'>
                    <strong>Phone: </strong>+91 7600756598
                  </div>
                </div>



                <div className='footer_item_icon_section'>
                  <div className='footer_item_icon'>
                    <i className="ti-email"></i>
                  </div>
                  <div className='footer_item_icon_content'>
                    <strong>Email: </strong>support@agrocastanalytics.com
                  </div>

                </div>
                <a href="https://www.linkedin.com/company/agrocast-analytics/" target='blank' className="social_icons linkedin"><i className="fa fa-linkedin"></i></a>
                <a href="https://www.youtube.com/@AgroCastAnalytics" target='blank' className="social_icons youtube"><i className="fa fa-youtube"></i></a>

                {/* <a href="https://www.linkedin.com/company/agrocast-analytics/" target='blank' className="social_icons facebook"><i className="fa fa-facebook"></i></a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
              <div className="footer_item">
                <Image src={Logo} alt='Logo' />
                <div className="footer_social_icons">
                  {/* <a href={"#"} className="social_icons facebook" target='blank'><i className="fa fa-facebook"></i></a> */}
                  {/* <a href="https://www.linkedin.com/company/agrocast-analytics/" target='blank' className="social_icons linkedin"><i className="fa fa-linkedin"></i></a> */}
                  {/* <a href="mailto:support@agrocastanalytics.com" className="social_icons twitter"><i className="fa fa-envelope"></i></a> */}
                </div>
              </div>

            </div>
          </div>
        </div>



        <div className="footer_bottom">

          <p>Copyright © 2023 Agrocast - All Rights Reserved</p>

        </div>
      </div>

    </>
  )
}

export default Footer