import { IGoods } from "../../components/type";

export const addToCart = (goods: IGoods, counter: number) => ({
	type: 'addToCart',
	payload: { goods, counter },
})
export const removeFromCart = (goodsId: string) => ({
	type: 'delFormCart',
	payload: goodsId,
})
export const addPosition = (PosotionId: string, PosotionName: string, PosotionImg: string, PosotionSizeName: string, PosotionSizeValue: string, PosotionMaker: string, PosotionBrend: string, PosotionDescription: string, PosotionPrice: number, PosotionUse: string)  => ({
	type: 'addPosition',
	payload: PosotionId, PosotionName, PosotionImg, PosotionSizeName, PosotionSizeValue, PosotionMaker, PosotionBrend, PosotionDescription, PosotionPrice, PosotionUse,
})
export const removeFromData = (goodsId: string) => ({
	type: 'delFormData',
	payload: goodsId,
})