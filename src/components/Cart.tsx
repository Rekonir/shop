import React, { FC } from 'react';
import CartImg from '../assets/cart  icon.svg'
import { useDispatch, useSelector } from 'react-redux';
import { TypeState } from './type';
import { Link } from 'react-router-dom';



const Cart: FC = () => {
    const dispatch = useDispatch()
    const UpFilterShow = () => {
        dispatch({ type: "CartShow" });
    }

    const State: any = useSelector<TypeState>(state => state)
    const CartData = State.CartPool
    const Total = CartData.reduce((acc: number, item: any) => acc + item.price * item.counter, 0)

    return (

        <Link to='/cart' className='Cart__box' onClick={UpFilterShow} data-testid='CartBtn'>
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