import React, { useState } from 'react';
import Logo from "../public/images/logo.png"
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleLinkClick = () => {
        setShowMenu(false);
    };

    return (
        <div className='main_nav_container'>
            <div className="short_nav_container">
                <div className="short_nav_item">
                        <p><i className="flaticon-phone-call"></i> +91 7600756598</p>
                        <p><i className="ti-location-pin"></i> Research Park, IIT Gandhinagar, Gujarat, 382355</p>

                </div>
                <div className="short_nav_item">
                        {/* <p><i className="fa fa-brands fa-skype"></i> Agency.software</p> */}
                        <p><i className="ti-email"></i>support@agrocastanalytics.com</p>
                </div>


            </div>
            <div className="navbar_container">
                <div className="navbar__logo">
                    <Link href="/">
                        <Image src={Logo} alt="nav_logo" />
                    </Link>
                </div>

                <div className="navbar__toggle" onClick={handleToggle}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </div>

                <div className={`main_nav ${showMenu ? 'show' : ''}`}>
                    <div className="nav__content">
                        <div className="main_nav_logo">
                            <Link href="/" onClick={handleLinkClick}>
                                <Image src={Logo} alt="nav_logo" />
                            </Link>
                        </div>

                        <div className="nav__list">

                            <Link className="nav__item" href="/" onClick={handleLinkClick}>
                                Home
                            </Link>



                            <Link className="nav__item" href="/about" onClick={handleLinkClick}>
                                About Us
                            </Link>


                            <div className='dropdown_nav_container'>
                                <Link className="nav__item dropdown_nav" href="#">
                                    Our Services  <i className="fas fa-solid fa-angle-down"></i>
                                </Link>

                                <div className="dropdown_content">

                                    <Link className='dropdown_link' href="/service/agriculture" onClick={handleLinkClick}> Agriculture</Link>
                                    <Link className='dropdown_link' href="/service/water" onClick={handleLinkClick}> Water Resources</Link>
                                    <Link className='dropdown_link' href="/service/climate-risk" onClick={handleLinkClick}> Climate Risk</Link>
                                    {/* <Link className='dropdown_link' href="/service/solar-power" onClick={handleLinkClick}> Solar Power</Link> */}

                                </div>
                            </div>

                            <Link className="nav__item" href="/contact" onClick={handleLinkClick}>
                                Contact Us
                            </Link>

                            {/* <a href="https://agrocastanalytics.com/gcc-dashboard/index.php" className=' nav__item' target='_blank' rel="noreferrer" ><button className='navbar_btn'>Dashboard</button> </a> */}


                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Navbar
