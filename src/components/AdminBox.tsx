import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPosition } from '../store/cart/action';
import { IGoods } from './type';

const AdminBox = () => {

    const dispatch = useDispatch()
    const [PosotionId, setPosotionId] = useState("Штрихкод")
    const [PosotionImg, setPosotionImg] = useState("Ссылка на картинку")
    const [PosotionName, setPosotionName] = useState("Название")
    const [PosotionSizeName, setPosotionSizeName] = useState("объем")
    const [PosotionSizeValue, setPosotionSizeValue] = useState("0 мл")
    const [PosotionMaker, setPosotionMaker] = useState("Россия")
    const [PosotionBrend, setPosotionBrend] = useState("Синяя речка")
    const [PosotionDescription, setPosotionDescription] = useState("Идет описание товара")
    const [PosotionPrice, setPosotionPrice] = useState(0)
    const [PosotionUse, setPosotionUse] = useState("Уход за телом")



    const NewPosition = () => {
        const NewPosition: IGoods = {
            id: `${PosotionId}`,
            img: `${PosotionImg}`,
            name: `${PosotionName}`,
            sizeName: `${PosotionSizeName}`,
            sizeValue: `${PosotionSizeValue}`,
            maker: `${PosotionMaker}`,
            brend: `${PosotionBrend}`,
            description: `${PosotionDescription}`,
            price: PosotionPrice,
            usePlace: [`${PosotionUse}`],
            counter: 1
            
        }
        dispatch(addPosition(NewPosition))
    }
    return (
        <div className="admin__box">
            <div className="admin__position">
                <label htmlFor='admin__id'> Штрихкод: </label>
                <input type="text" className="admin__input" id='admin__id' data-testid='admin__id' value={PosotionId} onChange={(e) => setPosotionId(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__img'> Ссылка на картинку: </label>
                <input type="text" className="admin__input" id='admin__img' data-testid='admin__img' value={PosotionImg} onChange={(e) => setPosotionImg(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__name'> Название: </label>
                <input type="text" className="admin__input" id='admin__name' data-testid='admin__name' value={PosotionName} onChange={(e) => setPosotionName(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__sizeName'> Вид измерения: </label>
                <input type="text" className="admin__input" id='admin__sizeName' data-testid='admin__sizeName' value={PosotionSizeName} onChange={(e) => setPosotionSizeName(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__sizeValue'> Кол-во: </label>
                <input type="text" className="admin__input" id='admin__sizeValue' data-testid='admin__sizeValue' value={PosotionSizeValue} onChange={(e) => setPosotionSizeValue(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__maker'> Производитель: </label>
                <input type="text" className="admin__input" id='admin__maker' data-testid='admin__maker' value={PosotionMaker} onChange={(e) => setPosotionMaker(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__brend'> Бренд: </label>
                <input type="text" className="admin__input" id='admin__brend' data-testid='admin__brend' value={PosotionBrend} onChange={(e) => setPosotionBrend(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__description'> Описание: </label>
                <input type="text" className="admin__input" id='admin__description' data-testid='admin__description' value={PosotionDescription} onChange={(e) => setPosotionDescription(e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__price'> Цена: </label>
                <input type="number" className="admin__input" id='admin__price' data-testid='admin__price' value={PosotionPrice} onChange={(e) => setPosotionPrice(+e.target.value)} />
            </div>
            <div className="admin__position">
                <label htmlFor='admin__usePlace'> Тип ухода: </label>
                <input type="text" className="admin__input" id='admin__usePlace' data-testid='admin__usePlace'  value={PosotionUse} onChange={(e) => setPosotionUse(e.target.value)} />
            </div>
            <button className='btn' data-testid='addPosition' onClick={NewPosition}> Ввести позицию </button>
        </div>
    );
};

export default AdminBox;