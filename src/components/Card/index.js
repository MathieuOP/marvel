import React from 'react';
import PropTypes from 'prop-types';
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

Card.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
        path: PropTypes.string.isRequired,
        extension: PropTypes.string.isRequired
    }),
};

export default Card;