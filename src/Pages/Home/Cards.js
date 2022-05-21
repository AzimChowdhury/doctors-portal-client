import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import Card from './Card';


const Cards = () => {
    const menu = [
        { _id: 1, bgColor: 'bg-primary', name: 'Opening Hours', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', image: `${clock}` },
        { _id: 2, bgColor: 'bg-accent', name: 'Visit our location', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', image: `${marker}` },
        { _id: 3, bgColor: 'bg-secondary', name: 'Contact us', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', image: `${phone}` }
    ];
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 px-16'>
            {
                menu.map(item => <Card
                    key={item._id}
                    menu={item}
                ></Card>)
            }
        </div>
    );
};

export default Cards;