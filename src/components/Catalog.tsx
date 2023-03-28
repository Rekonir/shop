import React, { FC } from 'react';
import GoodsData from '../GoodsData.json'
import CartImg from '../assets/to cart icon.svg'
import SideMenu from './SideMenu';




const Catalog: FC = () => {
    return (
        <div className='Catalog'>
            <SideMenu />
            <div className="Page__goods">
                <div className='Goods'>
                    {
                        GoodsData.map(goods => {
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
                                        <button className="toCart__btn">
                                            в корзину
                                            <img src={CartImg} alt="Корзина" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="Page__num">
                    <div className="Page__active"> 1 </div>
                    <div className="Page__unactive"> 2 </div>
                    <div className="Page__unactive"> 3 </div>
                    <div className="Page__unactive"> 4 </div>
                    <div className="Page__unactive"> 5 </div>
                </div>
                <p className="Page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
            </div >
        </div>

    );
};

export default Catalog;