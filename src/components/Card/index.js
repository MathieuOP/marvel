import React from 'react';
import './Card.scss';

const Card = ({ id, name, thumbnail }) => {

    return (
        <div key={id} className="card">
            <div className="card__image">
                <img className="card__image--img" src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
            </div>

            <div className="card__name">{name}</div>
        </div>
    )
}

export default Card;