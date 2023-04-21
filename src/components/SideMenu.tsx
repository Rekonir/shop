import React, { FC, useState } from 'react';
import brend1 from '../assets/brend1.svg'
import brend2 from '../assets/brend2.svg'
import brend3 from '../assets/brend3.svg'
import brend4 from '../assets/brend4.svg'
import brend5 from '../assets/brend5.svg'
import SearchIcon from '../assets/saerch icon.svg'
import Del from '../assets/del.svg'
import GoodsData from '../GoodsData.json'
import { IGoods, TypeState } from './type';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';
import Checkbox from './Checkbox';




const SideMenu: FC = () => {

    const State: any = useSelector<TypeState>(state => state)
    const CheckBoxList = State.CheckBoxList
    const CheckBoxStates = State.CheckBox

    const [MinPrice, setMinPrice] = useState(1)
    const [MaxPrice, setMaxPrice] = useState(999999)

    const Filter = () => {
        let FilterGoodsData: Array<IGoods> = []
        let toPriceFilterGoods: Array<IGoods> = []

        let goods = GoodsData
        let TrueCheckBoxArray = filterTrueKeys(CheckBoxStates)

        for (let i = 0; i < goods.length; i++) {
            const even = (element) => element === goods[i].maker;
            if (TrueCheckBoxArray.some(even)) {
                toPriceFilterGoods.push(goods[i])
            }
        }
        if (toPriceFilterGoods.length === 0) { toPriceFilterGoods = goods }
        FilterGoodsData = toPriceFilterGoods.filter(item => item.price >= MinPrice && item.price <= MaxPrice)

        dispatch({ type: "chengeCatalog", payload: { FilterGoodsData } })
        console.log(FilterGoodsData)
        return FilterGoodsData

    }

    function filterTrueKeys(obj) {
        let trueKeys = [];
        for (let key in obj) {
            if (obj[key] === true) {
                trueKeys.push(key);
            }
        }
        return trueKeys;
    }

    const dispatch = useDispatch()
    const allCheckbox = () => {
        dispatch({ type: "allCheckbox" });
    }

    const FilterUlAll = () => {
        dispatch({ type: "FilterUlAll" })
    }

    const DelFilter = () => {
        setMinPrice(1)
        setMaxPrice(999999)
        dispatch({ type: 'DelFilter' })

    }

    const FilterUl = (e) => {
        const targetId = e.target.id
        dispatch({ type: 'FilterUl', payload: { targetId } })
    }
    const IdsUlShow = State.ChooseUl.length === 0 ? State.AllUl : State.ChooseUl

    return (
        <div className='SideMenu'>
            <div className="SideMenu__filter">
                <h3 className="positions__subheader">
                    ПОДБОР ПО ПАРАМЕТРАМ
                </h3>
                <div className="price__filter">
                    <h4 className="positions__subheader"> Цена ₽ </h4>
                    <div className="price__box">
                        <input className='price__input' type="number" value={MinPrice} onChange={e => { setMinPrice(+e.target.value) }} />
                        -
                        <input className='price__input' type="number" value={MaxPrice} onChange={e => { setMaxPrice(+e.target.value) }} />
                    </div>
                </div>

                <div className="check__filter">
                    <h4 className="positions__subheader"> Производитель </h4>
                    <Search />

                    {CheckBoxList.map(boxName => (
                        <Checkbox boxName={boxName} key={boxName} />
                    ))}
                    <div className='more' onClick={allCheckbox}>Показать все</div>
                </div>
                <div className="check__filter">
                    <h4 className="positions__subheader">Бренд</h4>
                    <div className="inp__box">
                        <p> Поиск...</p>
                        <div className="inp__icon">
                            <img src={SearchIcon} alt="Поиск" />
                        </div>
                    </div>
                    <div className="filter">
                        <input type="checkbox" name="brend" id="brend1" />
                        <label htmlFor="brend1">brend 1</label>
                    </div>
                    <div className="filter">
                        <input type="checkbox" name="brend" id="brend2" />
                        <label htmlFor="brend2">brend 2</label>
                    </div>
                    <div className="filter">
                        <input type="checkbox" name="brend" id="brend3" />
                        <label htmlFor="brend3">brend 3</label>
                    </div>
                    <div className='more'>Показать все</div>
                </div>
                <div className="SideMenu__btns">
                    <div className="btn" onClick={Filter}>
                        <p>Показать</p>
                    </div>
                    <div className="btn__del" onClick={DelFilter}>
                        <img src={Del} alt="удаление" />
                    </div>
                </div>

            </div>
            <div className="SideMenu__positions">
                <ul className={`positions ${IdsUlShow.includes('Уход за телом') ? 'showUl' : 'hide'}`} >
                    <h3 className='positions__subheader' id='Уход за телом' onClick={FilterUl}>Уход за телом</h3>
                    <li>Эпиляция и депиляция</li>
                    <li>Средства для ванны и душа</li>
                    <li>Скрабы, пилинги и пр.</li>
                    <li>Мочалки и губки для тела</li>
                    <li>Кремы, лосьоны, масла</li>
                    <li>Интимный уход</li>
                    <li>Дезодоранты, антиперспиранты</li>
                    <li>Гели для душа</li>
                </ul>
                <ul className={`positions ${IdsUlShow.includes('Уход за руками') ? 'showUl' : 'hide'}`} >
                    <h3 className='positions__subheader' id='Уход за руками' onClick={FilterUl}>Уход за руками</h3>
                    <li>Увлажнение и питание</li>
                    <li>Средства для ногтей</li>
                    <li>Мыло твердое</li>
                    <li>Мыло жидкое</li>
                    <li>Крем для рук</li>
                    <li>Защита рук</li>
                    <li>Жидкость для снятия лака</li>
                </ul>
                <ul className={`positions ${IdsUlShow.includes('Уход за ногами') ? 'showUl' : 'hide'}`}>
                    <h3 className='positions__subheader' id='Уход за ногами' onClick={FilterUl}>Уход за ногами</h3>
                    <li>Скрабы, пилинги</li>
                    <li>Пилки, ролики</li>
                    <li>Крем для ног</li>
                    <li>Дезодоранты для ног</li>
                </ul>
                <ul className={`positions ${IdsUlShow.includes('Уход за лицом') ? 'showUl' : 'hide'}`}>
                    <h3 className='positions__subheader' id='Уход за лицом' onClick={FilterUl}>Уход за лицом</h3>
                    <li>Тональные средства</li>
                    <li>Средства для снятия макияжа</li>
                    <li>Средства для очищения</li>
                    <li>Маски, скрабы, сыворотки</li>
                    <li>Крем для лица</li>
                    <li>Крем для век</li>
                    <li>Жидкость для снятия макияжа</li>
                    <li>Гигиеническая помада</li>
                </ul>
                <ul className={`positions ${IdsUlShow.includes('Уход за волосами') ? 'showUl' : 'hide'}`}>
                    <h3 className='positions__subheader' id='Уход за волосами' onClick={FilterUl}>Уход за волосами</h3>
                    <li>Шампуни</li>
                    <li>Средства для укладки</li>
                    <li>Средства для окрашивания волос</li>
                    <li>Маски, сыворотки, масла</li>
                    <li>Кондиционеры, бальзамы</li>
                </ul>
                <ul className={`positions ${IdsUlShow.includes('Средства для загара') ? 'showUl' : 'hide'}`}>
                    <h3 className='positions__subheader' id='Средства для загара' onClick={FilterUl}>Средства для загара</h3>
                    <li>Средства после загара</li>
                </ul>
                <ul className={`positions ${IdsUlShow.includes('Средства для бритья') ? 'showUl' : 'hide'}`}>
                    <h3 className='positions__subheader' id='Средства для бритья' onClick={FilterUl}>Средства для бритья</h3>
                    <li>Станки и кассеты</li>
                    <li>После бритья</li>
                    <li>Для бритья</li>
                </ul>
                <ul className={`positions ${IdsUlShow.includes('Подарочные наборы') ? 'showUl' : 'hide'}`}>
                    <h3 className='positions__subheader' id='Подарочные наборы' onClick={FilterUl}>Подарочные наборы</h3>
                    <li>Для мужчин</li>
                    <li>Для женщин</li>
                </ul>
                <div className="SideMenu__brend">
                    <img src={brend1} alt="бренд" />
                    <img src={brend2} alt="бренд" />
                    <img src={brend3} alt="бренд" />
                    <img src={brend4} alt="бренд" />
                    <img src={brend5} alt="бренд" />
                    <div className='more' onClick={FilterUlAll}>Показать все</div>
                </div>
            </div>

        </div>

    );
};

export default SideMenu;