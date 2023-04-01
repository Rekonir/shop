import { IGoods } from "../../components/type";

export const addToCart = (goods: IGoods, counter: number) => ({
	type: 'addToCart',
	payload: { goods},
})