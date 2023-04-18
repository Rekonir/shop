import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import BLogoImg from '../assets/logo.svg'
import BLogoImg1 from '../assets/logo1.svg'
import BLogoImgC from '../assets/logo c.svg'
import BLogoImgY from '../assets/logo y.svg'
import BLogoImgL from '../assets/logo l.svg'
import BLogoImgT from '../assets/logo t.svg'
import BLogoImgA from '../assets/logo a.svg'
import BLogoImgN from '../assets/logo n.svg'
import { useDispatch } from 'react-redux';




const BlackLogoBox: FC = () => {

    const dispatch = useDispatch()
    const ShowCatalogBtn = () => {
        dispatch({ type: "CatatlodShow" });
    }

    return (
        <Link to='/' className="logo__box" onClick={ShowCatalogBtn} data-testid='CatalogBtn'>
            <img className='logo' src={BLogoImg} alt='логотип'></img>
            <img className='logo1' src={BLogoImg1} alt='логотип'></img>
            <img className='logo2' src={BLogoImg1} alt='логотип'></img>
            <div className="logo__name">
                <img className='logo' src={BLogoImgC} alt='логотип'></img>
                <img className='logo' src={BLogoImgY} alt='логотип'></img>
                <img className='logo' src={BLogoImgL} alt='логотип'></img>
                <img className='logo' src={BLogoImgT} alt='логотип'></img>
                <img className='logo' src={BLogoImgA} alt='логотип'></img>
                <img className='logo' src={BLogoImgN} alt='логотип'></img>
            </div>
        </Link>
    )
}

export default BlackLogoBox;