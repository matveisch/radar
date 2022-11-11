import React from 'react'
import { motion } from 'framer-motion'
import './CircleContact.css'
import telegram from '../../images/filled-telegram.svg'
import whatsapp from '../../images/whatsapp.svg'

const CircleContact = () => {
    return (
        <div className="circle-contact">
            <div className="circle-group">
                <motion.div
                    initial={{ rotate: 270, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 0.6 }}
                    className="upper-circle circle"
                ></motion.div>
                <div className="lower-circle circle"></div>
                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 0.6, delay: 0.3 }}
                    className="H1"
                >
                    Let's
                    <br />
                    Talk
                </motion.h1>
            </div>
            <div className="circle-group second-circle">
                <motion.div
                    initial={{ rotate: 270, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 0.6 }}
                    className="upper-circle circle"
                ></motion.div>
                <div className="lower-circle circle"></div>
                <div className="paragraphs">
                    <motion.p
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            ease: 'easeOut',
                            duration: 0.9,
                            delay: 0.6,
                        }}
                        className="paragraph"
                    >
                        email@gmail.com
                    </motion.p>
                    <motion.p
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            ease: 'easeOut',
                            duration: 0.9,
                            delay: 0.4,
                        }}
                        className="paragraph"
                    >
                        053-123-4567
                    </motion.p>
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            ease: 'easeOut',
                            duration: 0.9,
                            delay: 0.2,
                        }}
                        className="icons"
                    >
                        <img src={telegram} alt="icon" />
                        <img src={whatsapp} alt="icon" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default CircleContact
