import React, { FC, useState } from 'react';
import { IQuantity } from './type';

const Quantity: FC<IQuantity> = ({good}) => {
    
    const [counter, setCount] = useState(good.counter)

    console.log(counter)
    
    return (
        <div className="count">
            <button className="count__change" onClick={() => counter > 0 && setCount(counter - 1)}> - </button>
            <input
                type='number' className="count__value" onChange={e => setCount(+e.target.value)}
                value={counter|| 0} readOnly id={good.id} name={good.id} />
            <button className="count__change" onClick={() => counter < 300 && setCount(counter + 1)}> + </button>
        </div>


    );
};


export default Quantity;