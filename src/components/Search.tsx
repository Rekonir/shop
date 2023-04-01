import React from 'react';

import SearchIcon from '../assets/saerch icon.svg'

const Search = () => {
    return (

        <div className="inp__box">
            <p> Поиск...</p>
            <div className="inp__icon">
                <img src={SearchIcon} alt="Поиск" />
            </div>
        </div>
    );
};

export default Search;