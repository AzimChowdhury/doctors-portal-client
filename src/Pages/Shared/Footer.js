import React from 'react';
import footerBg from '../../assets/images/footer.png';


const Footer = () => {
    return (
        <div className='' style={{ backgroundImage: `url(${footerBg})`, width: '100%' }} >
            <footer class="footer p-16 px-36  text-accent">
                <div>
                    <span class="footer-title">Services</span>
                    <p class="link link-hover">Branding</p>
                    <p class="link link-hover">Design</p>
                    <p class="link link-hover">Marketing</p>
                    <p class="link link-hover">Advertisement</p>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <p class="link link-hover">About us</p>
                    <p class="link link-hover">Contact</p>
                    <p class="link link-hover">Jobs</p>
                    <p class="link link-hover">Press kit</p>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <p class="link link-hover">Terms of use</p>
                    <p class="link link-hover">Privacy policy</p>
                    <p class="link link-hover">Cookie policy</p>
                </div>
            </footer>
            <footer class="footer footer-center p-4 mb-4 text-accent">
                <div>
                    <p>Copyright © 2022 - All right reserved </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;