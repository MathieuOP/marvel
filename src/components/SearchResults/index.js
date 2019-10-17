import React from 'react';
import Card from 'components/Card';
import './SearchResults.scss';

const SearchResults = ({ heroes }) => {

    return (
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
    )
}

export default SearchResults;