import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showType } from './type';



const UpFilter: FC = () => {


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

    const FilterUl1 = () => {
        dispatch({ type: "FilterUl1" })
    }
    const FilterUl1Show = useSelector<showType>(state => state.showFilterUl1)
    const ShowClassUl1 = FilterUl1Show ? 'showUl' : 'hide'

    const FilterUl2 = () => {
        dispatch({ type: "FilterUl2" })
    }
    const FilterUl2Show = useSelector<showType>(state => state.showFilterUl2)
    const ShowClassUl2 = FilterUl2Show ? 'showUl' : 'hide'

    const FilterUl3 = () => {
        dispatch({ type: "FilterUl3" })
    }
    const FilterUl3Show = useSelector<showType>(state => state.showFilterUl3)
    const ShowClassUl3 = FilterUl3Show ? 'showUl' : 'hide'

    const FilterUl4 = () => {
        dispatch({ type: "FilterUl4" })
    }
    const FilterUl4Show = useSelector<showType>(state => state.showFilterUl4)
    const ShowClassUl4 = FilterUl4Show ? 'showUl' : 'hide'

    const FilterUl5 = () => {
        dispatch({ type: "FilterUl5" })
    }
    const FilterUl5Show = useSelector<showType>(state => state.showFilterUl5)
    const ShowClassUl5 = FilterUl5Show ? 'showUl' : 'hide'

    const FilterUl6 = () => {
        dispatch({ type: "FilterUl6" })
    }
    const FilterUl6Show = useSelector<showType>(state => state.showFilterUl6)
    const ShowClassUl6 = FilterUl6Show ? 'showUl' : 'hide'

    const FilterUl7 = () => {
        dispatch({ type: "FilterUl7" })
    }
    const FilterUl7Show = useSelector<showType>(state => state.showFilterUl7)
    const ShowClassUl7 = FilterUl7Show ? 'showUl' : 'hide'

    const FilterUl8 = () => {
        dispatch({ type: "FilterUl8" })
    }
    const FilterUl8Show = useSelector<showType>(state => state.showFilterUl8)

    const ShowClassUl8 = FilterUl8Show ? 'showUl' : 'hide'
    const FilterUlAll = () => {
        dispatch({ type: "FilterUlAll" })
    }

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
                <li className={`${ShowClassUl1}`} onClick={FilterUl1}>Уход
                    за телом</li>
                <li className={`${ShowClassUl2}`} onClick={FilterUl2}>Уход
                    за руками</li>
                <li className={`${ShowClassUl3}`} onClick={FilterUl3}>Уход
                    за ногами</li>
                <li className={`${ShowClassUl4}`} onClick={FilterUl4}>Уход
                    за лицом</li>
                <li className={`${ShowClassUl5}`} onClick={FilterUl5}>Уход
                    за волосами</li>
                <li className={`${ShowClassUl6}`} onClick={FilterUl6}>Средства
                    для загара</li>
                <li className={`${ShowClassUl7}`} onClick={FilterUl7}>Средства
                    для бритья</li>
                <li className={`${ShowClassUl8}`} onClick={FilterUl8}>Подарочные
                    наборы</li>
                <li className="showUl" onClick={FilterUlAll}>Вся
                    продукция</li>
            </ul>
        </div >
    );
};
export default UpFilter;