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
import SearchIcon from '../assets/saerch icon.svg'
import CallImg from '../assets/call img.png'
import PriceImg from '../assets/price-list.svg'
import Cart from './Cart';




const Header: FC = () => {
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
                    <div className="logo__box">
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
                    <div className="inp__box">
                        <p> Поиск...</p>
                        <div className="inp__icon">
                            <img src={SearchIcon} alt="Поиск" />
                        </div>
                    </div>
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

        </div >
    );
};

export default Header;