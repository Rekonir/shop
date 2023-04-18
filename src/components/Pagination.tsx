import React, { FC } from 'react';
import { IPagination } from './type';

const Pagination: FC<IPagination> = ({ maxPage, paginate, currentPage }) => {
    
    const pageNum = []
    for (let i = 1; i <= maxPage; i++) {
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