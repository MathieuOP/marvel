import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, name, thumbnail }) => {

    return (
        
            <div className="card">
                <Link className="card__link" key={id} to={`/hero/${id}`} >
                    <div className="card__image">
                        <img className="card__image--img" src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
                    </div>

                    <div className="card__name">{name}</div>
                </Link>
            </div>
        
    )
}

export default Card;