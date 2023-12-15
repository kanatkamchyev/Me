import React, { useEffect, useState } from 'react'
import man from '../../assets/images/kaku.png'
import mee from '../../assets/images/mee.png'
import {RiMenu3Fill} from 'react-icons/ri'
import {IoClose} from 'react-icons/io5'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './Header.scss'

export const Header = () => {

    const [burger, setBurger] = useState(false);

    useEffect(() => {
        if (burger) {
          document.body.classList.add('active-body-overflow');
        } else {
          document.body.classList.remove('active-body-overflow');
        }
      }, [burger]);

    const [text] = useTypewriter({
        words:['Web Developer.', 'Web Developer.', 'Web Developer.'],
        loop:{},
        typeSpeed: 120,
        deleteSpeed: 80
    })

    const handleScrollToHome = (event) => {
        event.preventDefault();
        const templatesComponent = document.getElementById('Content'); 
        if (templatesComponent) {
            templatesComponent.scrollIntoView({ behavior: 'smooth' });
            setBurger(false) ;
        }
    };

    const handleScrollToTemplates = (event) => {
        event.preventDefault();
        const templatesComponent = document.getElementById('about'); 
        if (templatesComponent) {
            templatesComponent.scrollIntoView({ behavior: 'smooth' });
            setBurger(false) ;
        }
    };

    const handleScrollToServices = (event) => {
        event.preventDefault();
        const templatesComponent = document.getElementById('services'); 
        if (templatesComponent) {
            templatesComponent.scrollIntoView({ behavior: 'smooth' }); 
            setBurger(false) ;

        }
    };

    const handleScrollToSkills = (event) => {
        event.preventDefault();
        const templatesComponent = document.getElementById('skills'); 
        if (templatesComponent) {
            templatesComponent.scrollIntoView({ behavior: 'smooth' });
            setBurger(false) ;

        }
    };

    const handleScrollToContact = (event) => {
        event.preventDefault();
        const templatesComponent = document.getElementById('contact'); 
        if (templatesComponent) {
            templatesComponent.scrollIntoView({ behavior: 'smooth' }); 
            setBurger(false) ;
        }
    };

    return (
        <div className='Header'>
            <div className="container">
                <div className={burger ? "Header__inside active" : 'Header__inside'}>
                    <nav>
                        <h2 className='logo'>
                            Portfo<span>lio</span>
                        </h2>
                        <ul>
                            <li><a href="#" onClick={handleScrollToHome}>Home</a></li>
                            <li><a href="#" onClick={handleScrollToTemplates}>About Me</a></li>
                            <li><a href="#" onClick={handleScrollToServices}>Services</a></li>
                            <li><a href="#" onClick={handleScrollToSkills}>Skills</a></li>
                            <li><a href="#" onClick={handleScrollToContact}>Contact</a></li>
                        </ul>
                        <a href="" className='btn'>Subscribe</a>
                        <div className={burger ? "Heder__burger active" : "Heder__burger"} onClick={() => setBurger(!burger)}>
                           {
                            burger?
                            <IoClose/>
                            :
                            <RiMenu3Fill/>
                           }
                        </div>
                    </nav>
                </div>
                <div className="Content__inside">
                    <div className="left">
                        <h4>Hello, my name is</h4>
                        <h1>Kamchyev <span>Kanat</span> </h1>
                        <h3>I'm a <span>{text}</span> <span className='cursor'><Cursor cursorStyle='|'/></span> </h3>
                        <div className="newslatter">
                            <form action="">
                                <input type="email" name='email' id='email' placeholder='Enter Your Email' />
                                <input type="submit" value="Lets Start" />
                            </form>
                        </div>
                    </div>
                    <div className='Content__me' id='Content'>
                        <div className="blur">
                            
                        </div>
                        <img src={mee} alt="" />
                    </div>
                    <div className="bac">
                        <img src={man} alt="" />
                    </div>
                    <div className="bac2">

                    </div>
                </div>
            </div>
        </div>
    )
}
