import React, { useState } from 'react';

import SearchIcon from '../assets/saerch icon.svg'
import { useDispatch } from 'react-redux';

const Search = () => {

    const [check, setCheckBoxList] = useState('')
    const dispatch = useDispatch()
    const checkiflter = () => {
        dispatch({type: "CangeCheckBoxList", payload: check })
    }
    

    return (

        <div className="inp__box">
            <form className="search"></form>
            <input type='text' placeholder="Поиск..." onChange={e => { setCheckBoxList(e.target.value) }}/>
            <div className="inp__icon">
                <button className="btn" type="submit" onClick={checkiflter}>
                    <img src={SearchIcon} alt="Поиск" />
                </button>

            </div>
        </div>
    );
};

export default Search;