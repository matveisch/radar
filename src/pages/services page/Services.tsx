import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { isTemplateMiddle } from 'typescript'
import ServicesBtn from '../../components/servicesBtn/ServicesBtn'
import './Services.css'
const servicesArr = [
    {
        id: 0,
        name: 'Social',
        img: 'telegram-circle',
        content:
            '- Телеграмм - Инстаграмм - Фейсбук - Твиттер - ВКонтакте - Ютуб Ютуб Ютуб Ютуб Ютуб Ютуб Ютуб',
    },
    {
        id: 1,
        name: 'Web',
        img: 'Web',
        content: '',
    },
    {
        id: 2,
        name: 'TV',
        img: 'Television',
        content: '',
    },
    {
        id: 3,
        name: 'Radio',
        img: 'Radio',
        content:
            '-  Cетевое размещение - Точечное размещение - Прямая радиореклама - Интеграция в эфир - Интернет радио - Аудио продакшн',
    },
    {
        id: 4,
        name: 'Creatives',
        img: 'Creative',
        content: '',
    },
    { id: 5, name: '3D', img: '3d-box', content: '' },
    { id: 6, name: 'DOOH', img: 'Advertise', content: '' },
]

const Services = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [checkedService, setCheckedService] = useState(servicesArr[0])

    const location = useLocation()

    useEffect(() => {
        try {
            const { checkedServiceIndex } = location.state
            console.log(checkedServiceIndex)
            setIsOpen(false)
            setCheckedService(servicesArr[checkedServiceIndex])
        } catch (e) {
            // No State
        }
    }, [])

    const handleWheel = (e: any) => {
        console.log(e)
        if (e.deltaY > 0) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    const handleClick = (index: number) => {
        setCheckedService(servicesArr[index])
        setIsOpen(false)
    }

    return (
        <div id="services-main-wrapper" onWheel={handleWheel}>
            <div id="services-btn-flex">
                {servicesArr.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                index == checkedService.id && !isOpen
                                    ? 'checked-service-btn services-btn'
                                    : 'services-btn'
                            }
                            onClick={() => handleClick(index)}
                        >
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
                        Need help?
                    </motion.h4>
                    <Link to="/contact" id="contact-card-btn" className="link">
                        Ask Us
                    </Link>
                </motion.div>
            </div>
            <motion.div
                animate={{ opacity: isOpen ? 0 : 1 }}
                style={{ visibility: isOpen ? 'hidden' : 'visible' }}
            >
                <p
                    style={{ color: 'white', fontSize: '60px' }}
                    className="parapgraph"
                >
                    {checkedService.name}
                </p>
                <p
                    style={{ color: 'white', fontSize: '60px' }}
                    className="parapgraph"
                >
                    {checkedService.content}
                </p>
            </motion.div>
        </div>
    )
}

export default Services
