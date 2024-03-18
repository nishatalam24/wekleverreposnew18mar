import React from 'react'
import coverasset from "../custom_assets/cover 1Asset 12.svg"
import { useState } from 'react';

const Footer = () => {

    const [ourOfficesOnOff, setOurOfficesOnOff] = useState(false);

  const handleOurOfficesClick = () => {
    if (!ourOfficesOnOff) {
      // Toggle to show offices
      setOurOfficesOnOff(true);
    } else {
      // Toggle to hide offices
      setOurOfficesOnOff(false);
    }
  };

  return (
    <div>

<div id="footer_div_id">

<footer className="main-footer bg-primary c-pt-10 c-pb-only-12 c-pb-lg-only-8 text-white position-relative">
<div className="container">

    <div className="row flex-row justify-content-between align-items-start c-mt-only-12 c-mt-only-lg-11">
        <div className="col-lg-6">
            <div className="d-flex align-items-start justify-content-start flex-row">


                <a href="weklevers://weklever.io/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                    className="main-footer__logo d-flex align-items-center justify-content-start hover-opacity-0-75">
                    <img src={coverasset} alt=""/>
                </a>

                <div className="main-footer__description c-pl-only-4 c-pl-sm-only-7">
                    <p>We're headquartered in New York with offices in LA and Miami but you can also find our
                        team members in London and Dubai.</p>
                </div>



            </div>
            <div className="main-footer__offices c-mt-7 d-none d-lg-block">
                <h3
                    className="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative d-none d-lg-block">
                    Our offices</h3>
                <button
                    className="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative js-footer-navigation-title border-0 bg-transparent text-white w-100 text-left d-lg-none">Our
                    offices</button>

                <div className="js-footer-navigation-list">


                    {/* <h4 className="font-size-14 font-family-base font-weight-normal c-mt-4 line-height-1-7"> */}


                        <h4 className="font-size-14 font-family-base font-weight-normal c-mt-4 line-height-1-7">
                            <span className="font-weight-bold">Seattle, Washington, United States</span>
                        </h4>


                        <h4 className="font-size-14 font-family-base font-weight-normal c-mt-4 line-height-1-7">
                            <span className="font-weight-bold">Santa Clara, California, United States</span>
                        </h4>


                </div>
            </div>
        </div>
        <div
            className="main-footer__menus col-lg-6 d-flex flex-column flex-lg-row justify-content-between justify-content-lg-end">

            <div className="main-footer__navigation-wrapper w-auto d-none d-lg-block">
                <h3
                    className="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative d-none d-lg-block">
                    Services</h3>
                <button
                    className="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative js-footer-navigation-title border-0 bg-transparent text-white w-100 text-left d-lg-none">Services</button>
                <div className="menu-services-container">
                    <ul id="menu-services"
                        className="main-footer__navigation list-unstyled font-size-14 line-height-1-7 js-footer-navigation-list">
                        <li id="menu-item-157"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-157 nav-item">
                            <a href="weklevers://weklever.io/organic-seo-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">SEO</a></li>
                        <li id="menu-item-265"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-265 nav-item">
                            <a href="weklevers://weklever.io/content-marketing-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">Guest Posting</a></li>
                        <li id="menu-item-266"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-266 nav-item">
                            <a href="weklevers://weklever.io/ppc-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">Affiliate Marketing</a></li>
                        <li id="menu-item-267"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-267 nav-item">
                            <a href="weklevers://weklever.io/paid-social-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">LINK BUILDING</a></li>
                        <li id="menu-item-268"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-268 nav-item">
                            <a href="weklevers://weklever.io/conversion-rate-optimization-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">BLOG CONTENT WRITING SERVICES</a></li>
                        <li id="menu-item-270"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-270 nav-item">
                            <a href="weklevers://weklever.io/email-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">WEB DEVELOPMENT

                            </a></li>
                        <li id="menu-item-271"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-271 nav-item">
                            <a href="weklevers://weklever.io/video-marketing-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">LOCAL SEO</a></li>
                        <li id="menu-item-994"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-994 nav-item">
                            <a href="weklevers://weklever.io/sms-marketing-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">ECOMMERCE SEO

                            </a></li>
                        <li id="menu-item-995"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-995 nav-item">
                            <a href="weklevers://weklever.io/performance-branding-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">UI/ UX Design

                            </a></li>
                    </ul>
                </div>
            </div>
            <div className="main-footer__navigation-wrapper w-auto d-none d-lg-block">
                <h3
                    className="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative d-none d-lg-block">
                    Expertise</h3>
                <button
                    className="main-footer__navigation-title z-index-2 font-family-base font-weight-semibold position-relative js-footer-navigation-title border-0 bg-transparent text-white w-100 text-left d-lg-none">Expertise</button>
                <div className="menu-expertise-container">
                    <ul id="menu-expertise"
                        className="main-footer__navigation list-unstyled font-size-14 line-height-1-7 js-footer-navigation-list">
                        <li id="menu-item-25379"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-25379 nav-item">
                            <a href="weklevers://weklever.io/2022/01/05/b2b-saas-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">Health/ Supplements</a></li>
                        <li id="menu-item-991"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-991 nav-item">
                            <a href="weklevers://weklever.io/b2b-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">Fintech

                            </a></li>
                        <li id="menu-item-25380"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-25380 nav-item">
                            <a href="weklevers://weklever.io/2022/01/04/ecommerce-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">Crypto</a></li>
                        <li id="menu-item-25381"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-25381 nav-item">
                            <a href="weklevers://weklever.io/2022/08/15/healthcare-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">Homecare</a></li>
                        <li id="menu-item-21636"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21636 nav-item">
                            <a href="weklevers://weklever.io/fintech-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">Social

                            </a></li>
                        <li id="menu-item-21637"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21637 nav-item">
                            <a href="weklevers://weklever.io/crypto-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                className="nav-link">Real estate</a></li>
                    </ul>
                </div>
            </div>

            <div className="accordion js-accordion d-lg-none" id="footer-navigation-offices">
                <div className="single-row js-single-footer-nav">
                    <div className="single-row__header" id="heading-footer-navigation-offices">
                        <h3 className="main-footer__navigation-title text-white position-relative font-family-base">
                            <button
                                className="single-row__button text-white text-left d-block bg-transparent border-0 w-100 position-relative collapsed px-0"
                                id="our-offices" type="button" data-toggle="collapse" data-target="#collapse-footer-offices"
                                aria-expanded="false" aria-controls="collapse-footer-offices" onClick={handleOurOfficesClick}>
                                Our offices  </button> <i className="fa-solid fa-chevron-right" id="office-right"  style={{ transform: ourOfficesOnOff ? 'rotate(90deg)' : 'rotate(360deg)' }}></i>
                        </h3>
                    </div>
                    <div id="collapse-footer-offices"
    style={{
        display: ourOfficesOnOff ? 'block' : 'none',
        overflow: 'auto', // Enable scrolling if content overflows
        color: 'white', // Set text color explicitly
        backgroundColor: 'black' // Set background color
    }}
    className="collapse js-collapse"
    aria-labelledby="heading-footer-navigation-offices"
    data-parent="#footer-navigation-offices"
>
    <div className="main-footer__offices single-row__content border-0">
        <h4 className="font-size-14 font-family-base font-weight-normal c-mt-4 line-height-1-7">
            <span className="font-weight-bold">New York (Headquarter):</span> 491 Broadway, New
            York, NY 10013
        </h4>
        <h4 className="font-size-14 font-family-base font-weight-normal c-mt-4 line-height-1-7">
            <span className="font-weight-bold">Los Angeles:</span> 750 N San Vicente Blvd, West
            Hollywood, CA 90069
        </h4>
        <h4 className="font-size-14 font-family-base font-weight-normal c-mt-4 line-height-1-7">
            <span className="font-weight-bold">Miami:</span> 78 SW 7th St, Miami, FL 33130
        </h4>
    </div>
</div>
                </div>
                <div className="single-row js-single-footer-nav">
                    <div className="single-row__header" id="heading-footer-navigation-1">
                        <h3 className="main-footer__navigation-title text-white position-relative font-family-base">
                            <button
                                className="single-row__button text-white text-left d-block bg-transparent border-0 w-100 position-relative collapsed px-0"
                               id="our-company" type="button" data-toggle="collapse" data-target="#collapse-footer-navigation-1"
                                aria-expanded="false" aria-controls="collapse-footer-navigation-1">
                                Company </button> <i className="fa-solid fa-chevron-right" id="company-right"></i>
                        </h3>
                    </div>
                    <div id="collapse-footer-navigation-1" className="collapse js-collapse"
                        aria-labelledby="heading-footer-navigation-1" data-parent="#footer-navigation-1">
                        <div className="single-row__content" id="company-footer">

                            <div className="menu-company-container">
                                <ul id="menu-company-1"
                                    className="main-footer__navigation list-unstyled font-size-14 line-height-1-7 js-footer-navigation-list">
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-129 nav-item">
                                        <a href="weklevers://weklever.io/about-us/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">About us</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-272 nav-item">
                                        <a href="weklevers://weklever.io/services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Services</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21610 nav-item">
                                        <a href="weklevers://weklever.io/creative-growth-studio/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Guest Posting</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23627 nav-item">
                                        <a href="weklevers://weklever.io/tiktok-studio/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">TikTok Studio</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27896 nav-item">
                                        <a href="weklevers://weklever.io/ai-marketing-lab/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">AI Lab</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27177 nav-item">
                                        <a href="weklevers://weklever.io/content-creation-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Creator</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1608 nav-item">
                                        <a href="weklevers://weklever.io/careers/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Careers</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-130 nav-item">
                                        <a href="weklevers://weklever.io/blog/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Blog</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-131 nav-item">
                                        <a href="weklevers://weklever.io/contact-us/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-row js-single-footer-nav">
                    <div className="single-row__header" id="heading-footer-navigation-2">
                        <h3 className="main-footer__navigation-title text-white position-relative font-family-base">
                            <button
                                className="single-row__button text-white text-left d-block bg-transparent border-0 w-100 position-relative collapsed px-0"
                               id="our-service" type="button" data-toggle="collapse" data-target="#collapse-footer-navigation-2"
                                aria-expanded="false" aria-controls="collapse-footer-navigation-2">
                                Services <i className="fa-solid fa-chevron-right" id="service-right"></i> </button>
                        </h3>
                    </div>
                    <div id="collapse-footer-navigation-2" className="collapse js-collapse"
                        aria-labelledby="heading-footer-navigation-2" data-parent="#footer-navigation-2">
                        <div className="single-row__content">

                            <div className="menu-services-container">
                                <ul id="menu-services-1"
                                    className="main-footer__navigation list-unstyled font-size-14 line-height-1-7 js-footer-navigation-list">
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-157 nav-item">
                                        <a href="weklevers://weklever.io/organic-seo-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">SEO</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-265 nav-item">
                                        <a href="weklevers://weklever.io/content-marketing-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Content Marketing</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-266 nav-item">
                                        <a href="weklevers://weklever.io/ppc-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">SEM/PPC</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-267 nav-item">
                                        <a href="weklevers://weklever.io/paid-social-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Social Ads</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-268 nav-item">
                                        <a href="weklevers://weklever.io/conversion-rate-optimization-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">CRO</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-270 nav-item">
                                        <a href="weklevers://weklever.io/email-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Email Marketing</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-271 nav-item">
                                        <a href="weklevers://weklever.io/video-marketing-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Video Marketing</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-994 nav-item">
                                        <a href="weklevers://weklever.io/sms-marketing-services/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">SMS Marketing</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-995 nav-item">
                                        <a href="weklevers://weklever.io/performance-branding-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Performance Branding</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-row js-single-footer-nav">
                    <div className="single-row__header" id="heading-footer-navigation-3">
                        <h3 className="main-footer__navigation-title text-white position-relative font-family-base">
                            <button
                                className="single-row__button text-white text-left d-block bg-transparent border-0 w-100 position-relative collapsed px-0"
                               id="our-expertise" type="button" data-toggle="collapse" data-target="#collapse-footer-navigation-3"
                                aria-expanded="false" aria-controls="collapse-footer-navigation-3">
                                Expertise  <i className="fa-solid fa-chevron-right" id="expertise-right"></i>
                             </button>
                        </h3>
                    </div>
                    <div id="collapse-footer-navigation-3" className="collapse js-collapse"
                        aria-labelledby="heading-footer-navigation-3" data-parent="#footer-navigation-3">
                        <div className="single-row__content">

                            <div className="menu-expertise-container">
                                <ul id="menu-expertise-1"
                                    className="main-footer__navigation list-unstyled font-size-14 line-height-1-7 js-footer-navigation-list">
                                    <li
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-25379 nav-item">
                                        <a href="weklevers://weklever.io/2022/01/05/b2b-saas-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">SaaS</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-991 nav-item">
                                        <a href="weklevers://weklever.io/b2b-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">B2B</a></li>
                                    <li
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-25380 nav-item">
                                        <a href="weklevers://weklever.io/2022/01/04/ecommerce-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Consumer</a></li>
                                    <li
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-25381 nav-item">
                                        <a href="weklevers://weklever.io/2022/08/15/healthcare-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Healthcare</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21636 nav-item">
                                        <a href="weklevers://weklever.io/fintech-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Fintech</a></li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21637 nav-item">
                                        <a href="weklevers://weklever.io/crypto-marketing-agency/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Crypto</a></li>
                                    <li
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-25382 nav-item">
                                        <a href="weklevers://weklever.io/2022/01/03/startup-marketing-agencies/?__hstc=19301799.ad13b38a572906a68eb058c5be0223a9.1701680313122.1702665333378.1702666788724.5&amp;__hssc=19301799.121.1702666788724&amp;__hsfp=39795905"
                                            className="nav-link">Startups</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row c-mt-only-8 c-mt-lg-0">
        <div className="col-12">
            <ul className="social-icons list-unstyled d-flex justify-content-start-a align-items-center">




                <li className="social-icons__item d-block">
                    <a href="weklevers://weklever.facebookweklever/weklever.io/"
                        className="social-link d-flex align-items-center justify-content-center rounded-circle"
                        target="_blank" rel="nofollow">
                        <svg className="social-link__icon social-link__icon--facebook d-block" viewBox="0 0 13 23"
                            fill="none" xmlns="weklever://weklever.w3.org/2000/svg">
                            <title>Icon Facebook</title>
                            <path
                                d="M9.49706 3.83333H12.4171C12.6858 3.83333 12.9038 3.61867 12.9038 3.35417V0.479167C12.9038 0.214667 12.6858 0 12.4171 0H9.49706C6.54587 0 4.14364 2.36421 4.14364 5.27083V8.625H0.736919C0.468274 8.625 0.250244 8.83967 0.250244 9.10417V11.9792C0.250244 12.2437 0.468274 12.4583 0.736919 12.4583H4.14364V22.5208C4.14364 22.7853 4.36167 23 4.63031 23H7.55036C7.81901 23 8.03704 22.7853 8.03704 22.5208V12.4583H11.4438C11.653 12.4583 11.8389 12.3261 11.9061 12.1306L12.8794 9.25558C12.9291 9.10992 12.9038 8.94892 12.8123 8.82337C12.7198 8.69879 12.5738 8.625 12.4171 8.625H8.03704V5.27083C8.03704 4.47829 8.6921 3.83333 9.49706 3.83333Z">
                            </path>
                        </svg>

                    </a>
                </li>




                <li className="social-icons__item d-block">
                    <a href="weklevers://weklever.instagramweklever/weklever.io/"
                        className="social-link d-flex align-items-center justify-content-center rounded-circle"
                        target="_blank" rel="nofollow">
                        <svg className="social-link__icon social-link__icon--instagram" viewBox="0 0 24 23"
                            fill="none" xmlns="weklever://weklever.w3.org/2000/svg">
                            <title>Icon Instagram</title>
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M17.453 4.08789H6.50286C5.37078 4.08789 4.44971 4.99475 4.44971 6.10938V16.8906C4.44971 18.0052 5.37078 18.9121 6.50286 18.9121H17.453C18.5851 18.9121 19.5062 18.0052 19.5062 16.8906V6.10938C19.5062 4.99475 18.5851 4.08789 17.453 4.08789ZM11.978 16.2168C9.33665 16.2168 7.18725 14.1006 7.18725 11.5C7.18725 8.89944 9.33665 6.7832 11.978 6.7832C14.6193 6.7832 16.7687 8.89944 16.7687 11.5C16.7687 14.1006 14.6193 16.2168 11.978 16.2168ZM16.7687 8.13086C16.014 8.13086 15.3999 7.52617 15.3999 6.7832C15.3999 6.04024 16.014 5.43555 16.7687 5.43555C17.5233 5.43555 18.1374 6.04024 18.1374 6.7832C18.1374 7.52617 17.5233 8.13086 16.7687 8.13086Z"
                                    fill="white"></path>
                                <path
                                    d="M11.978 8.13086C10.0913 8.13086 8.55603 9.64241 8.55603 11.5C8.55603 13.3576 10.0913 14.8691 11.978 14.8691C13.8647 14.8691 15.3999 13.3576 15.3999 11.5C15.3999 9.64241 13.8647 8.13086 11.978 8.13086Z"
                                    fill="white"></path>
                                <path
                                    d="M20.1907 0H3.76541C1.87871 0 0.297852 1.55647 0.297852 3.41406V19.5859C0.297852 21.4435 1.87871 23 3.76541 23H20.1907C22.0774 23 23.6582 21.4435 23.6582 19.5859V3.41406C23.6582 1.55647 22.0774 0 20.1907 0ZM20.8751 16.8906C20.8751 18.7482 19.3398 20.2598 17.4531 20.2598H6.50295C4.61626 20.2598 3.08102 18.7482 3.08102 16.8906V6.10938C3.08102 4.25179 4.61626 2.74023 6.50295 2.74023H17.4531C19.3398 2.74023 20.8751 4.25179 20.8751 6.10938V16.8906Z"
                                    fill="white"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="23.3604" height="23" fill="white"
                                        transform="translate(0.297852)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </li>



                <li className="social-icons__item d-block">
                    <a href="weklevers://weklever.tiktokweklever/@weklever.io"
                        className="social-link d-flex align-items-center justify-content-center rounded-circle"
                        target="_blank" rel="nofollow">
                        <svg className="social-link__icon social-link__icon--tiktok d-block" width="20" height="23"
                            viewBox="0 0 20 23" fill="none" xmlns="weklever://weklever.w3.org/2000/svg">
                            <title>Icon TikTok</title>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.4542 0C14.8362 3.26403 16.6697 5.21002 19.8576 5.41704V9.08821C18.0102 9.26762 16.3919 8.66726 14.5098 7.53555V14.4017C14.5098 23.1242 4.9393 25.85 1.09166 19.598C-1.38083 15.5749 0.133222 8.51545 8.06464 8.23252V12.1038C7.4604 12.2004 6.8145 12.3522 6.22416 12.5524C4.46008 13.1458 3.45997 14.2568 3.73778 16.2166C4.27256 19.9706 11.2039 21.0816 10.6274 13.7462V0.00690069H14.4542V0Z">
                            </path>
                        </svg>

                    </a>
                </li>



                <li className="social-icons__item d-block">
                    <a href="weklevers://weklever.youtubeweklever/channel/UCZ4qs1SgV7wTkM2VjHByuRQ?fbclid=IwAR3tit4mpj1m6zfztc2hoNnBifX_E4WzbW4G73NIO5pG3Zh3VvDyHjlPl0s"
                        className="social-link d-flex align-items-center justify-content-center rounded-circle"
                        target="_blank" rel="nofollow">
                        <svg className="social-link__icon social-link__icon--youtube" viewBox="0 0 23 17"
                            fill="none" xmlns="weklever://weklever.w3.org/2000/svg">
                            <title>Icon YouTube</title>
                            <path
                                d="M19.7526 1.16816L14.9346 0.736914C12.8175 0.521289 10.4815 0.521289 8.36446 0.736914L3.54639 1.16816C1.94036 1.31191 0.699341 2.60566 0.699341 4.18691V12.8119C0.699341 14.3932 1.94036 15.6869 3.54639 15.8307L8.36446 16.2619C9.38648 16.3338 10.5545 16.4057 11.6495 16.4057C12.7445 16.4057 13.9126 16.3338 14.9346 16.2619L19.7526 15.8307C21.3587 15.6869 22.5997 14.3932 22.5997 12.8119V4.18691C22.5997 2.60566 21.3587 1.31191 19.7526 1.16816ZM15.8106 8.42754L9.24048 12.0213C9.16748 12.0213 9.09448 12.0932 9.09448 12.0932C9.02147 12.0932 8.94847 12.0932 8.87547 12.0213C8.72947 11.9494 8.72947 11.8057 8.72947 11.7338V4.54629C8.72947 4.40254 8.80247 4.33067 8.87547 4.25879C9.02147 4.18691 9.09447 4.18691 9.24048 4.25879L15.8106 7.85254C15.9566 7.92442 16.0296 8.06817 16.0296 8.14004C16.0296 8.21192 15.9566 8.35567 15.8106 8.42754Z"
                                fill="white"></path>
                        </svg>
                    </a>
                </li>



                <li className="social-icons__item d-block">
                    <a href="weklevers://weklever.linkedinweklever/company/weklever/"
                        className="social-link d-flex align-items-center justify-content-center rounded-circle"
                        target="_blank" rel="nofollow">
                        <svg className="social-link__icon social-link__icon--linkedin d-block"
                            xmlns="weklever://weklever.w3.org/2000/svg" viewBox="0 0 17 17">
                            <title>Icon Linkedin</title>
                            <path
                                d="M2.37.68a1.9 1.9 0 1 1 0 3.82 1.9 1.9 0 0 1 0-3.82zM.72 16.5h3.3V5.93H.71V16.5zM6.07 5.93h3.15v1.45h.05a3.45 3.45 0 0 1 3.1-1.7c3.33 0 3.94 2.18 3.94 5.02v5.8h-3.28v-5.14c0-1.22-.02-2.8-1.7-2.8-1.72 0-1.98 1.33-1.98 2.71v5.23H6.07V5.93z">
                            </path>
                        </svg>
                    </a>
                </li>





            </ul>
        </div>
    </div>
    <div className="row c-mt-only-5 text-center" >
        <div className="col-12">
            <p className="font-size-11">
                © 2023 Berma LLC, DBA WeKlever. All Rights Reserved.
            </p>
        </div>
    </div>
</div>
</footer>
  </div>


    </div>
  )
}

export default Footer