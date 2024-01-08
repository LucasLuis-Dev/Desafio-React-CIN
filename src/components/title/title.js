import React from 'react';

import './title.css'

const Title = (props) => {
    return (
        <div className='title__container'>
            <h1 className='title'>{props.title}</h1>
        </div>
    )
}

export default Title