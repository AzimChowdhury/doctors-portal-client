import React from 'react'

function Treatment({ treatment, setTreatmentAvailable }) {
    const { name, slots } = treatment;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-2xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-primary">{name}</h2>
                <p>{slots.length ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} spaces available</p>
                <div class="card-actions">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => { setTreatmentAvailable(treatment) }}
                        class="btn  btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    )
}

export default Treatment;
