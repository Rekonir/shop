import React, { FC } from 'react';
import CartImg from '../assets/cart  icon.svg'
import { useDispatch, useSelector } from 'react-redux';
import { showType } from './type';
import { Link } from 'react-router-dom';



const Cart: FC = () => {
    const dispatch = useDispatch()
    const ShowCartBtn = () => {
        dispatch({ type: "CartShow" });
    }

    const State: any = useSelector<showType>(state => state)
    const CartData = State.CartPool
    const Total = CartData.reduce((acc: number, item: any) => acc + item.price * item.counter, 0)

    return (

        <Link to='/cart' className='Cart__box' onClick={ShowCartBtn} data-testid='CartBtn'>
            <button className="Cart__img">
                <img src={CartImg} alt="Корзина" />
                <div className="sum__position" data-testid='PositionInCart'> {CartData.length} </div>
            </button>
            <div className="Cart__text">
                <p>Корзина</p>
                <p className='cost'>{Total} ₽</p>
            </div>
        </Link>
    );
};
export default Cart;