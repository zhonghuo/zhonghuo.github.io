import React, { useState, useEffect } from 'react'
import { links } from '../../Data'
import { FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'
import './header.css'
import { Link } from 'react-scroll'
import { animateScroll } from 'react-scroll'
import shapeOne from '../../assets/shape-1.png'

const getStorageTheme = () => {
    let theme = 'light-theme';
    if(localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState(getStorageTheme());

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    setScrollNav(scrolled > 80);
  };

  const toggleTheme = () => {
    if(theme === 'light-theme') {
        setTheme('dark-theme');
    }
    else {
        setTheme('light-theme');
    }
  };

  useEffect(() => {
    changeNav();
    window.addEventListener('scroll', changeNav)
    return () => {
        window.removeEventListener('scroll', changeNav);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', showMenu);
  }, [showMenu]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
        <nav className="nav">
            <Link to='/' onClick={scrollTop} className="nav__logo text-cs">
                Howard
            </Link>
            <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                <div className="nav__data">
                    <ul className="nav__list">
                        {links.map(({name, path}, index) => {
                            return (
                                <li className='nav__item' key={index}>
                                   <Link
                                     className='nav__link text-cs'
                                     to={path}
                                     smooth={true}
                                     hashSpy={true}
                                     offset={-150}
                                     duration={500}
                                     onClick={() => setShowMenu(!showMenu)}
                                   >
                                     {name}
                                   </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className='header__socials'>
                        <a href='https://youtu.be/dQw4w9WgXcQ?si=Y5xZ_6KzLzv-esif ' target="_blank" rel="noopener noreferrer" className='header__social-link'>
                            <FaInstagram />
                        </a>
                        <a href='https://youtu.be/9teMc4TBZ2E?si=Im7Gq9j0gm41DLlb' target="_blank" rel="noopener noreferrer" className='header__social-link'>
                            <FaDribbble />
                        </a>
                        <a href='https://zhonghuo.github.io/bookingui/' target="_blank" rel="noopener noreferrer"  className='header__social-link'>
                            <FaBehance />
                        </a>
                    </div>
                </div>
            </div>

            <div className="nav__btns">
                <div className="theme__toggler" onClick={toggleTheme}>
                    {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                </div>
                <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={() => setShowMenu(!showMenu)}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
