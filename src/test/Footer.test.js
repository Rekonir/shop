import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer';
import { store } from '../store/store';
import { Provider } from 'react-redux';



describe('Проверка наличия в Подвале:', () => {
    test('Описания', () => {
        render(
        <Provider store={store}>
            <Footer />
        </Provider>)
        const Descrioption = screen.getByTestId('CompanyDiscription')
        expect(Descrioption).toBeInTheDocument()
    })
    test('Прайса', () => {
        render(
        <Provider store={store}>
            <Footer />
        </Provider>)
        const Price = screen.getByText('Скачать прайс-лист:')
        expect(Price).toBeInTheDocument()
    })
})
