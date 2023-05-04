import React, { FC } from 'react';
import { IGoodsItem } from './type';
import Del from '../assets/del.svg'
import { useDispatch } from 'react-redux';
import { removeFromData } from '../store/actions/action';
import { Link } from 'react-router-dom';

const GoodsAdminItem: FC<IGoodsItem> = ({ goods }) => {

    const dispatch = useDispatch()

    const removeDataID = (id: string) => {
        dispatch(removeFromData(id))
    }
    const OpenGood = () => { dispatch({ type: 'GoodsPageShow', payload: goods.id }) }
    return (
        <div className='Good__position' key={goods.id} data-testid='GoodsAdmin'>
            <img className='good__img' src={goods.img} alt={goods.name} />
            <div className="good__size">
                <p>{goods.sizeName}</p>
                <p>{goods.sizeValue}</p>
            </div>
            <Link className='good__name' to={`/${goods.id}`} onClick={OpenGood} > {goods.name}</Link>
            <div className="good__info">
                <p> Штрихкод: {goods.id}</p>
                <p> Производитель: {goods.maker}</p>
                <p> Бренд: {goods.brend}</p>
            </div>
            <div className="good__price">
                <p> {goods.price} ₽</p>
                <div className="btn__del" onClick={() => removeDataID(goods.id)} data-testid='Del'>
                    <img src={Del} alt="удаление" />
                </div>
            </div>
        </div>
    );
};


export default GoodsAdminItem;