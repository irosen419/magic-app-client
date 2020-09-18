import React from 'react'
import './Card.css'
function Card(props) {
    return (
        <div className="card">
            <img alt="" src={props.card.imageUrl} />
            <p>{props.card.name}</p>
        </div >
    )
}

export default Card