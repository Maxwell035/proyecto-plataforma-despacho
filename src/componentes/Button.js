import React from 'react'

const Button = (props) => {
    const { type, className , ...rest} = props;
    return (
        
        <button type={type} className={className} {...rest}>
            Consultar
        </button>
     
    )
}

export default Button
