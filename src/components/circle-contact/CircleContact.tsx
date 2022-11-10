import React from 'react'
import './CircleContact.css'
import telegram from '../../images/filled-telegram.svg'
import whatsapp from '../../images/whatsapp.svg'

const CircleContact = () => {
    return (
        <div className="circle-contact">
            <div className="circle-group">
                <div className="upper-circle circle"></div>
                <div className="lower-circle circle"></div>
                <h1 className="H1">
                    Let's
                    <br />
                    Talk
                </h1>
            </div>
            <div className="circle-group second-circle">
                <div className="upper-circle circle"></div>
                <div className="lower-circle circle"></div>
                <div className="paragraphs">
                    <p className="paragraph">email@gmail.com</p>
                    <p className="paragraph">053-123-4567</p>
                    <div className="icons">
                        <img src={telegram} alt="icon" />
                        <img src={whatsapp} alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CircleContact
