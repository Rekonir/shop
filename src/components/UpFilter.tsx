import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showType } from './type';



const UpFilter: FC = () => {
    const CatatlodShow = useSelector<showType>(state => state.CatatlodShow)
    console.log(CatatlodShow)
    const ShowClass = CatatlodShow ? 'show' : 'hide'


    const dispatch = useDispatch()

    const Sort = () => {
        dispatch({ type: "SotrNameUp" })
        const Sort = document.getElementsByClassName('sort__select')[0] as HTMLSelectElement | null;
        if (Sort.options.selectedIndex === 0) { dispatch({ type: "SotrNameUp" }); console.log(Sort.options.selectedIndex) }
        if (Sort.options.selectedIndex === 1) { dispatch({ type: "SotrNameDown" }); console.log(Sort.options.selectedIndex) }
        if (Sort.options.selectedIndex === 2) { dispatch({ type: "SotrPriceUp" }); console.log(Sort.options.selectedIndex) }
        if (Sort.options.selectedIndex === 3) { dispatch({ type: "SotrPriceDown" }); console.log(Sort.options.selectedIndex) }
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
                    <select className='sort__select' onClick={Sort}>
                        <option value='SotrNameUp'>от А до Я</option>
                        <option value='SotrNameDown'>от Я до А</option>
                        <option value='SotrPriceUp'>увеличение цены</option>
                        <option value='SotrPriceDown'>уменьшение цены</option>


                    </select>
                </div >
            </div >

            <ul className="Filter__list">
                <li>Уход
                    за телом</li>
                <li>Уход
                    за руками</li>
                <li>Уход
                    за ногами</li>
                <li>Уход
                    за лицом</li>
                <li>Уход
                    за волосами</li>
                <li>Средства
                    для загара</li>
                <li>Средства
                    для бритья</li>
                <li>Подарочные
                    наборы</li>
                <li>Гигиеническая
                    продукция</li>
                <li>Гигиена
                    полости рта</li>
                <li>Бумажная
                    продукция</li>
            </ul>
        </div >
    );
};
export default UpFilter;