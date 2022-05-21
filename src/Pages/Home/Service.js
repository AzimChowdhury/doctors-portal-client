import React from 'react'

function Service({ service }) {
    return (
        <div class="card w-96 bg-base-10 shadow-2xl">
            <figure class="px-10 pt-10">
                <img src={service.image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{service.name}</h2>
                <p>{service.description}</p>

            </div>
        </div>
    )
}

export default Service;
