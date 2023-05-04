import React, { FC } from 'react';
import { IGoodsItem } from './type';
import CartImg from '../assets/to cart icon.svg'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/action';
import { Link } from 'react-router-dom';

const GoodsItem: FC<IGoodsItem> = ({ goods }) => {
    
    const dispatch = useDispatch()
    
    const addHandler = () => {
        dispatch(addToCart(goods, goods.counter))
    }
   
    const OpenGood = () => { dispatch({ type: 'GoodsPageShow', payload: goods.id }) }
    return (
        <div className='Good__position' key={goods.id} >
            <img className='good__img' src={goods.img} alt={goods.name} />
            <div className="good__size">
                <p>{goods.sizeName}</p>
                <p>{goods.sizeValue}</p>
            </div>
            <Link className='good__name' to={`/${goods.id}`} onClick={OpenGood} data-testid='GoodsPageBtn'> {goods.name}</Link>
            <div className="good__info">
                <p> Штрихкод: {goods.id}</p>
                <p> Производитель: {goods.maker}</p>
                <p> Бренд: {goods.brend}</p>
            </div>
            <div className="good__price">
                <p> {goods.price} ₽</p>
                <button className="toCart__btn" onClick={addHandler} data-testid={`addToCart ${goods.id}`}>
                    в корзину
                    <img src={CartImg} alt="Корзина" />
                </button>
            </div>
        </div>
    );
};

export default GoodsItem;

