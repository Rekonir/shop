import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer';


describe('Проверка наличия в Подвале:', () => {
    test('Описания', () => {
        render(<Footer />)
        const Descrioption = screen.getByTestId('CompanyDiscription')
        expect(Descrioption).toBeInTheDocument()
    })
    test('Прайса', () => {
        render(<Footer />)
        const Price = screen.getByText('Скачать прайс-лист:')
        expect(Price).toBeInTheDocument()
    })
})
 