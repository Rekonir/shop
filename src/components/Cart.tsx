import React, { FC } from 'react';
import CartImg from '../assets/cart  icon.svg'

const Cart: FC = () => {
    return (
        <div className='Cart__box'>
            <button className="Cart__img">
                <img src={CartImg} alt="Корзина" />
                <div className="sum__position"> 3 </div>
            </button>
            <div className="Cart__text">
                <p>Корзина</p>
                <p className='cost'>12000T</p>
            </div>

        </div>
    );
};

export default Cart;