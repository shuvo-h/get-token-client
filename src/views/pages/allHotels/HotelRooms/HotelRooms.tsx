import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HotelBookingModal from '../../../components/hotel/HotelBookingModal';

type roomType = {
    hotel_id: string
    room_no: string
    hotelName: string
    status: string
    rent: number
    room_imgs: {uri:string,title:string,id: string}[]
    romm_floor: number
    bed: number
    tv: string
    internate: string
    other_facilities: string[]
    room_service: string
}
const  sample_rooms = [
    {
        hotel_id: "df54fdg2547ght",
        room_no: "f-5020",
        hotelName: "Abul Khayer hotel",
        status: "booked",
        rent: 500,
        room_imgs: [{uri:"img uri",title:"room inside view",id: "fdg4f4g5g4"},{uri:"img uri",title:"room inside view",id: "fdg4f4g5g4"},{uri:"img uri",title:"room inside view",id: "fdg4f4g5g4"}],
        romm_floor: 5,
        bed: 2,
        tv: "Yes",
        internate: "No",
        other_facilities: ["Own Electric support","Doctor facility upon call with extra fees","Resturant on ground floor","Car parking facility"],
        room_service: "Once per day"
    },
    {
        hotel_id: "df54fdg2d547ght",
        room_no: "f-504",
        hotelName: "Abul Khayer hotel",
        status: "booked",
        rent: 500,
        room_imgs: [{uri:"img uri",title:"room inside view",id: "fdg4f4g5g4"},{uri:"img uri",title:"room inside view",id: "fdg4f4g5g4"},{uri:"img uri",title:"room inside view",id: "fdg4f4g5g4"}],
        romm_floor: 5,
        bed: 2,
        tv: "Yes",
        internate: "No",
        other_facilities: ["Own Electric support","Doctor facility upon call with extra fees","Resturant on ground floor","Car parking facility"],
        room_service: "Once per day"
    },
    {
        hotel_id: "dfg5469tfggf2g1f645g",
        room_no: "f-264",
        hotelName: "Abul Khayer hotel",
        status: "booked",
        rent: 500,
        room_imgs: [{uri:"img uri",title:"room inside view",id: "fdg4f4g5g4"},{uri:"img uri",title:"room inside view",id: "fdg4f4g5g4"},{uri:"img uri",title:"room inside view",id: "fdg4f4g5g4"}],
        romm_floor: 5,
        bed: 2,
        tv: "Yes",
        internate: "No",
        other_facilities: ["Own Electric support","Doctor facility upon call with extra fees","Resturant on ground floor","Car parking facility"],
        room_service: "Once per day"
    },
    {
        hotel_id: "fg45fgr5g2458",
        room_no: "g-124",
        hotelName: "Abul Khayer hotel",
        status: "booked",
        rent: 500,
        room_imgs: [{uri:"img uri",title:"room inside view",id: "fdg4f4g5g4"},{uri:"img uri",title:"room inside view",id: "fdg4f4g5g4"},{uri:"img uri",title:"room inside view",id: "fdg4f4g5g4"}],
        romm_floor: 5,
        bed: 2,
        tv: "Yes",
        internate: "No",
        other_facilities: ["Own Electric support","Doctor facility upon call with extra fees","Resturant on ground floor","Car parking facility"],
        room_service: "Once per day"
    },
]


const HotelRooms = () => {
    const {hotelId, roomType} = useParams();
    const [rooms,setRooms] = useState<roomType[]>(sample_rooms);
    const [bookingModalOpen,setBookingModalOpen] = useState<string | null>(null);
    console.log(hotelId, roomType);
    
    return (
        <div className=''>
            <div className='container mx-auto py-3'>
                <div className='grid lg:grid-cols-2 gap-4'>
                    {
                        rooms.map(room=><div className='border shadow p-2 rounded-lg'>
                                <h2 className='text-center font-bold text-xl bg-orange-200 py-1 rounded-lg'>{room.hotelName}</h2>
                                <div className='grid sm:grid-cols-2'>
                                    <div>
                                        {
                                            room.room_imgs.map(img=><img src={img.uri} alt={img.title}></img>)
                                        }
                                    </div>
                                    <div>
                                        <h2 className='text-center'><u>About the Room:</u></h2>
                                        <div className='grid sm:grid-cols-2'>
                                            <p className='text-center my-4'><span className='px-4 py-2 font-bold text-blue-700' style={{backgroundColor:"yellowgreen",borderRadius:"50%"}}>Status: {room.status}</span></p>
                                            <div className='flex justify-center items-center'>
                                                <button  className='px-2 py-1 rounded-lg font-bold text-blue-600 hover:text-blue-800 bg-cyan-100 hover:bg-cyan-200' onClick={()=>setBookingModalOpen(`${room.hotel_id}+${room.room_no}`)}>Book Now</button>
                                                    {
                                                        bookingModalOpen === `${room.hotel_id}+${room.room_no}` && <HotelBookingModal hotelName={room.hotelName} hotel_id={room.hotel_id} room_no={room.room_no} rent={room.rent} setBookingModalOpen={setBookingModalOpen}></HotelBookingModal>
                                                    }
                                            </div>
                                        </div>
                                        
                                        <p>Floor No. {room.romm_floor}</p>
                                        <p>Total Bed: {room.bed}</p>
                                        <p>Television: {room.tv}</p>
                                        <p>Internet: {room.internate}</p>
                                        <p>Room Service: {room.room_service}</p>
                                        <p>Other Facilities:</p>
                                        {
                                            room.other_facilities.map((facility,id)=><p key={id}>{facility}</p>)
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            
        </div>
    );
};

export default HotelRooms;