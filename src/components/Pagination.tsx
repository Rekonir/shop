import React, { FC } from 'react';
import { IPagination } from './type';

const Pagination: FC<IPagination> = ({ goodsPerPage, totalGoods, paginate, currentPage }) => {

    const pageNum = []
    for (let i = 1; i <= Math.ceil(totalGoods / goodsPerPage); i++) {
        pageNum.push(i)
    }



    return (
        <div className="Page__num">
            {pageNum.map(number => (
                <div className={currentPage === number ? 'Page__active':"Page__unactive" } key={number} onClick={() => paginate(number)}> {number} </div>

            ))}
        </div>
    );
};

export default Pagination;