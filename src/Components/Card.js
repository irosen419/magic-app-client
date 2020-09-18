import React from 'react'

function Card(props) {
    return (
        <div>
            <img alt="" src={props.card.imageUrl} />
            <h2>{props.card.name}</h2>
        </div >
    )
}

export default Card