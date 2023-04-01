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
}
export interface IGoodsItem {
    goods: IGoods
}
export interface ICartItem extends IGoods {
    count: number
}
export type showType = {
    CartShow?: boolean,
    CatatlodShow?: boolean,
    ThaksShow?: boolean,
    chengeCatalog?: Array<IGoods>
}

export type checkedState = {
    
    RusChecked?: boolean,
    KorChecked?: boolean,
    FrChecked?: boolean,
}