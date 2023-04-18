import React from 'react';
import EmailBtn from '../assets/email btn.svg'
import PriceImg from '../assets/price-list.svg'
import Whatsapp from '../assets/whatsapp.svg'
import Telegram from '../assets/telegram.svg'
import Visa from '../assets/visa.svg'
import MasterCard from '../assets/mastercard.svg'
import WhiteLogoBox from './WhiteLogoBox';





const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer__col">
                <WhiteLogoBox />
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
                    <WhiteLogoBox/>
                    <div className="btn">
                        <p>Прайс-лист</p>
                        <img src={PriceImg} alt="Прайс" />
                    </div>
                </div>
                <p data-testid='CompanyDiscription'>Компания «Султан» — снабжаем розничные магазины товарами
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