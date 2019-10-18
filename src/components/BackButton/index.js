import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './BackButton.scss';

const BackButton = ({ to, content }) => (
    <div className="back">
        <Link className="back__link" to={to}>{content}</Link>
    </div>
);


BackButton.propTypes = {
    to: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default BackButton;