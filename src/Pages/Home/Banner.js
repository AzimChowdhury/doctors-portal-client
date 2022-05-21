import React from 'react'
import chair from '../../assets/images/chair.png';
import MainButton from '../Shared/MainButton';
import bannerBg from '../../assets/images/bg.png'

function Banner() {
    return (
        <div style={{ backgroundImage: `url(${bannerBg})` }} className="hero min-h-screen px-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='patients-bed' className="lg:max-w-lg rounded-lg shadow-2xl" />
                <div className='mr-10'>
                    <h1 className="text-5xl font-bold">Your new smile starts here</h1>
                    <p className="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit earum nihil sapiente. Doloremque facere quae rerum animi repellendus corrupti magnam.</p>
                    <MainButton></MainButton>
                </div>
            </div>
        </div>
    )
}

export default Banner;
