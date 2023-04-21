import React, { FC, useState } from 'react';
import SideMenu from './SideMenu';
import GoodsItem from './GoodsItem';
import { TypeState } from './type';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';




const Catalog: FC = () => {

    const State: any = useSelector<TypeState>(state => state)
    const chengeCatalog = State.chengeCatalog

    const [currentPage, setCurrentPage] = useState(1)
    const [goodsPerPage] = useState(10)
    const lastGoodsUndex = currentPage * goodsPerPage
    const firstGoodsUndex = lastGoodsUndex - goodsPerPage
    const currentGoods = chengeCatalog.slice(firstGoodsUndex, lastGoodsUndex)
    const maxPage = Math.ceil(chengeCatalog.length / goodsPerPage)
    const paginate = (pageNum) => {
        setCurrentPage(pageNum)
    }
    const nextPage = () => {
        setCurrentPage(prev => prev < maxPage ? prev + 1 : prev)
    }
    const lastPage = () => {
        setCurrentPage(prev => prev < 2 ? 1 : prev - 1)
    }
    return (
        <div className={`Catalog`} data-testid='CatalogRoute'>
            <SideMenu />
            <div className="Page__goods">
                <div className={`Goods`}>

                    {currentGoods.map(goods => (
                        <GoodsItem goods={goods} key={goods.id} />
                    ))}

                </div>
                <div className={`page__box`}>
                    <button className="page__arrow" onClick={lastPage}> {'<'} </button>
                    <Pagination maxPage={maxPage} currentPage={currentPage} paginate={paginate} />
                    <button className="page__arrow" onClick={nextPage}> {'>'} </button>
                </div>

                <p className={"Page__text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis
                    iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur
                    congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                </p>
            </div >
        </div>
    );

};

export default Catalog;