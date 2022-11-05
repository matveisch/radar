import React from 'react'
import './ErrorMessage.css'

interface Props {
    error: string
}

const ErrorMessage: React.FC<Props> = (props) => {
    return <div className="error-message">{props.error}</div>
}

export default ErrorMessage
