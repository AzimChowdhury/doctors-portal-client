import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import bg from '../../assets/images/appointment.png';
import MainButton from '../Shared/MainButton';
import { Link } from 'react-router-dom'

const Appointment = () => {
    return (
        <div className='grid grid-cols-2 gap-10 px-12 mt-44 mb-24' style={{ backgroundImage: `url(${bg})` }} >
            <div>
                <img className='-mt-24 ml-10' style={{ height: '500px', width: '550px' }} src={doctor} alt="" />
            </div>
            <div className='mt-16 pr-10 text-white'>
                <h4 className='text-xl font-semibold pt-4'>Appointment</h4>
                <h2 className='text-3xl font-semibold pt-4'>Make an appointment today</h2>
                <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eaque repellat repellendus dolore libero laudantium commodi eius eos nihil, consectetur a aliquid, vel optio corrupti nesciunt ut non perferendis. Est!</p>
                <Link to='/appointment'><MainButton></MainButton></Link>
                <button></button>
            </div>
        </div>
    );
};

export default Appointment;