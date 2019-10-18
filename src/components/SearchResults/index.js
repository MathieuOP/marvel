import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import './SearchResults.scss';

const SearchResults = ({ heroes }) => (
    <div className="results">
        {
            heroes.map(({id, name, thumbnail}) => (
                <Card
                    key={id} 
                    id={id}
                    name={name}
                    thumbnail={thumbnail}
                />
            ))
        }
    </div>
);

SearchResults.propTypes = {
    heroes: PropTypes.array.isRequired,
};

export default SearchResults;