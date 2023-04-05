import React, { FC } from 'react';
import SideMenu from './SideMenu';
import GoodsAdminItem from './GoodsAdminItem';
import { useSelector } from 'react-redux';
import { showType } from './type';
import AdminBox from './AdminBox';

const Admin:FC = () => {
    const State: any = useSelector<showType>(state => state)
    const chengeCatalog =State.chengeCatalog
    return (
        <div className={`Catalog`}>
            <SideMenu />
            <div className="Page__goods">
                <h1 className='Page__header'> Режим Админа</h1>
                <div className='Goods'>
                    <AdminBox />
                    {chengeCatalog.map(goods => (
                        <GoodsAdminItem goods={goods} key={goods.id} />
                    ))}
                </div>
            </div>

        </div>
    );

};
export default Admin;