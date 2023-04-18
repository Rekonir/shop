import React, { FC, useState } from 'react';
import { IQuantity, } from './type';
import { useDispatch, } from 'react-redux';



const Quantity: FC<IQuantity> = ({ goods, cartstate }) => {

    const [counter, setCount] = useState(goods.counter)

    const dispatch = useDispatch()
    const changeCounterDown = () => {
        counter > 0 && setCount(counter - 1)
        let newCounter = counter - 1
        dispatch({ type: "changeCounter", payload: { goods, newCounter, cartstate } })
    }
    const changeCounterUp = () => {
        counter < 300 && setCount(counter + 1)
        let newCounter = counter + 1
        dispatch({ type: "changeCounter", payload: { goods, newCounter, cartstate } })
    }
    return (
        <div className="count" >
            <button className="count__change" onClick={changeCounterDown} data-testid='Minus'  > - </button>
            <input
                type='number' className="count__value" onChange={e => { setCount(+e.target.value) }} data-testid='Result'
                value={counter} disabled />
            <button className="count__change" onClick={changeCounterUp} data-testid='Plus' > + </button>
        </div>


    );
};



export default Quantity;