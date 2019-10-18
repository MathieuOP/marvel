import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from 'components/SearchResults';
import Loading from 'components/Loading';
import NoResultFound from 'components/NoResultFound';
import './Search.scss';

const Search = ({ onChange, inputValue, heroes, loadingSearch }) => {
    const handleChange = (e) => {
        onChange(e.currentTarget.value);
    };
    
    return (
        <div className="search">
            <div className="search__bar">
                <input className="search__input" onChange={handleChange} type="text" value={inputValue} placeholder="Search heroes" />
            </div>  
            {    
                loadingSearch ? (
                    <Loading />
                ) : inputValue !== '' && heroes.length === 0 ? (
                    <NoResultFound />
                ) : (
                    <SearchResults heroes={heroes} />
                )
            }
        </div>
    );
};

Search.propTypes = {
    onChange: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    heroes: PropTypes.array.isRequired,
    loadingSearch: PropTypes.bool.isRequired,
};

export default Search;