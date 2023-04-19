import { createStore } from "redux";
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
    priceFilter: [0, 9999999],
    CheckBox: {
        'Россия': false,
        'Франция': false,
        'Южная Корея': false
    },
    FilterDelState: false,
    FilterUl: "",
    AllUl: [`Уход за телом`, 'Уход за руками', 'Уход за ногами', 'Уход за лицом', 'Уход за волосами', 'Средства для загара', 'Средства для бритья', 'Подарочные наборы'],
    ChooseUl: []

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
            let { FilterGoodsData } = action.payload
            state.chengeCatalog = FilterGoodsData

            return {
                ...state, chengeCatalog: state.chengeCatalog
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
            const NewCheckBoxList = ['Россия', 'Франция', 'Южная Корея'].filter(item => item === action.payload)
            return { ...state, CheckBoxList: NewCheckBoxList }
        }
        case 'CheckBox': {
            const { boxName, NewStateCheckBox } = action.payload
            console.log(action.payload)

            function updateCheckBoxValue(obj, key, newValue) {
                if (obj.hasOwnProperty(key)) {
                    obj[key] = newValue;
                    return;
                }
                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        updateCheckBoxValue(obj[prop], key, newValue);
                    }
                }
            }
            updateCheckBoxValue(state.CheckBox, boxName, NewStateCheckBox)
            console.log(state.CheckBox)
            return { ...state, CheckBox: state.CheckBox }
        }
        case "allCheckbox": {
            const NewCheckBoxList = ['Россия', 'Франция', 'Южная Корея']
            return { ...state, CheckBoxList: NewCheckBoxList }
        }
        case 'DelFilter': {
            const NewCheckBoxList = ['Россия', 'Франция', 'Южная Корея']

            return { ...state, FilterDelState: true, CheckBoxList: NewCheckBoxList }
        }
        case 'rebootDelState': {
            return { ...state, FilterDelState: false }
        }

        case 'FilterUl': {
            const { targetId } = action.payload
            state.ChooseUl.includes(state.AllUl.filter(item => item.includes(targetId))[0]) ? console.log('') : state.ChooseUl.push(state.AllUl.filter(item => item.includes(targetId))[0])
            return { ...state, chengeCatalog: state.chengeCatalog.filter(item => item.usePlace.includes(targetId)), ChooseUl: state.ChooseUl }

        }
        case 'FilterUlAll': {
            return { ...state, chengeCatalog: GoodsData, ChooseUl: [] }

        }
        default:
            return state


    }

}

export const store = createStore(storeReducer)


