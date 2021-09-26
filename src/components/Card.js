import React from 'react'
import '../styles/card.css'

const Card = (props) => {
    return (
        <div className='cardcontainer'>
            <div className='card'>
                {props.children}
            </div>
            <p className='check'>{props.check}</p>
        </div>
    )
}

export default Card
