import React from 'react'
import { Field } from 'formik'

interface Props {
    htmlFor: string
    label: string
    id: string
    name: string
    placeholder: string
    type?: string
}

const ContactInput: React.FC<Props> = (props) => {
    return (
        <div>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <Field
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                type={props.type}
            />
        </div>
    )
}

export default ContactInput
