import React, { FC } from 'react';
import { IPagination } from './type';

const Pagination: FC<IPagination> = ({ goodsPerPage, totalGoods, paginate }) => {

    const pageNum = []
    for (let i = 1; i <= Math.ceil(totalGoods / goodsPerPage); i++) {
        pageNum.push(i)
    }



    return (
        <div className="Page__num">
            {pageNum.map(number => (
                <div className="Page__unactive" key={number} onClick={() => paginate(number)}> {number} </div>

            ))}

            {/* 
            <div className="Page__active"> 1 </div>
            <div className="Page__unactive"> 2 </div>
            <div className="Page__unactive"> 3 </div>
            <div className="Page__unactive"> 4 </div>
            <div className="Page__unactive"> 5 </div> */}
        </div>
    );
};

export default Pagination;