import React from 'react';
import GoodsData from '../GoodsData.json'
import PriceImg from '../assets/prise-list black.svg'
import ActionImg from '../assets/actionImg.svg'
import CartImg from '../assets/to cart icon.svg'



const GoodsPage = () => {
    return (
        <div>
            {GoodsData.map(goods => {
                return (
                    <div className="GoodsPage" key={goods.id}>
                        <div className="map__nav">
                            <ul>
                                <li>Главная</li>
                                <li>Косметика и гигиена</li>
                                <li>{goods.usePlace}</li>
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
                                    <div className="count">
                                        <button className="count__change" id="minus"> - </button>
                                        <input type="text" className="count__value" value='1' />
                                        <button className="count__change" id="plus"> + </button>
                                    </div>
                                    <button className="toCart__btn">
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
                )
            })}

        </div>
    );
};

export default GoodsPage;