import { createStore } from "redux";
import { FilterGoodsData } from "../components/SideMenu";
import { showType } from "../components/type";
import GoodsData from '../GoodsData.json'


const defShow: showType = {
    UpFilterShow: true,
    GoodsPageShow: false,
    GoodsPageId: "1",
    CartShow: false,
    CatatlodShow: true,
    ThaksShow: false,
    chengeCatalog: GoodsData,
    CartPool: [],
    ShowAdmin: false,
    showFilterUl1: true,
    showFilterUl2: true,
    showFilterUl3: true,
    showFilterUl4: true,
    showFilterUl5: true,
    showFilterUl6: true,
    showFilterUl7: true,
    showFilterUl8: true,
    CheckBoxList: ['Россия', 'Франция', 'Южная Корея'],
    priceFilter: [0, 9999999]

}
export const storeReducer = (state = defShow, action: any) => {
    switch (action.type) {

        case "CartShow":
            return {
                ...state, CartShow: true, CatatlodShow: true, GoodsPageShow: true, UpFilterShow: false
            }
        case "CatatlodShow":
            return {
                ...state, CatatlodShow: true, CartShow: true, GoodsPageShow: true, UpFilterShow: true
            }
        case "ThaksShow":
            return {
                ...state, ThaksShow: !state.ThaksShow, CartPool: [], chengeCatalog: GoodsData, UpFilterShow: true
            }
        case "GoodsPageShow":
            return {
                ...state, GoodsPageShow: true, CartShow: true, CatatlodShow: true, UpFilterShow: false, GoodsPageId: action.payload
            }
        case 'toggleSide':
            return {
                ...state, UpFilterShow: false
            }
        case "chengeCatalog":
            return {
                ...state, chengeCatalog: state.chengeCatalog = FilterGoodsData,
            }
        case "SotrNameUp":
            return {
                ...state, chengeCatalog: state.chengeCatalog.sort((a, b) => a.name.localeCompare(b.name))
            }
        case "SotrNameDown":
            return {
                ...state, chengeCatalog: state.chengeCatalog.sort((a, b) => b.name.localeCompare(a.name))
            }
        case "SotrPriceDown":
            return {
                ...state, chengeCatalog: state.chengeCatalog.sort((a, b) => b.price - a.price)
            }
        case "SotrPriceUp":
            return {
                ...state, chengeCatalog: state.chengeCatalog.sort((a, b) => a.price - b.price)
            }

        case "addToCart": {
            const cart = { ...state }
            const { counter, goods } = action.payload
            const foundProduct = cart.CartPool.find(item => item.id === goods.id)
            if (foundProduct) {
                foundProduct.counter = foundProduct.counter + 1
            } else {
                cart.CartPool.push({
                    ...goods,
                    counter,
                })
            }
            return { ...state, CartPool: cart.CartPool }
        }
        case "addToCartPageGoods": {
            const cart = { ...state }
            const goods = action.payload
            const foundProduct = cart.CartPool.find(item => item.id === goods.id)
            if (foundProduct) {
                foundProduct.counter = goods.counter
            } else {
                cart.CartPool.push({
                    ...goods,
                })
            }
            return { ...state, CartPool: cart.CartPool }
        }
        case "changeCounter": {
            const cart = { ...state }
            const { newCounter, goods, cartstate } = action.payload
            const ChangeGood = GoodsData.find(item => item.id === goods.id)
            ChangeGood.counter = newCounter
            let GoodsInCart = cart.CartPool.find(item => item.id === goods.id)

            if (cartstate) {
                if (GoodsInCart) {
                    GoodsInCart.counter = ChangeGood.counter
                } else {
                    GoodsInCart = ChangeGood
                    cart.CartPool.push({
                        ...goods,
                        newCounter,
                    })
                }
                return { ...state, CartPool: cart.CartPool }
            } else {
                const ChangeGood = GoodsData.find(item => item.id === goods.id)
                ChangeGood.counter = newCounter
                return { ...state, CartPool: cart.CartPool }

            }

        }
        case "delFromCart": {
            return { ...state, CartPool: state.CartPool.filter(item => item.id !== action.payload) }
        }
        case "delFromData": {
            return { ...state, chengeCatalog: state.chengeCatalog.filter(item => item.id !== action.payload) }
        }
        case "addPosition": {
            const NewPosition = action.payload
            state.chengeCatalog.push(NewPosition)
            return { ...state, chengeCatalog: state.chengeCatalog }
        }

        case "CangeCheckBoxList": {
            const NewCheckBoxList =  ['Россия', 'Франция', 'Южная Корея'].filter(item => item === action.payload)
            return { ...state, CheckBoxList: NewCheckBoxList }
        }
        case "allCheckbox": {
            const NewCheckBoxList =  ['Россия', 'Франция', 'Южная Корея']
            return { ...state, CheckBoxList: NewCheckBoxList }
        }

        case 'FilterUl1': {
            return { ...state, chengeCatalog: state.chengeCatalog.filter(item => item.usePlace.includes('Уход за телом')), showFilterUl1: true, showFilterUl2: false, showFilterUl3: false, showFilterUl4: false, showFilterUl5: false, showFilterUl6: false, showFilterUl7: false, showFilterUl8: false, }
        }
        case 'FilterUl2': {
            return { ...state, chengeCatalog: state.chengeCatalog.filter(item => item.usePlace.includes('Уход за рукам')), showFilterUl2: true, showFilterUl1: false, showFilterUl3: false, showFilterUl4: false, showFilterUl5: false, showFilterUl6: false, showFilterUl7: false, showFilterUl8: false, }
        }
        case 'FilterUl3': {
            return { ...state, chengeCatalog: state.chengeCatalog.filter(item => item.usePlace.includes('Уход за ногами')), showFilterUl3: true, showFilterUl2: false, showFilterUl1: false, showFilterUl4: false, showFilterUl5: false, showFilterUl6: false, showFilterUl7: false, showFilterUl8: false, }
        }
        case 'FilterUl4': {
            return { ...state, chengeCatalog: state.chengeCatalog.filter(item => item.usePlace.includes('Уход за лицом')), showFilterUl4: true, showFilterUl2: false, showFilterUl3: false, showFilterUl1: false, showFilterUl5: false, showFilterUl6: false, showFilterUl7: false, showFilterUl8: false, }
        }
        case 'FilterUl5': {
            return { ...state, chengeCatalog: state.chengeCatalog.filter(item => item.usePlace.includes('Уход за волосами')), showFilterUl5: true, showFilterUl2: false, showFilterUl3: false, showFilterUl4: false, showFilterUl1: false, showFilterUl6: false, showFilterUl7: false, showFilterUl8: false, }
        }
        case 'FilterUl6': {
            return { ...state, chengeCatalog: state.chengeCatalog.filter(item => item.usePlace.includes('Средства для загара')), showFilterUl6: true, showFilterUl2: false, showFilterUl3: false, showFilterUl4: false, showFilterUl5: false, showFilterUl1: false, showFilterUl7: false, showFilterUl8: false, }
        }
        case 'FilterUl7': {
            return { ...state, chengeCatalog: state.chengeCatalog.filter(item => item.usePlace.includes('Средства для бритья')), showFilterUl7: true, showFilterUl2: false, showFilterUl3: false, showFilterUl4: false, showFilterUl5: false, showFilterUl6: false, showFilterUl1: false, showFilterUl8: false, }
        }
        case 'FilterUl8': {
            return { ...state, chengeCatalog: state.chengeCatalog.filter(item => item.usePlace.includes('Подарочные наборы')), showFilterUl8: true, showFilterUl2: false, showFilterUl3: false, showFilterUl4: false, showFilterUl5: false, showFilterUl6: false, showFilterUl7: false, showFilterUl1: false, }
        }
        case 'FilterUlAll': {
            return { ...state, chengeCatalog: GoodsData, showFilterUl8: true, showFilterUl2: true, showFilterUl3: true, showFilterUl4: true, showFilterUl5: true, showFilterUl6: true, showFilterUl7: true, showFilterUl1: true, }
        }
        default:
            return state


    }

}

export const store = createStore(storeReducer)


