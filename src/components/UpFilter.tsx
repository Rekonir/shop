import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showType } from './type';



const UpFilter: FC = () => {

    const State: any = useSelector<showType>(state => state)

    const dispatch = useDispatch()

    const Sort = () => {
        const Sort = document.getElementsByClassName('sort__select')[0] as HTMLSelectElement | null;
        if (Sort.options.selectedIndex === 0) { dispatch({ type: "SotrNameUp" }) }
        if (Sort.options.selectedIndex === 1) { dispatch({ type: "SotrNameDown" }) }
        if (Sort.options.selectedIndex === 2) { dispatch({ type: "SotrPriceUp" }) }
        if (Sort.options.selectedIndex === 3) { dispatch({ type: "SotrPriceDown" }) }
    }
    const UpFilterShow = useSelector<showType>(state => state.UpFilterShow)
    const ShowClass = UpFilterShow ? 'show' : 'hide'
    const FilterUlAll = () => {
        dispatch({ type: "FilterUlAll" })
    }
    const FilterUl = (e) => {
        const targetId = e.target.id
        dispatch({ type: 'FilterUl', payload: { targetId } })
    }
    const IdsUlShow = State.ChooseUl.length === 0 ? State.AllUl : State.ChooseUl


    return (
        <div className={`UpFilter ${ShowClass}`}>
            <div className="map__nav">
                <ul>
                    <li>Главная</li>
                    <li >Косметика и гигиена</li>
                </ul>
            </div>
            <div className="UpFilter__sort">
                <h1 className="Page__header">Косметика и гигиена</h1>
                <h2 className='Page__subheader'> ПОДБОР ПО ПАРАМЕТРАМ </h2>
                <div className="sort">
                    <label> Сортировка: </label>
                    <select className='sort__select' onChange={Sort}>
                        <option value='SotrNameUp'>от А до Я</option>
                        <option value='SotrNameDown'>от Я до А</option>
                        <option value='SotrPriceUp'>увеличение цены</option>
                        <option value='SotrPriceDown'>уменьшение цены</option>


                    </select>
                </div >
            </div >

            <ul className="Filter__list">
                <li className={IdsUlShow.includes('Уход за телом') ? 'showUl' : 'hide'} id='Уход за телом' onClick={FilterUl}>Уход
                    за телом</li>
                <li className={IdsUlShow.includes('Уход за руками') ? 'showUl' : 'hide'} id='Уход за руками' onClick={FilterUl}>Уход
                    за руками</li>
                <li className={IdsUlShow.includes('Уход за ногами') ? 'showUl' : 'hide'} id='Уход за ногами' onClick={FilterUl}>Уход
                    за ногами</li>
                <li className={IdsUlShow.includes('Уход за лицом') ? 'showUl' : 'hide'} id='Уход за лицом' onClick={FilterUl}>Уход
                    за лицом</li>
                <li className={IdsUlShow.includes('Уход за волосами') ? 'showUl' : 'hide'} id='Уход за волосами' onClick={FilterUl}>Уход
                    за волосами</li>
                <li className={IdsUlShow.includes('Средства для загара') ? 'showUl' : 'hide'} id='Средства для загара' onClick={FilterUl}>Средства
                    для загара</li>
                <li className={IdsUlShow.includes('Средства для бритья') ? 'showUl' : 'hide'} id='Средства для бритья' onClick={FilterUl}>Средства
                    для бритья</li>
                <li className={IdsUlShow.includes('Подарочные наборы') ? 'showUl' : 'hide'} id='Подарочные наборы' onClick={FilterUl}>Подарочные
                    наборы</li>
                <li className="showUl" onClick={FilterUlAll}>Вся
                    продукция</li>
            </ul>
        </div >
    );
};
export default UpFilter;