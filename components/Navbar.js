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
                                    Our Services  <i className="fa fa-solid fa-angle-down"></i>
                                </Link>

                                <div className="dropdown_content">

                                    <Link className='dropdown_link' href="/service/agriculture" onClick={handleLinkClick}> Agriculture</Link>
                                    <Link className='dropdown_link' href="/service/water" onClick={handleLinkClick}> Water Resources</Link>
                                    <Link className='dropdown_link' href="/service/climate-risk" onClick={handleLinkClick}> Climate Risk</Link>

                                </div>
                            </div>
                            <Link className="nav__item" href="/research-articles" onClick={handleLinkClick}>
                                Research Articles
                            </Link>
                            <Link className="nav__item" href="/contact" onClick={handleLinkClick}>
                                Contact Us
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Navbar
