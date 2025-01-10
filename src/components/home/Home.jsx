import React from 'react'
import profileImg from '../../assets/profile-img.png'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'
import NLP_HW3_NTHU_111062313 from '../../assets/NLP_HW3_NTHU_111062313.pdf'
import { FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa'
import './home.css'

const Home = () => {
  return <section className='home' id='home'>
    <div className='home__wrapper'>
        <div className='home__container container'>
            <p className='home__subtitle text-cs'>
                Hello, <span>My Name Is</span>
            </p>
            <h1 className='home__title text-cs'>
                <span>Howard</span>
            </h1>
            <p className='home__job'>
                <span className='text-cs'>I Am a</span> <b>CS Student</b>
            </p>

            <div className='home__img-wrapper'>
                <div className='home__banner'>
                    <img src={profileImg} alt='' className='home__profile'/>
                </div>

                <p className='home__data home__data-one'>
                    <span className='text-lg'>
                        0 <b>+</b>
                    </span>

                    <span className='text-sm text-cs'>
                        Years of <span>Experience</span>
                    </span>
                </p>

                <p className='home__data home__data-two'>
                    <span className='text-lg'>
                        0
                    </span>

                    <span className='text-sm text-cs'>
                        Completed <span>Projects</span>
                    </span>
                </p>

                <img src={shapeOne} alt='' className='shape shape__1'/>
                <img src={shapeTwo} alt='' className='shape shape__2'/>
                <img src={shapeTwo} alt='' className='shape shape__3'/>
            </div>

            <p className='home__text'>
                From Taiwan, Yunlin.
            </p>
            <div className='home__socials'>
                <a href='https://youtu.be/dQw4w9WgXcQ?si=Y5xZ_6KzLzv-esif ' target="_blank" rel="noopener noreferrer" className='home__social-link'>
                    <FaInstagram />
                </a>
                <a href='https://youtu.be/9teMc4TBZ2E?si=Im7Gq9j0gm41DLlb' target="_blank" rel="noopener noreferrer" className='home__social-link'>
                    <FaDribbble />
                </a>
                <a href='https://zhonghuo.github.io/bookingui/' target="_blank" rel="noopener noreferrer"  className='home__social-link'>
                    <FaBehance />
                </a>
            </div>

            <div className='home__btns'>
                <a  download='' href={NLP_HW3_NTHU_111062313} className='btn text-cs'>
                    自然語言處理作業三
                </a>
                <a href='#skills' className='hero__link text-cs'>
                    My Skills
                </a>
            </div>
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape"/>
        </div>
    </div>
  </section>
}

export default Home
