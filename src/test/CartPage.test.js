import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import CartPage from '../components/CartPage'
import { MemoryRouter } from "react-router-dom";
import * as reduxHooks from 'react-redux';
import { expect, jest, test } from '@jest/globals';






jest.mock('react-redux')
const CartData = [
    {
        "id": "14",
        "img": "https://ir.ozone.ru/s3/multimedia-9/wc1000/6152267013.jpg",
        "name": "L'Occitane Verveine Body Lotion Молочко для тела увлажняющее",
        "sizeName": "объем",
        "sizeValue": "250 мл",
        "maker": "Франция",
        "brend": "L'OCEAN",
        "description": " Молочко для тела L'Occitane, обогащенное экстрактом вербены и маслом виноградных косточек, увлажняет и питает кожу, придавая ей приятный и свежий аромат.",
        "price": 2365,
        "usePlace": ["Уход за телом", "Уход за руками"],
        "counter": 5
    },
    {
        "id": "3",
        "img": "https://ir.ozone.ru/s3/multimedia-x/wc1000/6062732949.jpg",
        "name": "NOLLAM LAB Маска для лица",
        "sizeName": "объем",
        "sizeValue": "28 мл",
        "maker": "Южная Корея",
        "brend": "Nollam Lab",
        "description": "Корейская тканевая коллагеновая маска против морщин имеет несколько основных преимуществ: Разглаживает морщины и повышает эластичность кожи. ",
        "price": 60,
        "usePlace": ["Уход за лицом"],
        "counter": 10
    }
]
const testcart = {
    CartShow: true,
    CartPool: CartData,
}
describe('Проверка работоспособности страницы корзины:', () => {
    test('Загрузка товаров в корзину', () => {
        jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(testcart)
       render(
            <MemoryRouter>
                <CartPage />
            </MemoryRouter>
        )

        expect(screen.getAllByTestId('CartGood').length).toBe(2)
    })
    test('Проверка стоимости', () => {
        jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(testcart)
       render(
            <MemoryRouter>
                <CartPage />
            </MemoryRouter>
        )

        expect(screen.getByTestId('TotalPrice').textContent).toBe('12425 ₽')
    })
    
})