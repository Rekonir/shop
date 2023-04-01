import React, { FC } from 'react';
import { IGoodsItem } from './type';
import CartImg from '../assets/to cart icon.svg'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart/action';

const GoodsItem: FC<IGoodsItem> = ({ goods }) => {
    
    const dispatch = useDispatch()
    const addHandler = () => {
        const counter = 1
		dispatch(addToCart(goods, counter))
    }
    return (
        <div className='Good__position' key={goods.id} >
            <img className='good__img' src={goods.img} alt={goods.name} />
            <div className="good__size">
                <p>{goods.sizeName}</p>
                <p>{goods.sizeValue}</p>
            </div>
            <p className='good__name'> {goods.name}</p>
            <div className="good__info">
                <p> Штрихкод: {goods.id}</p>
                <p> Производитель: {goods.maker}</p>
                <p> Бренд: {goods.brend}</p>
            </div>
            <div className="good__price">
                <p> {goods.price} ₽</p>
                <button className="toCart__btn" onClick={addHandler}>
                    в корзину
                    <img src={CartImg} alt="Корзина" />
                </button>
            </div>
        </div>
    );
};

export default GoodsItem;

