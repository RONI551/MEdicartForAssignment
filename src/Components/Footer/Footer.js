import React from 'react';
import'./Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faPhone,faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faGooglePlusG, faGithub,faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import logo from '../../images/medicart carousel image/logo2.jpg'

const Footer = () => {
    return (
        <div className='m-auto w-auto'>
     
        <footer class="footer-section">
        <div>
            <div className="footer-cta pt-5 pb-5">
                <div class="row" className='flex'>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                        <FontAwesomeIcon className='bg-white p-2 rounded ml-52' icon={faLocationDot}></FontAwesomeIcon>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>111Boulevard, sville, FYC</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                           <FontAwesomeIcon className='bg-white p-2 rounded ml-4' icon={faPhone}></FontAwesomeIcon>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <FontAwesomeIcon className='bg-white p-2 rounded ml-4' icon={faEnvelopeOpen}></FontAwesomeIcon>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>royroni780@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row" className='flex  items-center ml-52'>
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src={logo} class="img-fluid" alt="logo"/></a>
                            </div>
                            <div class="footer-text font-serif text-slate-00 mr-4 text-left ">
                                <p> To ensure good health: eat lightly, breathe deeply, live moderately, cultivate <br/> cheerfulness, and maintain an interest in life </p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/profile.php?id=100010970131101"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="/#"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="/#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                                <a href="https://github.com/RONI551"><FontAwesomeIcon icon={faGithub} /></a>
                                <a href="/#"><i class="fab faTwitter twitter-bg"></i></a>
                                <a href="/#"><i class="fab faGooglePlusG google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="/#">Home</a></li>
                                <li><a href="/#">about</a></li>
                                <li><a href="/#">services</a></li>
                                <li><a href="/#">portfolio</a></li>
                                <li><a href="/#">Contact</a></li>
                                <li><a href="/#">About us</a></li>
                                <li><a href="/#">Our Services</a></li>
                                <li><a href="/#">Expert Team</a></li>
                                <li><a href="/#">Contact us</a></li>
                                <li><a href="/#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribee-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><FontAwesomeIcon className=' text-2xl font-bold ' icon={faTelegramPlane} /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <a href="https://www.fiverr.com/users/ronii45">MediCare</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="/#">Home</a></li>
                                <li><a href="/#">Terms</a></li>
                                <li><a href="/#">Privacy</a></li>
                                <li><a href="/#">Policy</a></li>
                                <li><a href="/#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
        </div>
    );
};

export default Footer;