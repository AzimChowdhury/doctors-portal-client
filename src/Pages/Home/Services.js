import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';



const Services = () => {
    const services = [
        { _id: 1, image: `${fluoride}`, name: 'Fluoride Treatment', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { _id: 2, image: `${cavity}`, name: 'Cavity Filling', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        { _id: 3, image: `${whitening}`, name: 'Teeth Whitening', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
    ]


    return (
        <div className='text-center my-28'>
            <h3 className='text-xl text-primary uppercase font-bold'>Our Services</h3>
            <h1 className='text-3xl font-medium'>Services we provide</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 px-16 my-14'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;