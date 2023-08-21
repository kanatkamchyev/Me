import React, { useEffect, useState } from 'react'
import { VscThreeBars } from 'react-icons/vsc'
import { FaRegUser, FaRegBell } from 'react-icons/fa'

import './Services.scss'
import { animated } from 'react-spring';
import styled from 'styled-components';


const ShiningText = styled(animated.h2)`
// Стили для светящегося текста
text-shadow: ${props => (props.isShining ? '10px 0px 10px #f9004d' : 'none')};
`;

export const Services = () => {
    const [isShining, setIsShining] = useState(false);

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
        <div className='Services' id='services'>
            <div className="container">
                <div className="Services__inside">
                    <div className="Services__title">
                        <h2>
                        <ShiningText isShining={isShining}>Our Services</ShiningText>
                        </h2>
                    </div>
                    <div className="Services__box">
                        <div className="Services__card">
                            <VscThreeBars />
                            <h5>Web Development</h5>
                            <div className="pra">
                                <p>
                                    Every Website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.
                                </p>
                                <p style={{ textAlign: 'center' }}>
                                    <a className='button' href="#"> Read More </a>
                                </p>
                            </div>
                        </div>
                        <div className="Services__card">
                            <FaRegUser />
                            <h5>Web Development</h5>
                            <div className="pra">
                                <p>
                                    Every Website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.
                                </p>
                                <p style={{ textAlign: 'center' }}>
                                    <a className='button' href="#"> Read More </a>
                                </p>
                            </div>
                        </div>
                        <div className="Services__card">
                            <FaRegBell />
                            <h5>Web Development</h5>
                            <div className="pra">
                                <p>
                                    Every Website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.
                                </p>
                                <p style={{ textAlign: 'center' }}>
                                    <a className='button' href="#"> Read More </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
