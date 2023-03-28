import React from 'react';
import GoodsData from '../GoodsData.json'
import Del from '../assets/del.svg'



const CartPage = () => {
    return (
        <div className='CartPage'>

            <div className="map__nav">
                <ul>
                    <li>Главная</li>
                    <li>Корзина</li>
                </ul>
            </div>
            <h1 className="Page__header">Корзина</h1>
            {GoodsData.map(goods => {
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
                <div className="btn">
                    <p>Оформить заказ</p>
                </div>
                <h2 className="price"> Total ₽</h2>

            </div>

        </div>
    );
};

export default CartPage;