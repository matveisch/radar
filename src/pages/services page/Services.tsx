import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { isTemplateMiddle } from 'typescript'
import ServicesBtn from '../../components/servicesBtn/ServicesBtn'
import './Services.css'
const arr = [
    {
        name: 'Social',
        img: 'telegram-circle',
    },
    {
        name: 'Web',
        img: 'Web',
    },
    {
        name: 'TV',
        img: 'Television',
    },
    {
        name: 'Radio',
        img: 'Radio',
    },
    {
        name: 'Creatives',
        img: 'Creative',
    },
    {
        name: '3D Visuals',
        img: '3d-box',
    },
    {
        name: 'DOOH',
        img: 'Advertise',
    },
]

const Services = () => {
    const [isOpen, setIsOpen] = useState(true)

    const handleWheel = (e: any) => {
        //   console.log(e)
        if (e.deltaY > 0) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    const handleClick = (e: any) => {
        setIsOpen(false)
    }
    return (
        <div id="services-main-wrapper" onWheel={handleWheel}>
            <div id="services-btn-flex">
                {arr.map((item, index) => {
                    return (
                        <div className="services-btn" onClick={handleClick}>
                            <ServicesBtn
                                name={item.name}
                                image={item.img}
                                isOpen={isOpen}
                            />
                        </div>
                    )
                })}
                <motion.div
                    id="contact-card"
                    animate={{ height: isOpen ? '170px' : '60px' }}
                >
                    <motion.h4
                        id="title"
                        className="H4"
                        animate={{
                            height: isOpen ? '100px' : 0,
                            fontSize: isOpen ? '47px' : '34px',
                            marginTop: isOpen ? '20px' : 0,
                            opacity: isOpen ? 1 : 0,
                        }}
                        transition={{
                            default: {},
                            opacity: {
                                duration: 0,
                            },
                        }}
                    >
                        Let us help
                    </motion.h4>
                    <Link to="/contact" id="contact-card-btn" className="link">
                        Contact
                    </Link>
                </motion.div>
            </div>
            <div style={{ visibility: isOpen ? 'hidden' : 'visible' }}>
                <h1>Content</h1>
            </div>
        </div>
    )
}

export default Services
