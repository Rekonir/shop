import React, { FC, useState } from 'react';
import { ICheckbox } from './type';

const Checkbox: FC<ICheckbox> = ({ boxName }) => {
    const [checkState, setCheck] = useState(false)

    return (
        <div className="filter">
            <input type="checkbox" name="maker" id={boxName} checked={checkState} onClick={() => { setCheck(!checkState) }} />
            <label htmlFor={boxName}>{boxName}</label>
        </div>
    );
};

export default Checkbox;