import React, { FC, useState } from 'react';
import SideMenu from './SideMenu';
import GoodsItem from './GoodsItem';
import { showType } from './type';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';




const Catalog: FC = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const State: any = useSelector<showType>(state => state)
    const chengeCatalog = State.chengeCatalog
    
    const CatatlodShow = useSelector<showType>(state => state.CatatlodShow)
    const ShowClass = CatatlodShow ? 'show' : 'hide'

    const PageShow = useSelector<showType>(state => state.GoodsPageShow)
    const PageShowClass = PageShow ? 'show' : 'hide'

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
        <div className={`Catalog ${ShowClass}`} data-testid='CatalogRoute'>
            <SideMenu />
            <div className="Page__goods">
                <div className={`Goods ${PageShowClass}`}>
                    {currentGoods.map(goods => (
                        <GoodsItem goods={goods} key={goods.id} />
                    ))}

                </div>
                <div className={`page__box ${PageShowClass}`}>
                    <button className="page__arrow" onClick={lastPage}> {'<'} </button>
                    <Pagination goodsPerPage={goodsPerPage} totalGoods={chengeCatalog.length} currentPage={currentPage} paginate={paginate} />
                    <button className="page__arrow" onClick={nextPage}> {'>'} </button>
                </div>

                <p className={`"Page__text" ${PageShowClass}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis
                    iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur
                    congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                </p>
            </div >
        </div>
    );

};

export default Catalog;