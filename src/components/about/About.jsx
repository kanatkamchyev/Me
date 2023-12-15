import React, { useState, useEffect } from 'react';
import ya from '../../assets/images/ about.png';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import './About.scss';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const ShiningText = styled(animated.h2)`
    // Стили для светящегося текста
`;

export const About = () => {
    const [isShining, setIsShining] = useState(false);

    const [text] = useTypewriter({
        words: ['I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their device.'],
        loop: false,
        typeSpeed: 50,
        deleteSpeed: 80
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setIsShining(true);
            setTimeout(() => {
                setIsShining(false);
            }, 1000);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='About' id='about'>
            <div className="container">
                <div className="About__inside">
                    <div className="About__inner">
                        <div className="card__item">
                            <div className="card__img">
                                <img src={ya} alt="" />
                            </div>
                        </div>
                        <div className="About__text">
                            <ShiningText style={isShining ? { textShadow: '5px 0px 10px #f9004d' } : {}}>
                                About Me
                            </ShiningText>
                            <h5>Developer</h5>
                            <p>
                                {text}
                                <span>
                                    <Cursor cursorStyle='|'/>
                                </span>
                            </p>
                            <button type='button'><a href="https://t.me/kamchyev">Let's Talk</a> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};