import React from 'react'

function Card({ menu }) {
    return (
        <div className={`card lg:card-side shadow-xl ${menu.bgColor} px-6`}>
            <figure><img src={menu.image} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{menu.name}</h2>
                <p>{menu.description}</p>
            </div>
        </div>
    )
}

export default Card;
