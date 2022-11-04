import React from 'react'
import './ServiceCard.css'
import arrow from '../../images/Learn-more-arrow.svg'

interface Props {
    imageURL?: string
    title: string
    description: string[]
}

const ServiceCard: React.FC<Props> = (props: Props) => {
    return (
        <div id="card-parent">
            <div>
                <img
                    id="icon"
                    alt="icon"
                    src={require(`../../images/${props.imageURL}.svg`)}
                />
                <h4 id="title" className="H4">
                    {props.title}
                </h4>
                <ul>
                    {props.description.map((item, index) => {
                        return (
                            <li
                                key={index}
                                id="list-item"
                                className="light-paragraph"
                            >
                                <span>{item}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/*
            линки надо прикрутить когда страницы будут
            <Link></Link>
            */}

            <div id="learn-more-parent">
                <p id="learn-more" className="light-link">
                    Leran more
                </p>
                <img id="arrow" src={arrow} alt="Learn more arrow" />
            </div>
        </div>
    )
}
export default ServiceCard
