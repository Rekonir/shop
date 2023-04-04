import React, { FC } from 'react';
import PriceImg from '../assets/prise-list black.svg'
import ActionImg from '../assets/actionImg.svg'
import CartImg from '../assets/to cart icon.svg'
import GoodsData from '../GoodsData.json'
import Quantity from './Quantity';
import { useDispatch, useSelector } from 'react-redux';
import { showType } from './type';


const GoodsPage: FC = () => {
    const inCart = false

    const dispatch = useDispatch()
   
    const GoodsPageId = useSelector<showType>(state => state.GoodsPageId)
    let goods = GoodsData.find(item => item.id === GoodsPageId)

    const addToCartPageGoods = () => {
		dispatch({type: 'addToCartPageGoods', payload: goods})
    }
    const GoodsPageShow = useSelector<showType>(state => state.GoodsPageShow)
    const ShowClass = GoodsPageShow ? 'show' : 'hide'
    return (
        <div className={`GoodsPage ${ShowClass}`} key={goods.id} >
            <div className="map__nav">
                <ul>
                    <li>Главная</li>
                    <li>Косметика и гигиена</li>
                    <li>{goods.name}</li>
                </ul>
            </div>
            <div className="Goods__content">
                <img src={goods.img} alt={goods.name} />
                <div className="content__info">
                    <p className="stock"> В наличии</p>
                    <h1 className="content__name">{goods.name}</h1>
                    <div className="good__size">
                        <p>{goods.sizeName}</p>
                        <p>{goods.sizeValue}</p>
                    </div>
                    <div className="content__price">
                        <h2 className="price">{goods.price} ₽</h2>
                        <Quantity cartstate={inCart} goods={goods} key={`Counter ${goods.id}`}/>
                        <button className="toCart__btn" onClick={addToCartPageGoods}>
                            в корзину
                            <img src={CartImg} alt="Корзина" />
                        </button>
                    </div>
                    <div className="content__action">
                        <img src={ActionImg} alt="Поделиться" />
                        <p>При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области</p>
                        <div className="btn">
                            <p>Прайс-лист</p>
                            <img src={PriceImg} alt="Прайс" />
                        </div>
                    </div>
                    <div className="good__info">
                        <p> Штрихкод: {goods.id}</p>
                        <p> Производитель: {goods.maker}</p>
                        <p> Бренд: {goods.brend}</p>
                    </div>
                    <div className="content">
                        <h3 className="content__subheader"> Описание </h3>
                        <p className='description'>{goods.description}</p>
                    </div>
                    <div className="content">
                        <h3 className="content__subheader"> Характеристики </h3>
                        <div className="good__info">
                            <p> Назначение: {goods.usePlace}</p>
                            <p> Производитель: {goods.maker}</p>
                            <p> Бренд: {goods.brend}</p>
                            <p> Штрихкод: {goods.id}</p>
                            <p>{goods.sizeName}: {goods.sizeValue}</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GoodsPage;