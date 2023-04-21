import React, { FC, useState } from 'react';
import { ICheckbox, TypeState } from './type';
import { useDispatch, useSelector } from 'react-redux';




const Checkbox: FC<ICheckbox> = ({ boxName }) => {
    const [checkState, setCheck] = useState(false)
    const State: any = useSelector<TypeState>(state => state)

    const dispatch = useDispatch()
    const check = () => {
        setCheck(!checkState)
        let NewStateCheckBox = !checkState
        dispatch({ type: 'CheckBox', payload: { boxName, NewStateCheckBox } })
    }
    setTimeout(() => {
        if (State.FilterDelState) {
            setCheck(false)
        }
    })
    return (
        <div className="filter">
            <input type="checkbox" name="maker" id={boxName} checked={checkState} onClick={check} />
            <label htmlFor={boxName}>{boxName}</label>
        </div>
    );
};

export default Checkbox;