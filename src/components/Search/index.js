import React from 'react';
import './Search.scss';

const Search = ({ onChange, inputValue }) => {


    const handleChange = (e) => {
        onChange(e.currentTarget.value)
    }

    return (
        <div className="search">
            <input className="search__input" onChange={handleChange} type="text" value={inputValue} placeholder="Search heroes" />
        </div>
    );
};

export default Search;