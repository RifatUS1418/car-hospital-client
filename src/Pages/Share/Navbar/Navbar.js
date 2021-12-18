import React, { useState } from 'react';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className='main-nav'>
                {/* 1st logo part */}
                <div className="logo">
                    <h2>
                        <span>C</span>ar
                        <span>H</span>ospital
                    </h2>
                </div>

                {/* 2nd menu part */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"} >
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="" target="_blank">
                                <FaFacebookSquare></FaFacebookSquare>
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <FaFacebookSquare></FaFacebookSquare>
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <FaFacebookSquare></FaFacebookSquare>
                            </a>
                        </li>
                    </ul>
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>
            {/* hero section */}
            {/* <section className="hero-section">
                <p>Wlecome to</p>
                <h1>Car Hospital</h1>
            </section> */}
        </>
    );
};

export default Navbar;