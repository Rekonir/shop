import React from 'react';
import LogoImg from '../assets/logo white.svg'
import LogoImg1 from '../assets/logo1 white.svg'
import LogoImgC from '../assets/logo c white.svg'
import LogoImgY from '../assets/logo y white.svg'
import LogoImgL from '../assets/logo l white.svg'
import LogoImgT from '../assets/logo t white.svg'
import LogoImgA from '../assets/logo a white.svg'
import LogoImgN from '../assets/logo n white.svg'
import EmailBtn from '../assets/email btn.svg'
import PriceImg from '../assets/price-list.svg'
import Whatsapp from '../assets/whatsapp.svg'
import Telegram from '../assets/telegram.svg'
import Visa from '../assets/visa.svg'
import MasterCard from '../assets/mastercard.svg'





const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer__col">
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
                <p>Компания «Султан» — снабжаем розничные магазины товарами
                    "под ключ" в Кокчетаве и Акмолинской области</p>
                <p>Подпишись на скидки и акции</p>
                <div className="inp__box">
                    Введите ваш E-mail
                    <div className="inp__icon">
                        <img className='logo' src={EmailBtn} alt='логотип'></img>
                    </div>
                </div>
            </div>
            <div className="Footer__col">
                <ul>
                    <h3>Меню сайта:</h3>
                    <li>О компании</li>
                    <li>Доставка и оплата</li>
                    <li>Возврат</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div className="Footer__col">
                <ul>
                    <h3>Категории:</h3>
                    <li>Бытовая химия</li>
                    <li>Косметика и гигиена</li>
                    <li>Товары для дома</li>
                    <li>Товары для детей и мам</li>
                    <li>Посуда</li>
                </ul>
            </div>
            <div className="Footer__col">
                <h3>Скачать прайс-лист:</h3>
                <div className="btn">
                    <p>Прайс-лист</p>
                    <img src={PriceImg} alt="Прайс" />
                </div>
                <p>Связь в мессенджерах:</p>
                <div className="Icon__Box">
                    <img className='Social' src={Whatsapp} alt="Whatsapp" />
                    <img className='Social' src={Telegram} alt="Telegram" />
                </div>
            </div>
            <div className="Footer__col">
                <h3>Контакты:</h3>
                <div className="call__text">
                    <p className='tel'>+7 (777) 490-00-91</p>
                    <p className="time">время работы: 9:00-20:00</p>
                    <p className="phone">Заказать звонок</p>
                </div>
                <p>opt.sultan@mail.ru <br />
                    На связи в любое время</p>
                <div className="Icon__Box">
                    <img className='PayCard' src={Visa} alt="Visa" />
                    <img className='PayCard' src={MasterCard} alt="MasterCard" />
                </div>
            </div>

            <div className="Mobile__footer">
                <div className="Mobile__footer__box">
                    <div className="logo__box">
                        <img className='logo' src={LogoImg} alt='логотип' ></img>
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
                        <p>Прайс-лист</p>
                        <img src={PriceImg} alt="Прайс" />
                    </div>
                </div>
                <p  data-testid='CompanyDiscription'>Компания «Султан» — снабжаем розничные магазины товарами
                    "под ключ" в Кокчетаве и Акмолинской области</p>
                <p>Подпишись на скидки и акции</p>
                <div className="inp__box">
                    Введите ваш E-mail
                    <div className="inp__icon">
                        <img className='logo' src={EmailBtn} alt='логотип'></img>
                    </div>
                </div>
                <div className="Mobile__footer__box">
                    <ul>
                        <h3>Меню сайта:</h3>
                        <li>О компании</li>
                        <li>Доставка и оплата</li>
                        <li>Возврат</li>
                        <li>Контакты</li>
                    </ul>
                    <ul>
                        <h3>Категории:</h3>
                        <li>Бытовая химия</li>
                        <li>Косметика и гигиена</li>
                        <li>Товары для дома</li>
                        <li>Товары для детей и мам</li>
                        <li>Посуда</li>
                    </ul>
                </div>
                <h3>Контакты:</h3>
                <div className="Mobile__footer__box">
                    <div>
                        <div className="call__text">
                            <p className='tel'>+7 (777) 490-00-91</p>
                            <p className="time">время работы: 9:00-20:00</p>
                            <p className="phone">Заказать звонок</p>
                        </div>
                        <p>opt.sultan@mail.ru<br />
                            На связи в любое время</p>
                        <div className="Icon__Box">
                            <img className='PayCard' src={Visa} alt="Visa" />
                            <img className='PayCard' src={MasterCard} alt="MasterCard" />
                        </div>
                    </div>
                    <div>
                        <p>Связь в мессенджерах:</p>
                        <div className="Icon__Box">
                            <img className='Social' src={Whatsapp} alt="Whatsapp" />
                            <img className='Social' src={Telegram} alt="Telegram" />
                        </div>
                    </div>

                </div>

            </div>


        </div >
    );
};

export default Footer;