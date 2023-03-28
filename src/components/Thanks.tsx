import React from 'react';
import TYImg from '../assets/TY.svg';


const Thanks = () => {
    return (
        <div className="Thanks">
            <div className="Thanks__box">
                <button className="close"> X </button>
                <img src={TYImg} alt="Спасибо" />
                <h1 className="Page__header">Спасибо за заказ</h1>
                <p className="thanks__text">Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
        </div>
    );
};

export default Thanks;