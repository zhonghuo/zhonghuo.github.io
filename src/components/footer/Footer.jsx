import React from 'react'
import { FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className="footer__socials">
                <a href='' className="footer__social-link">
                    <FaInstagram/>
                </a>

                <a href='' className="footer__social-link">
                    <FaDribbble/>
                </a>

                <a href='' className="footer__social-link">
                    <FaBehance/>
                </a>
            </div>
            <p className="footer__copyright text-cs"> &copy; 2024 <span>Luique</span> . All Rights Reserved</p>
            <p className="footer__copyright text-cs">Developed by <span>Howard</span></p>
        </div>
    </footer>
  )
}

export default Footer
