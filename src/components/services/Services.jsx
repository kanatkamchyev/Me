import React, { useEffect, useState } from 'react'
import { VscThreeBars } from 'react-icons/vsc'
import { FaRegUser, FaRegBell } from 'react-icons/fa'

import './Services.scss'
import { animated } from 'react-spring';
import styled from 'styled-components';
import { Servic } from './Servic';


const ShiningText = styled(animated.h2)`
// Стили для светящегося текста
text-shadow: ${props => (props.isShining ? '10px 0px 10px #f9004d' : 'none')};
`;


const datas = [
    {
        id:1,
        title:'Integration & Support',
        describe:'Seamlessly integrate your web applications with our end-to-end development services. We provide ongoing support, ensuring your digital solutions remain efficient and up-to-date.',
        svg:<VscThreeBars />
    },

    {
        id:2,
        title:'Web Development',
        describe:'Create a powerful online presence with our expert web development. We design and build modern, responsive websites and applications that align with your business goals.',
        svg:<FaRegUser />
    },

    {
        id:3,
        title:'Optimization & Audits',
        describe: "Ensure your website's peak performance. Our optimization services enhance speed and SEO, while comprehensive audits identify and address potential issues.",
        svg: <FaRegBell />
    },
]

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
                        {
                            datas.map((item) => <Servic item = {item}/>)
                        }
                        {/* <div className={activeCard ? "Services__card active" : "Services__card"}>
                            <VscThreeBars />
                            <h5>Integration & Support</h5>
                            <div className="pra">
                                {
                                    activeCard ?
                                        <p>
                                            Seamlessly integrate your web applications with our end-to-end development services. We provide ongoing support, ensuring your digital solutions remain efficient and up-to-date.
                                        </p>
                                        :
                                        <p>
                                            {` Seamlessly integrate your web applications with our end-to-end development services. We provide ongoing support, ensuring your digital solutions remain efficient and up-to-date.`.substr(0, 120) + '...'}
                                        </p>
                                }
                                <p style={{ textAlign: 'center' }} onClick={() => setActiveCard(!activeCard)}>
                                    <a className='button' href="" onClick={(e) => e.preventDefault()}> Read More </a>
                                </p>
                            </div>
                        </div>
                        <div className={activeCard ? "Services__card active" : "Services__card"}>
                            <FaRegUser />
                            <h5>Web Development</h5>
                            <div className="pra">
                                {
                                    activeCard ?
                                        <p>
                                            Create a powerful online presence with our expert web development. We design and build modern, responsive websites and applications that align with your business goals.
                                        </p>
                                        :

                                        <p>
                                            {'Create a powerful online presence with our expert web development. We design and build modern, responsive websites and applications that align with your business goals.'.substr(0, 120) + "..."}
                                        </p>
                                }
                                <p style={{ textAlign: 'center' }}>
                                    <a className='button' href="#"> Read More </a>
                                </p>
                            </div>
                        </div>
                        <div className={activeCard ? "Services__card active" : "Services__card"}>
                            <FaRegBell />
                            <h5>Optimization & Audits</h5>
                            <div className="pra">
                                {
                                    activeCard ?

                                        <p>
                                            Ensure your website's peak performance. Our optimization services enhance speed and SEO, while comprehensive audits identify and address potential issues.
                                        </p>
                                        :
                                        <p>
                                            {"Ensure your website's peak performance. Our optimization services enhance speed and SEO, while comprehensive audits identify and address potential issues.".substr(0, 120) + "..."}
                                        </p>
                                }
                                <p style={{ textAlign: 'center' }}>
                                    <a className='button' href="#"> Read More </a>
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}
