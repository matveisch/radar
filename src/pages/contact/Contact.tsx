import React from 'react'
import ContactForm from '../../components/contact-form/ContactForm'
import CircleContact from '../../components/circle-contact/CircleContact'
import './Contact.css'

const Contact = () => {
    return (
        <div id="contact-page">
            <CircleContact />
            <ContactForm />
        </div>
    )
}

export default Contact
