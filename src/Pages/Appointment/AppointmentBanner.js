import React from 'react'
import chair from '../../assets/images/chair.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bannerBg from '../../assets/images/bg.png'

function AppointmentBanner({ date, setDate }) {


    return (
        <div style={{ backgroundImage: `url(${bannerBg})` }} className="hero min-h-screen px-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='patients-bed' className="lg:max-w-lg rounded-lg ml-20 shadow-2xl" />
                <div className='mr-10'>
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        inline
                    />
                </div>
            </div>
        </div>
    )
}

export default AppointmentBanner;
