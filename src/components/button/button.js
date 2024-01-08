import React from 'react';
import "./button.css"

const Button = (props) => {
    return (
        <button type='submit' className='button__container'>
            {props.text}
        </button>
    )
}

export default Button