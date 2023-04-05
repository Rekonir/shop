import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TYImg from '../assets/TY.svg';
import { showType } from './type';


const Thanks = () => {
    
    const ThaksShow = useSelector<showType>(state => state.ThaksShow)
    const ShowClass = ThaksShow ? 'show' : 'hide'
    
    const dispatch = useDispatch()
    const ShowThxBtn = () => {
        dispatch({type: "ThaksShow"});
    }

    return (
        <div className={`Thanks ${ShowClass}`} onClick={ShowThxBtn}>
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