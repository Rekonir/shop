import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPosition } from '../store/actions/action';
import { IGoods } from './type';

const AdminBox = () => {

    const dispatch = useDispatch()
    const [PositionId, setPositionId] = useState("Штрихкод")
    const [PositionImg, setPositionImg] = useState("Ссылка на картинку")
    const [PositionName, setPositionName] = useState("Название")
    const [PositionSizeName, setPositionSizeName] = useState("объем")
    const [PositionSizeValue, setPositionSizeValue] = useState("0 мл")
    const [PositionMaker, setPositionMaker] = useState("Россия")
    const [PositionBrend, setPositionBrend] = useState("Синяя речка")
    const [PositionDescription, setPositionDescription] = useState("Идет описание товара")
    const [PositionPrice, setPositionPrice] = useState(0)
    const [PositionUse, setPositionUse] = useState("Уход за телом")



    const NewPosition = () => {
        const NewPosition: IGoods = {
            id: `${PositionId}`,
            img: `${PositionImg}`,
            name: `${PositionName}`,
            sizeName: `${PositionSizeName}`,
            sizeValue: `${PositionSizeValue}`,
            maker: `${PositionMaker}`,
            brend: `${PositionBrend}`,
            description: `${PositionDescription}`,
            price: PositionPrice,
            usePlace: [`${PositionUse}`],
            counter: 1
            
        }
        dispatch(addPosition(NewPosition))
    }
    return (
        <div className="admin__box">
            <div className="admin__position">
                <label htmlFor='admin__id'> Штрихкод: </label>
                <input type="text" className="admin__input" id='admin__id' data-testid='admin__id' value={PositionId} onChange={(e) => setPositionId(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__img'> Ссылка на картинку: </label>
                <input type="text" className="admin__input" id='admin__img' data-testid='admin__img' value={PositionImg} onChange={(e) => setPositionImg(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__name'> Название: </label>
                <input type="text" className="admin__input" id='admin__name' data-testid='admin__name' value={PositionName} onChange={(e) => setPositionName(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__sizeName'> Вид измерения: </label>
                <input type="text" className="admin__input" id='admin__sizeName' data-testid='admin__sizeName' value={PositionSizeName} onChange={(e) => setPositionSizeName(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__sizeValue'> Кол-во: </label>
                <input type="text" className="admin__input" id='admin__sizeValue' data-testid='admin__sizeValue' value={PositionSizeValue} onChange={(e) => setPositionSizeValue(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__maker'> Производитель: </label>
                <input type="text" className="admin__input" id='admin__maker' data-testid='admin__maker' value={PositionMaker} onChange={(e) => setPositionMaker(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__brend'> Бренд: </label>
                <input type="text" className="admin__input" id='admin__brend' data-testid='admin__brend' value={PositionBrend} onChange={(e) => setPositionBrend(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__description'> Описание: </label>
                <input type="text" className="admin__input" id='admin__description' data-testid='admin__description' value={PositionDescription} onChange={(e) => setPositionDescription(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__price'> Цена: </label>
                <input type="number" className="admin__input" id='admin__price' data-testid='admin__price' value={PositionPrice} onChange={(e) => setPositionPrice(+e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__usePlace'> Тип ухода: </label>
                <input type="text" className="admin__input" id='admin__usePlace' data-testid='admin__usePlace'  value={PositionUse} onChange={(e) => setPositionUse(e.target.value)} />
            </div>
            <button className='btn' data-testid='addPosition' onClick={NewPosition}> Ввести позицию </button>
        </div>
    );
};

export default AdminBox;