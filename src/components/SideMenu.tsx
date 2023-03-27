import React, { FC } from 'react';
import brend1 from '../assets/brend1.svg'
import brend2 from '../assets/brend2.svg'
import brend3 from '../assets/brend3.svg'
import brend4 from '../assets/brend4.svg'
import brend5 from '../assets/brend5.svg'
import SearchIcon from '../assets/saerch icon.svg'
import Del from '../assets/del.svg'



const SideMenu: FC = () => {
    return (

        <div className="SideMenu">
            <div className="SideMenu__filter">
                <h3 className="positions__subheader">
                    ПОДБОР ПО ПАРАМЕТРАМ
                </h3>
                <p> Цена </p>
                <div className="check__filter">
                    <h4 className="positions__subheader"> Производитель </h4>
                    <div className="inp__box">
                        <p> Поиск...</p>
                        <div className="inp__icon">
                            <img src={SearchIcon} alt="Поиск" />
                        </div>
                    </div>
                    <div className="filter">
                        <input type="checkbox" name="maker" id="maker1" />
                        <label htmlFor="maker1">maker 1</label>
                    </div>
                    <div className="filter">
                        <input type="checkbox" name="maker" id="maker2" />
                        <label htmlFor="maker2">maker 2</label>
                    </div>
                    <div className="filter">
                        <input type="checkbox" name="maker" id="maker3" />
                        <label htmlFor="maker3">maker 3</label>
                    </div>
                    <div className='more'>Показать все</div>
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
                        <input type="checkbox" name="maker" id="brend1" />
                        <label htmlFor="brend1">brend 1</label>
                    </div>
                    <div className="filter">
                        <input type="checkbox" name="maker" id="brend2" />
                        <label htmlFor="brend2">brend 2</label>
                    </div>
                    <div className="filter">
                        <input type="checkbox" name="maker" id="brend3" />
                        <label htmlFor="brend3">brend 3</label>
                    </div>
                    <div className='more'>Показать все</div>
                </div>
                <div className="SideMenu__btns">
                    <div className="btn">
                        <p>Показать</p>
                    </div>
                    <div className="btn__del">
                        <img src={Del} alt="удаление" />
                    </div></div>

            </div>
            <div className="SideMenu__positions">
                <ul className='positions'>
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
                <ul className='positions'>
                    <h3 className='positions__subheader'>Уход за руками</h3>
                    <li>Увлажнение и питание</li>
                    <li>Средства для ногтей</li>
                    <li>Мыло твердое</li>
                    <li>Мыло жидкое</li>
                    <li>Крем для рук</li>
                    <li>Защита рук</li>
                    <li>Жидкость для снятия лака</li>
                </ul>
                <ul className='positions'>
                    <h3 className='positions__subheader'>Уход за ногами</h3>
                    <li>Скрабы, пилинги</li>
                    <li>Пилки, ролики</li>
                    <li>Крем для ног</li>
                    <li>Дезодоранты для ног</li>
                </ul>
                <ul className='positions'>
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
                <ul className='positions'>
                    <h3 className='positions__subheader'>Уход за волосами</h3>
                    <li>Шампуни</li>
                    <li>Средства для укладки</li>
                    <li>Средства для окрашивания волос</li>
                    <li>Маски, сыворотки, масла</li>
                    <li>Кондиционеры, бальзамы</li>
                </ul>
                <ul className='positions'>
                    <h3 className='positions__subheader'>Средства для загара</h3>
                    <li>Средства после загара</li>
                </ul>
                <ul className='positions'>
                    <h3 className='positions__subheader'>Средства для бритья</h3>
                    <li>Станки и кассеты</li>
                    <li>После бритья</li>
                    <li>Для бритья</li>
                </ul>
                <ul className='positions'>
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
                    <div className='more'>Показать все</div>
                </div>
            </div>

        </div>

    );
};

export default SideMenu;