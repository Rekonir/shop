import React, { FC } from 'react';
import Del from '../assets/del.svg'
import { useDispatch, useSelector } from 'react-redux';
import { showType } from './type';
import Quantity from './Quantity';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../store/cart/action';



const CartPage: FC = () => {

    const CartShow = useSelector<showType>(state => state.CartShow)
    const ShowClass = CartShow ? 'show' : 'hide'

    const CartData: any = useSelector<showType>(state => state.CartPool)
    const Total = CartData.reduce((acc: number, item: any) => acc + item.price * item.counter, 0)

    const dispatch = useDispatch()
    const ShowThxBtn = () => {
        dispatch({ type: "ThaksShow" });
    }
    const removeHandler = (id: string) => {
		dispatch(removeFromCart(id))
	}

    return (
        <div className={`CartPage ${ShowClass}`}>
            <div className="map__nav">
                <ul>
                    <li>Главная</li>
                    <li>Корзина</li>
                </ul>
            </div>
            <h1 className="Page__header">Корзина</h1>
            {CartData.map(goods => {
                return (
                    <div className="Cart__position" key={goods.id}>
                        <img src={goods.img} alt={goods.name} />
                        <div className="Cart__info">
                            <div className="good__size">
                                <p>{goods.sizeName}</p>
                                <p>{goods.sizeValue}</p>
                            </div>
                            <Link className='good__name' to={`/${goods.id}`}> {goods.name}</Link>
                            <p className='description'>{goods.description}</p>
                        </div>
                        <Quantity good={goods} key={`Counter ${goods.id}`}/>
                        <h2 className="price">{goods.price} ₽</h2>
                        <div className="btn__del" onClick={() => removeHandler(goods.id)}>
                            <img src={Del} alt="удаление" />
                        </div>
                    </div>
                )
            })}
            <div className="Cart__total">
                <Link to='/' className="btn" onClick={ShowThxBtn}>
                    <p>Оформить заказ</p>
                </Link>
                <h2 className="price"> {Total} ₽</h2>

            </div>

        </div>

    );
};

export default CartPage;