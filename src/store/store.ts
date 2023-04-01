import { createStore } from "redux";
import { FilterGoodsData } from "../components/SideMenu";
import { showType } from "../components/type";
import GoodsData from '../GoodsData.json'


const defShow: showType = {
    CartShow: false,
    CatatlodShow: true,
    ThaksShow: false,
    chengeCatalog: GoodsData,
    CartPool: []

}
export const ShowReduser = (state = defShow, action: any) => {
    switch (action.type) {
        case "CartShow":
            return { ...state, CartShow: !state.CartShow, CatatlodShow: !state.CatatlodShow }
        case "CatatlodShow":
            return { ...state, CatatlodShow: !state.CatatlodShow, CartShow: !state.CartShow, }
        case "ThaksShow":
            return { ...state, ThaksShow: !state.ThaksShow, }
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
            return { ...state, chengeCatalog: sortUPtice}

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

        default:
            return state


    }

}

export const store = createStore(ShowReduser)


