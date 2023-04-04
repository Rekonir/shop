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
    ShowAdmin?: boolean

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
    goodsPerPage: number,
    totalGoods: number,
    paginate: any,
    currentPage: number
}