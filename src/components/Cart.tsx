import React, { FC } from 'react';
import CartImg from '../assets/cart  icon.svg'
import { useDispatch } from 'react-redux';



const Cart: FC = () => {
    const dispatch = useDispatch()
    const ShowCartBtn = () => {
        dispatch({type: "CartShow"});
    }

    return (
        
        <div className='Cart__box' onClick={ShowCartBtn}>
            <button className="Cart__img">
                <img src={CartImg} alt="Корзина" />
                <div className="sum__position"> 3 </div>
            </button>
            <div className="Cart__text">
                <p>Корзина</p>
                <p className='cost'>Total ₽</p>
            </div>
        </div>
    );
};
export default Cart;