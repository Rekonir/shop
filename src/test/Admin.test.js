import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Admin from '../components/Admin';
import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../store/store';


describe('Удаление товаров из каталога через Админку:', () => {

    test('Проверка количества товаров в каталоге', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Admin />
                </Provider>
            </MemoryRouter>
        )
        expect(screen.getAllByTestId('GoodsAdmin')).toHaveLength(20);
    })
    test('Удаление элемента', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Admin />
                </Provider>
            </MemoryRouter>
        )
        const Del = screen.getAllByTestId('Del')
        fireEvent.click(Del[0]);
        expect(screen.getAllByTestId('GoodsAdmin')).toHaveLength(19);
    })
})
describe('Дабовление товара в каталог', () => {
    test('Ввод данных о новом товаре', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Admin />
                </Provider>
            </MemoryRouter>
        )
        expect(screen.getAllByTestId('GoodsAdmin')).toHaveLength(19);

        const PositionId = screen.getByTestId('admin__id')
        PositionId.values = '42'

        const PositionImg = screen.getByTestId('admin__img')
        PositionImg.values = 'https://testing-library.com/img/octopus-64x64.png'

        const PositionName = screen.getByTestId('admin__name')
        PositionName.values = 'Jest-Test'

        const PositionSizeName = screen.getByTestId('admin__sizeName')
        PositionSizeName.values = 'Вес'

        const PositionSizeValue = screen.getByTestId('admin__sizeValue')
        PositionSizeValue.values = '10000 гр.'

        const PositionMaker = screen.getByTestId('admin__maker')
        PositionMaker.values = 'Франция'

        const PositionBrend = screen.getByTestId('admin__brend')
        PositionBrend.values = 'JS'

        const PositionDescription = screen.getByTestId('admin__description')
        PositionDescription.values = 'Jest-test to add position to Catalog from AdminBox'

        const PositionPrice = screen.getByTestId('admin__price')
        PositionPrice.values = 541236987

        const PositionUse = screen.getByTestId('admin__usePlace')
        PositionUse.values = 'Уход за руками'

        const NewPosition = {
            id: `${PositionId.values}`,
            img: `${PositionImg.values}`,
            name: `${PositionName.values}`,
            sizeName: `${PositionSizeName.values}`,
            sizeValue: `${PositionSizeValue.values}`,
            maker: `${PositionMaker.values}`,
            brend: `${PositionBrend.values}`,
            description: `${PositionDescription.values}`,
            price: PositionPrice.values,
            usePlace: [`${PositionUse.values}`],
            counter: 1
        }
        const ControlPosition = {
            id: '42',
            img: 'https://testing-library.com/img/octopus-64x64.png',
            name: 'Jest-Test',
            sizeName: 'Вес',
            sizeValue: '10000 гр.',
            maker: 'Франция',
            brend: 'JS',
            description: 'Jest-test to add position to Catalog from AdminBox',
            price: 541236987,
            usePlace: ['Уход за руками'],
            counter: 1
        }
        expect(NewPosition).toEqual(ControlPosition)

    })
    test('Проверка добавления в каталог', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Admin />
                </Provider>
            </MemoryRouter>
        )
        const AddPosition = screen.getByTestId('addPosition')
        fireEvent.click(AddPosition)
        expect(screen.getAllByTestId('GoodsAdmin')).toHaveLength(20);
    })

})