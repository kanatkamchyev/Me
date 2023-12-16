import React, { useState } from 'react'

export const Servic = ({ item }) => {
    const [activeCard, setActiveCard] = useState(false)

    const substredDescribe = item.describe.substr(0, 105)
    return (
        <div className={activeCard ? "Services__card active" : "Services__card"}>
            {
                activeCard ? null : item.svg
            }
            {
                activeCard ? null : <h5>{item.title}</h5>
            }
            <div className="pra">
                <div className="pra__side">

                    {
                        activeCard ?
                            <p>
                                {item.describe}
                            </p>
                            :
                            <p>
                                {`${substredDescribe}  . . .`}
                            </p>
                    }
                    <p style={{ textAlign: 'center' }} onClick={() => setActiveCard(!activeCard)}>
                        {
                            activeCard ?
                                <a className='button' href="" onClick={(e) => e.preventDefault()}> To Back </a>
                                :
                                <a className='button' href="" onClick={(e) => e.preventDefault()}> Read More </a>
                        }
                    </p>
                </div>
            </div>
        </div>

    )
}
