import React from 'react';
import { useDispatch } from 'react-redux';
import { addPosition } from '../store/cart/action';

const AdminBox = () => {

    const dispatch = useDispatch()
    const NewPosition = () => {
        // dispatch(addPosition(PosotionId, PosotionName, PosotionImg, PosotionSizeName, PosotionSizeValue, PosotionMaker, PosotionBrend, PosotionDescription, PosotionPrice, PosotionUse))
    }
    return (
        <div className="admin__box">
            <div className="admin__position">
                <label htmlFor='admin__id'> Штрихкод: </label>
                <input type="text" className="admin__input"  id='admin__id' />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__img'> Ссылка на картинку: </label>
                <input type="text" className="admin__input" id='admin__img' />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__name'> Название: </label>
                <input type="text" className="admin__input" id='admin__name' />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__sizeName'> Вид измерения: </label>
                <input type="text" className="admin__input" id='admin__sizeName' />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__sizeValue'> Кол-во: </label>
                <input type="text" className="admin__input" id='admin__sizeValue' />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__maker'> Производитель: </label>
                <input type="text" className="admin__input" id='admin__maker' />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__brend'> Бренд: </label>
                <input type="text" className="admin__input" id='admin__brend' />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__description'> Описание: </label>
                <input type="text" className="admin__input" id='admin__description' />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__price'> Цена: </label>
                <input type="number" className="admin__input" id='admin__price' />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__usePlace'> Тип ухода: </label>
                <input type="text" className="admin__input" id='admin__usePlace' />
            </div>
            <button className='btn' onClick={NewPosition}> Ввести позицию </button>
        </div>
    );
};

export default AdminBox;