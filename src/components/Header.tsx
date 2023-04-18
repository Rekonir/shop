import React, { FC } from 'react';
import btnImg from '../assets/btn icon.png'
import btnImgBlack from '../assets/btn icon black.png'
import SearchIconBlack from '../assets/search icon black.svg'
import CallImg from '../assets/call img.png'
import PriceImg from '../assets/price-list.svg'
import BurgMenu from '../assets/burgerMenu.svg'
import Cart from './Cart';
import { useDispatch } from 'react-redux';
import Search from './Search';
import { Link } from 'react-router-dom';
import BlackLogoBox from './BlackLogoBox';




const Header: FC = () => {

    const dispatch = useDispatch()

    const ShowAdmin = () => {
        dispatch({ type: "ShowAdmin" })
    }


    const toggleSide = () => {
        dispatch({ type: "toggleSide" })
    }
    return (
        <div className='Header' >
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
                    <Link to="/sidemenu" className="btn__menu" onClick={toggleSide}>
                        <img src={BurgMenu} alt="Меню" />
                    </Link>
                    <BlackLogoBox />
                    <Link to='/admin' className="btn" onClick={ShowAdmin}>
                        <p>Каталог</p>
                        <img src={btnImg} alt="" />
                    </Link>
                    <Search />
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
                <Link to='/admin' className="btn" onClick={ShowAdmin} data-testid='AdminBtn'>
                    <img src={btnImgBlack} alt="" />
                    <p>Каталог</p>
                </Link>
                <div className="inp__box">
                    <div className="inp__icon">
                        <img src={SearchIconBlack} alt="Поиск" />
                    </div>
                    <p>Поиск</p>
                </div>
            </div>
        </div >
    );
};

export default Header;