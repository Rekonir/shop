import React, { FC } from 'react';
import LogoImg from '../assets/logo white.svg'
import LogoImg1 from '../assets/logo1 white.svg'
import LogoImgC from '../assets/logo c white.svg'
import LogoImgY from '../assets/logo y white.svg'
import LogoImgL from '../assets/logo l white.svg'
import LogoImgT from '../assets/logo t white.svg'
import LogoImgA from '../assets/logo a white.svg'
import LogoImgN from '../assets/logo n white.svg'




const WhiteLogoBox: FC = () => {

    return (
        <div className="logo__box">
            <img className='logo' src={LogoImg} alt='логотип'></img>
            <img className='logo1' src={LogoImg1} alt='логотип'></img>
            <img className='logo2' src={LogoImg1} alt='логотип'></img>
            <div className="logo__name">
                <img className='logo' src={LogoImgC} alt='логотип'></img>
                <img className='logo' src={LogoImgY} alt='логотип'></img>
                <img className='logo' src={LogoImgL} alt='логотип'></img>
                <img className='logo' src={LogoImgT} alt='логотип'></img>
                <img className='logo' src={LogoImgA} alt='логотип'></img>
                <img className='logo' src={LogoImgN} alt='логотип'></img>
            </div>
        </div>
    )

}

export default WhiteLogoBox;