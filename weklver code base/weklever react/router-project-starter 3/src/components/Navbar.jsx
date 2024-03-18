import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"
import "./navbar.css"

import cover1asset from '../custom_assets/cover 1Asset 12.svg'
import burgermenu from '../custom_assets/icons8-menu.svg'

import { useState, useEffect } from 'react';


const Navbar = (props) => {

    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [navLinksLeft, setNavLinksLeft] = useState("-100%");

  function moveNavLinksToLeft() {
    setNavLinksLeft("0");
  }

  function moveNavLinksToRight() {
    setNavLinksLeft("-100%");
  }

//   menuOpenBtn.onclick = function() {
//     navLinks.style.left = "0";
//     }
//     menuCloseBtn.onclick = function() {
//     navLinks.style.left = "-100%";
//     }
    



    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
  


    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className={visible ? 'navbara' : 'navbara scrolled'}>
<nav >

<div className={visible ? 'navbara navbar' : 'navbara navbar scrolled'}>
    <img className="bx bx-menu" src={burgermenu} alt="" onClick={moveNavLinksToLeft}/>
    <div className="logo"><img src={cover1asset} alt=""/><a href="#"></a></div>
    <div className="nav-links" style={{ left: navLinksLeft }}>
        <div className="sidebar-logo">
            <span className="logo-name">
                <img src={cover1asset} alt=""/>
            </span>
            <b className='bx bx-x bg-stone-900' onClick={moveNavLinksToRight} >X</b>
        </div>
        <ul className="links">
            <li>
                <a href="#">SERVICES</a>
                {/* <img className="bx bxs-chevron-down htmlcss-arrow arrow"
                    src="./custom_assets/down-arrow-svgrepo-com.svg" alt=""/> */}
                <ul className="htmlCss-sub-menu sub-menu">
                    <li><a href="">SEO</a></li>
                    <li><a href="">Guest Posting</a></li>
                    <li><a href="">Affiliate Marketing</a></li>
                    <li><a href="">LINK BUILDING</a></li>
                    <li><a href="">WEB DEVELOPMENT</a></li>
                    <li><a href="">LOCAL SEO</a></li>
                    <li> <a href="">ECOMMERCE SEO</a></li>
                    <li><a href="">UI/ UX Design</a></li>
                    <li><a href="">BLOG CONTENT WRITING SERVICES</a></li>

                </ul>
            </li>
            <li>
                <a href="#">EXPERTISE</a>
                {/* <img className="bx bxs-chevron-down js-arrow arrow" src="./custom_assets/down-arrow-svgrepo-com.svg"
                    alt=""/> */}
                <ul className="js-sub-menu sub-menu">
                    <li><a href="#">Health/Supplements</a></li>
                    <li><a href="#">Fintech</a></li>
                    <li><a href="#">Crypto</a></li>
                    <li><a href="#">Homecare</a></li>
                    <li><a href="#">Real Estate</a></li>
                </ul>
            </li>
            <li><a href="#" onclick="redirectToAboutUs()">ABOUT US</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="#">BLOG</a></li>
        </ul>
    </div>
    <div className="search-box">
        <i className='bx bx-search'></i>
        <div className="input-box">
            <input type="text" placeholder="Search..."/>
        </div>
    </div>
</div>

</nav>
      
    </div>
  )
}

export default Navbar
