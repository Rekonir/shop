import React, { FC } from 'react';
import SideMenu from './SideMenu';
import GoodsItem from './GoodsItem';
import { showType } from './type';
import { useSelector } from 'react-redux';




const Catalog: FC = () => {
    const chengeCatalog: any = useSelector<showType>(state => state.chengeCatalog)
    console.log(chengeCatalog)


    const CatatlodShow = useSelector<showType>(state => state.CatatlodShow)
    console.log(CatatlodShow)
    const ShowClass = CatatlodShow ? 'show' : 'hide'
    return (
        <div className={`Catalog ${ShowClass}`}>
            <SideMenu />
            <div className="Page__goods">
                <div className='Goods'>
                    {chengeCatalog.map(goods => (
                        <GoodsItem goods={goods} key={goods.id} />
                    ))}

                </div>
                <div className="Page__num">
                    <div className="Page__active"> 1 </div>
                    <div className="Page__unactive"> 2 </div>
                    <div className="Page__unactive"> 3 </div>
                    <div className="Page__unactive"> 4 </div>
                    <div className="Page__unactive"> 5 </div>
                </div>
                <p className="Page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
            </div >
        </div>
    );

};

export default Catalog;