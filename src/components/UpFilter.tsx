import React from 'react';

const UpFilter = () => {
    return (
        <div className='UpFilter'>
            <div className="UpFilter__sort">
                <h1 className="Page__header">Косметика и гигиена</h1>
                <div className="sort">
                    <p>Сортировка:</p>
                    <a href='sad'>Название</a>
                </div>
            </div>

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
        </div>
    );
};

export default UpFilter;