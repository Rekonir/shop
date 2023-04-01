import React, { FC } from 'react';
import Del from '../assets/del.svg'
import { useDispatch, useSelector } from 'react-redux';
import { showType } from './type';



const CartPage: FC = () => {

    const CartShow = useSelector<showType>(state => state.CartShow)
    console.log(CartShow)
    const ShowClass = CartShow ? 'show' : 'hide'

    const CartData: any  = useSelector<showType>(state => state.CartPool)
	const Total = CartData.reduce((acc:number, item:any) => acc + item.price, 0)
    
    const dispatch = useDispatch()
    const ShowThxBtn = () => {
        dispatch({type: "ThaksShow"});
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
                                <h1 className="content__name">{goods.name}</h1>
                                <p className='description'>{goods.description}</p>
                            </div>
                            <div className="count">
                                <button className="count__change" id="minus"> - </button>
                                <input type="text" className="count__value" value='1' />
                                <button className="count__change" id="plus"> + </button>
                            </div>
                            <h2 className="price">{goods.price} ₽</h2>
                            <div className="btn__del">
                                <img src={Del} alt="удаление" />
                            </div>
                        </div>
                    )
                })}
                <div className="Cart__total">
                    <div className="btn" onClick={ShowThxBtn}>
                        <p>Оформить заказ</p>
                    </div>
                    <h2 className="price"> {Total} ₽</h2>

                </div>

            </div>

    );
};

export default CartPage;