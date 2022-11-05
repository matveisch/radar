import React from 'react'
import { Field } from 'formik'
import './ContactInput.css'

interface Props {
    htmlFor?: string
    label?: string
    id: string
    name: string
    placeholder: string
    type?: string
    textArea: boolean
    touchedValue?: boolean
    errorsValue?: string
}

const ContactInput: React.FC<Props> = (props) => {
    return (
        <div className="contact-input">
            <Field
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                type={props.type}
                as={props.textArea && 'textarea'}
                errors={props.errorsValue}
                touched={props.touchedValue}
            />
        </div>
    )
}

export default ContactInput
