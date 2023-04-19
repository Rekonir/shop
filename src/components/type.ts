import { Dispatch, SetStateAction } from "react"

export interface IGoods {
    id: string,
    img: string,
    name: string,
    sizeName: string,
    sizeValue: string,
    maker: string,
    brend: string,
    description: string,
    price: number,
    usePlace: string[]
    counter: number
}
export interface IGoodsItem {
    goods: IGoods,
    onChangeCatalog?: any
}
export interface ICartItem extends IGoods {
    counter: number
}
export type showType = {
    UpFilterShow?: boolean,
    GoodsPageShow?: boolean,
    GoodsPageId?: string,
    CartShow?: boolean,
    CatatlodShow?: boolean,
    ThaksShow?: boolean,
    chengeCatalog?: Array<IGoods>
    CartPool?: Array<IGoods>
    ShowAdmin?: boolean,
    CheckBoxList?: Array<string>,
    priceFilter?: [number, number]
    CheckBox?: Object,
    FilterDelState?: boolean,
    showFilterUl1?: boolean,
    showFilterUl2?: boolean,
    showFilterUl3?: boolean,
    showFilterUl4?: boolean,
    showFilterUl5?: boolean,
    showFilterUl6?: boolean,
    showFilterUl7?: boolean,
    showFilterUl8?: boolean,
}
export type checkedState = {

    RusChecked?: boolean,
    KorChecked?: boolean,
    FrChecked?: boolean,
}
export interface IQuantity {
    counter?: number
    setCount?: TypeSetState<number>
    key?: string
    goods?: IGoods,
    cartstate: boolean
}
export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IPagination {
    maxPage: number,
    paginate: any,
    currentPage: number
}
export interface ICheckbox {
    boxName: string,

}
