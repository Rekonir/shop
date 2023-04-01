import { createStore } from "redux";
import { FilterGoodsData } from "../components/SideMenu";
import { showType } from "../components/type";
import GoodsData from '../GoodsData.json'


const defShow: showType = {
    CartShow: false,
    CatatlodShow: true,
    ThaksShow: false,
    chengeCatalog: GoodsData,
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
            return {
                ...state, chengeCatalog: state.chengeCatalog = state.chengeCatalog.sort((a, b) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })
            }
        case "SotrNameDown":
            return {
                ...state, chengeCatalog: state.chengeCatalog = state.chengeCatalog.sort((b, a) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })}
        case "SotrPriceUp":
            return { ...state, chengeCatalog: state.chengeCatalog = state.chengeCatalog.sort((a, b) => a.price - b.price), }
        case "SotrPriceDown":
            return { ...state, chengeCatalog: state.chengeCatalog = state.chengeCatalog.sort((a, b) => b.price - a.price) }
        default: 
        console.log(state)
        return state
    }

}

export const store = createStore(ShowReduser)


