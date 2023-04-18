import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Quantity from '../components/Quantity';
import { Provider } from 'react-redux';
import { store } from '../store/store';


// jest.mock('react-redux')
describe('Проверка работы счетчика:', () => {

    let TestGood = {
        "id": "1",
        "img": "https://ir.ozone.ru/s3/multimedia-c/wc1000/6064608852.jpg",
        "name": "Корейская тканевая маска",
        "sizeName": "вес",
        "sizeValue": "12 гр.",
        "maker": "Южная Корея",
        "brend": "L'OCEAN",
        "description": "Экстракт центеллы заслуженно считается уникальным компонентом, который оказывает на кожу разностороннее благотворное влияние. Он обладает мощным регенерирующим действием, причем и на поверхностном, и на глубинном уровнях. ",
        "price": 35,
        "usePlace": ["Уход за лицом"],
        "counter": 1
    }

    test('Проверка старотого занчения  = 1', () => {
        render(
            <Provider store={store}>
                <Quantity goods={TestGood} key={`Counter ${TestGood.id}`} cartstate={false} />
            </Provider>
        )
        expect(screen.getByTestId('Result')).toHaveValue(1)
    })

    test('Увеличение количества товара', () => {
        render(
            <Provider store={store}>
                <Quantity goods={TestGood} key={`Counter ${TestGood.id}`} cartstate={false} />
            </Provider>
        )
        const Plus = screen.getByTestId('Plus')
        fireEvent.click(Plus)
        expect(screen.getByTestId('Result')).toHaveValue(2)
    })
    test('Уменьшение количества товара', () => {
        render(
            <Provider store={store}>
                <Quantity goods={TestGood} key={`Counter ${TestGood.id}`} cartstate={false} />
            </Provider>
        )
        const Minus = screen.getByTestId('Minus')
        fireEvent.click(Minus)
        expect(screen.getByTestId('Result')).toHaveValue(0)
    })
    test('Проверка запрета на уменьшения количетсва ниже 0', ()=>{
        render(
            <Provider store={store}>
                <Quantity goods={TestGood} key={`Counter ${TestGood.id}`} cartstate={false} />
            </Provider>
        )
        const Minus = screen.getByTestId('Minus')
        fireEvent.click(Minus)
        expect(screen.getByTestId('Result')).not.toHaveValue(-1)
    })
})

