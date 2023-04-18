import React, { FC, useState } from 'react';
import brend1 from '../assets/brend1.svg'
import brend2 from '../assets/brend2.svg'
import brend3 from '../assets/brend3.svg'
import brend4 from '../assets/brend4.svg'
import brend5 from '../assets/brend5.svg'
import SearchIcon from '../assets/saerch icon.svg'
import Del from '../assets/del.svg'
import GoodsData from '../GoodsData.json'
import { showType } from './type';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';
import Checkbox from './Checkbox';

export let FilterGoodsData = GoodsData


const DelFilter = () => {
    const Rus = document.getElementById('Россия') as HTMLInputElement | null;
    if (Rus != null) {
        Rus.checked = true;
    }
    const Fr = document.getElementById('Франция') as HTMLInputElement | null;
    if (Fr != null) {
        Fr.checked = true;
    }
    const Kor = document.getElementById('Южная Корея') as HTMLInputElement | null;
    if (Kor != null) {
        Kor.checked = true;
    }

    Rus.checked = false
    Fr.checked = false
    Kor.checked = false
}

const SideMenu: FC = () => {

    const State: any = useSelector<showType>(state => state)
    const CheckBoxList = State.CheckBoxList

    const [MinPrice, setMinPrice] = useState(0)
    const [MaxPrice, setMaxPrice] = useState(99999999)

    const Filter = () => {
        // const FilterGoods: Array<IGoods> = []
        const goods = GoodsData

        for (let i = 0; i < CheckBoxList.length; i++) {
            const box = CheckBoxList.map(boxName => (
                <Checkbox boxName={boxName} key={boxName} />
            ))
            console.log(box)
        }

        FilterGoodsData = goods.filter(item => item.price >= MinPrice && item.price <= MaxPrice)
        chengeCatalog()
        return FilterGoodsData

    }

    const dispatch = useDispatch()
    const chengeCatalog = () => {
        dispatch({ type: "chengeCatalog" });
    }
    const allCheckbox = () => {
        dispatch({ type: "allCheckbox" });
    }

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
        <div className='SideMenu'>
            <div className="SideMenu__filter">
                <h3 className="positions__subheader">
                    ПОДБОР ПО ПАРАМЕТРАМ
                </h3>
                <div className="price__filter">
                    <h4 className="positions__subheader"> Цена ₽ </h4>
                    <div className="price__box">
                        <input className='price__input' type="number" placeholder='0' onChange={e => { setMinPrice(+e.target.value) }} />
                        -
                        <input className='price__input' type="number" placeholder='999999' onChange={e => { setMaxPrice(+e.target.value) }} />
                    </div>
                </div>

                <div className="check__filter">
                    <h4 className="positions__subheader"> Производитель </h4>
                    <Search />

                    {CheckBoxList.map(boxName => (
                        <Checkbox boxName={boxName} key={boxName} />
                    ))}

                    {/* <div className="filter">
                        <input type="checkbox" name="maker" id='Россия' />
                        <label htmlFor='Россия' onClick={RusCheck}>Россия</label>
                    </div>
                    <div className="filter">
                        <input type="checkbox" name="maker" id='Франция' />
                        <label htmlFor='Франция' onClick={FrCheck}>Франция</label>
                    </div>
                    <div className="filter">
                        <input type="checkbox" name="maker" id='Южная Корея' />
                        <label htmlFor='Южная Корея' onClick={KorCheck}>Южная Корея</label>
                    </div> */}
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
                <ul className={`positions ${ShowClassUl1}`} id='Уход за телом' onClick={FilterUl1}>
                    <h3 className='positions__subheader'>Уход за телом</h3>
                    <li>Эпиляция и депиляция</li>
                    <li>Средства для ванны и душа</li>
                    <li>Скрабы, пилинги и пр.</li>
                    <li>Мочалки и губки для тела</li>
                    <li>Кремы, лосьоны, масла</li>
                    <li>Интимный уход</li>
                    <li>Дезодоранты, антиперспиранты</li>
                    <li>Гели для душа</li>
                </ul>
                <ul className={`positions ${ShowClassUl2}`} id='Уход за руками' onClick={FilterUl2}>
                    <h3 className='positions__subheader'>Уход за руками</h3>
                    <li>Увлажнение и питание</li>
                    <li>Средства для ногтей</li>
                    <li>Мыло твердое</li>
                    <li>Мыло жидкое</li>
                    <li>Крем для рук</li>
                    <li>Защита рук</li>
                    <li>Жидкость для снятия лака</li>
                </ul>
                <ul className={`positions ${ShowClassUl3}`} id='Уход за ногами' onClick={FilterUl3}>
                    <h3 className='positions__subheader'>Уход за ногами</h3>
                    <li>Скрабы, пилинги</li>
                    <li>Пилки, ролики</li>
                    <li>Крем для ног</li>
                    <li>Дезодоранты для ног</li>
                </ul>
                <ul className={`positions ${ShowClassUl4}`} id='Уход за лицом' onClick={FilterUl4}>
                    <h3 className='positions__subheader'>Уход за лицом</h3>
                    <li>Тональные средства</li>
                    <li>Средства для снятия макияжа</li>
                    <li>Средства для очищения</li>
                    <li>Маски, скрабы, сыворотки</li>
                    <li>Крем для лица</li>
                    <li>Крем для век</li>
                    <li>Жидкость для снятия макияжа</li>
                    <li>Гигиеническая помада</li>
                </ul>
                <ul className={`positions ${ShowClassUl5}`} id='Уход за волосами' onClick={FilterUl5}>
                    <h3 className='positions__subheader'>Уход за волосами</h3>
                    <li>Шампуни</li>
                    <li>Средства для укладки</li>
                    <li>Средства для окрашивания волос</li>
                    <li>Маски, сыворотки, масла</li>
                    <li>Кондиционеры, бальзамы</li>
                </ul>
                <ul className={`positions ${ShowClassUl6}`} id='Средства для загара' onClick={FilterUl6}>
                    <h3 className='positions__subheader'>Средства для загара</h3>
                    <li>Средства после загара</li>
                </ul>
                <ul className={`positions ${ShowClassUl7}`} id='Средства для бритья' onClick={FilterUl7}>
                    <h3 className='positions__subheader'>Средства для бритья</h3>
                    <li>Станки и кассеты</li>
                    <li>После бритья</li>
                    <li>Для бритья</li>
                </ul>
                <ul className={`positions ${ShowClassUl8}`} id='Подарочные наборы' onClick={FilterUl8}>
                    <h3 className='positions__subheader'>Подарочные наборы</h3>
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