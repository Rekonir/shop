import React, { FC } from 'react';
import LogoImg from '../assets/logo.svg'
import LogoImg1 from '../assets/logo1.svg'
import LogoImgC from '../assets/logo c.svg'
import LogoImgY from '../assets/logo y.svg'
import LogoImgL from '../assets/logo l.svg'
import LogoImgT from '../assets/logo t.svg'
import LogoImgA from '../assets/logo a.svg'
import LogoImgN from '../assets/logo n.svg'
import btnImg from '../assets/btn icon.png'
import btnImgBlack from '../assets/btn icon black.png'
import SearchIconBlack from '../assets/search icon black.svg'

import CallImg from '../assets/call img.png'
import PriceImg from '../assets/price-list.svg'
import BurgMenu from '../assets/burgerMenu.svg'
import Cart from './Cart';
import { useDispatch } from 'react-redux';
import Search from './Search';




const Header: FC = () => {
    
    const dispatch = useDispatch()
    const ShowCatalogBtn = () => {
        dispatch({type: "CatatlodShow"});
    }  
    return (
        <div className='Header'>
            <div className='Header__Up'>
                <div className="Header__content">
                    <div className="Header_address">
                        <div className="address">г. Кокчетав, ул. Ж. Ташенова 129Б<br /> (Рынок Восточный)</div>
                        <div className="address">opt.sultan@mail.ru<br /> На связи в любое время</div>
                    </div>
                    <div className="Header__nav">
                        <div className="nav">
                            <p>О компании </p>
                            <p>Доставка и оплата</p>
                            <p>Возврат</p>
                            <p>Контакты</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Header__Down'>
                <div className="Header__content">
                    <div className="btn__menu">
                        <img src={BurgMenu} alt="Меню" />
                    </div>
                    <div className="logo__box" onClick={ShowCatalogBtn}>
                        <img className='logo' src={LogoImg} alt='логотип'></img>
                        <img className='logo1' src={LogoImg1} alt='логотип'></img>
                        <img className='logo2' src={LogoImg1} alt='логотип'></img>
                        <div className="logo__name">
                            <img className='logo' src={LogoImgC} alt='логотип'></img>
                            <img className='logo' src={LogoImgY} alt='логотип'></img>
                            <img className='logo' src={LogoImgL} alt='логотип'></img>
                            <img className='logo' src={LogoImgT} alt='логотип'></img>
                            <img className='logo' src={LogoImgA} alt='логотип'></img>
                            <img className='logo' src={LogoImgN} alt='логотип'></img>
                        </div>
                    </div>
                    <div className="btn">
                        <p>Каталог</p>
                        <img src={btnImg} alt="" />

                    </div>
                    <Search/>
                    <div className="Header__call">
                        <div className="call__text">
                            <p className='tel'>+7 (777) 490-00-91</p>
                            <p className="time">время работы: 9:00-20:00</p>
                            <p className="phone">Заказать звонок</p>
                        </div>
                        <img src={CallImg} alt="Звонок" />
                    </div>
                    <div className="btn">
                        <p>Прайс-лист</p>
                        <img src={PriceImg} alt="Прайс" />
                    </div>
                    <Cart />

                </div>
            </div>
            <div className="Mobile__Down">
                <div className="btn">
                    <img src={btnImgBlack} alt="" />
                    <p>Каталог</p>
                </div>
                <div className="inp__box">
                    <div className="inp__icon">
                        <img src={SearchIconBlack} alt="Поиск" />
                    </div>
                    <p>Поиск</p>
                </div>
            </div>
            <p className='back'>Назад</p>

        </div >
    );
};

export default Header;