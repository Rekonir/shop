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
    ShowAdmin: false

}
export const ShowReduser = (state = defShow, action: any) => {
    switch (action.type) {
        case "CartShow":
            return { ...state, CartShow: true, CatatlodShow: true, GoodsPageShow: true, UpFilterShow: false }
        case "CatatlodShow":
            return { ...state, CatatlodShow: true, CartShow: true, GoodsPageShow: true, UpFilterShow: true }
        case "ThaksShow":
            return { ...state, ThaksShow: !state.ThaksShow, CartPool: [], chengeCatalog: GoodsData, UpFilterShow: true }
        case "GoodsPageShow":
            return { ...state, GoodsPageShow: true, CartShow: true, CatatlodShow: true, UpFilterShow: false, GoodsPageId: action.payload }

        case "chengeCatalog":
            return { ...state, chengeCatalog: state.chengeCatalog = FilterGoodsData, }
        case "SotrNameUp":
            const sortUName = state.chengeCatalog.sort((a, b) => a.name.localeCompare(b.name))
            console.log(sortUName)
            return {
                ...state, chengeCatalog: sortUName
            }
        case "SotrNameDown":
            const sortDName = state.chengeCatalog.sort((a, b) => b.name.localeCompare(a.name))
            console.log(sortDName)
            return {
                ...state, chengeCatalog: sortDName
            }
        case "SotrPriceDown":
            const sortDPtice = state.chengeCatalog.sort((a, b) => b.price - a.price);
            console.log(sortDPtice)
            return { ...state, chengeCatalog: sortDPtice }
        case "SotrPriceUp":
            const sortUPtice = state.chengeCatalog.sort((a, b) => a.price - b.price);
            console.log(sortUPtice)
            return { ...state, chengeCatalog: sortUPtice }

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
            console.log(cart.CartPool)
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
                console.log(cart.CartPool)
                return { ...state, CartPool: cart.CartPool }
            } else {
                const ChangeGood = GoodsData.find(item => item.id === goods.id)
                ChangeGood.counter = newCounter
                console.log('В store', ChangeGood)
                return { ...state, CartPool: cart.CartPool }

            }

        }
        case "delFormCart": {
            return { ...state, CartPool: state.CartPool.filter(item => item.id !== action.payload) }
        }
        case "delFormData": {
            return { ...state, chengeCatalog: state.chengeCatalog.filter(item => item.id !== action.payload) }
        }

        default:
            return state


    }

}

export const store = createStore(ShowReduser)


