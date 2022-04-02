import React from 'react';
import './InspirationTrip.css'

const trips = [

    {
        id: '01',
        img: 'https://i.ibb.co/jRJ4Mky/dhaka.jpg',
        location: 'Dhaka',
        kilo: "10 kilometers away",
        color: "#c22642"
    },

    {
        id: '02',
        img: 'https://i.ibb.co/5jBf9vb/dinazpur.jpg',
        location: 'Dinajpur',
        kilo: "270 kilometers away",
        color: "#e13e5c"
    },

    {
        id: '03',
        img: 'https://i.ibb.co/nz428h8/chottogram.jpg',
        location: 'Chattogram',
        kilo: "207 kilometers away",
        color: "#ff6669"
    },

    {
        id: '04',
        img: 'https://i.ibb.co/v12vFhK/jossore.jpg',
        location: 'Jossor',
        kilo: "214 kilometers away",
        color: "#ff8566"
    },
]

const InspirationTrip = () => {
    return (
        <div className='px-7 inspration_trip_container'>
            <div className='inspration_trip_banner '>
                <div className='inspration_trip_banner_text'>
                    <div className='pb-7'>
                        <h2 className='fs-xl'>Let Your curiosity do the booking</h2>
                        <div>
                            <button className='mt-10 bg-red-500 border border-transparent text-wgite hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400'
                            >I'm flexible</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='inspration_trip_content'>
                <h2>Inspiration for your next trip</h2>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        trips.map(trip =>
                            <div>
                                <button>
                                    <div key={trip.id} className="inspration_trip_card">
                                        <div >
                                            <img style={{ height: '200px', width: '299px' }} src={trip.img} alt="" />
                                        </div>
                                        <div className='inspration_trip_card_title' style={{ background: trip.color }}>
                                            <h4>{trip.location}</h4>
                                            <p className='text-xl'>{trip.kilo}</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div >
    );
};

export default InspirationTrip;