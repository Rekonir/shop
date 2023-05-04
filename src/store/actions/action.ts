import { IGoods } from "../../components/type";

export const addToCart = (goods: IGoods, counter: number) => ({
	type: 'addToCart',
	payload: { goods, counter },
})
export const removeFromCart = (goodsId: string) => ({
	type: 'delFromCart',
	payload: goodsId,
})
export const addPosition = (NewPosition:IGoods)  => ({
	type: 'addPosition',
	payload: NewPosition
})
export const removeFromData = (goodsId: string) => ({
	type: 'delFromData',
	payload: goodsId,
})
