import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import GoodsPage from '../components/GoodsPage'
import Header from '../components/Header'
import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('Проверка работоспособности Routes:', () => {

    test('Переход на админку', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>
        )

        const AdminBtn = screen.getAllByTestId('AdminBtn')
        fireEvent.click(AdminBtn[0])
        expect(screen.getByTestId('AdminRoute')).toBeInTheDocument();
    })
})
describe('Добавление товара в корзину с каталога', () => {

    test('Открытие каталога', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>)
        const CatalogBtn = screen.getByTestId('CatalogBtn')
        fireEvent.click(CatalogBtn)
        expect(screen.getByTestId('CatalogRoute')).toBeInTheDocument()
    })
    test('Добавление товара в корзину', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>)
        const addToCart1 = screen.getByTestId('addToCart 1')
        fireEvent.click(addToCart1)
        expect(screen.getByTestId('PositionInCart')).toHaveTextContent('1');
    })
    test('Проверка каунтера корзины', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>)
        const addToCart1 = screen.getByTestId('addToCart 1')
        fireEvent.click(addToCart1)
        expect(screen.getByTestId('PositionInCart')).not.toHaveTextContent('2');
    })
})
describe('Добавление товара в корзину со страницы товара', () => {
    test('Переход на страницу товара', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>)
        const GoodBtn = screen.getAllByTestId('GoodsPageBtn')
        fireEvent.click(GoodBtn[0])
        expect(screen.getByText(/В наличии/i)).toBeInTheDocument();
    })
    test('Выбор 10 товаров', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <GoodsPage />
                </Provider>
            </MemoryRouter>)

        const Plus = screen.getByTestId('Plus')
        fireEvent.click(Plus) //2
        fireEvent.click(Plus) //3
        fireEvent.click(Plus) //4
        fireEvent.click(Plus) //5
        fireEvent.click(Plus) //6
        fireEvent.click(Plus) //7
        fireEvent.click(Plus) //8
        fireEvent.click(Plus) //9
        fireEvent.click(Plus) //10
        expect(screen.getByTestId('Result')).toHaveValue(10)
    })
    test('Добавление 10 товаров в корзину', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Header />
                    <GoodsPage />
                </Provider>
            </MemoryRouter>)



        const Result = screen.getByTestId('Result')
        Result.values = 10
        const addToCartBtn = screen.getByTestId('addToCart')
        fireEvent.click(addToCartBtn)
        expect(screen.getByText('350 ₽')).toBeInTheDocument()
    })

})