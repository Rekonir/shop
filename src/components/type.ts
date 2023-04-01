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
    counter?: number
}
export interface IGoodsItem {
    goods: IGoods,
    onChangeCatalog?: any
}
export interface ICartItem extends IGoods {
    count: number
}
export type showType = {
    CartShow?: boolean,
    CatatlodShow?: boolean,
    ThaksShow?: boolean,
    chengeCatalog?: Array<IGoods>
    CartPool?: Array<IGoods>

}

export type checkedState = {

    RusChecked?: boolean,
    KorChecked?: boolean,
    FrChecked?: boolean,
}