import React from "react";

type bookingPropType = {
    room_no : string
    hotel_id: string
    hotelName: string
    rent: number
    setBookingModalOpen: React.Dispatch<React.SetStateAction<string | null>>
}


const HotelBookingModal = ({hotel_id,room_no,hotelName,rent,setBookingModalOpen}:bookingPropType) => {
    // console.log(hotel_id, room_no);
    
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0" style={{backgroundColor:"rgba(0,0,0,0.5)",width:"100%", height:"100%"}}>
            <div className="w-fit flex justify-center items-center" style={{width:"100%", height:"100%"}}>
                <div className="bg-white rounded-lg p-10 relative">
                    <button className="absolute right-10 px-2 rounded-md font-bold text-red-600 bg-pink-200 hover:bg-pink-300" onClick={()=>setBookingModalOpen(null)}>X</button>
                    <h2 className="text-center my-2 font-bold text-xl">Complete Your Booking here</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th className="text-right pr-2">Hotel Name:</th>
                                <td>{hotelName}</td>
                            </tr>
                            <tr>
                                <th className="text-right pr-2">Hotel ID:</th>
                                <td>{hotel_id}</td>
                            </tr>
                            <tr>
                                <th className="text-right pr-2">Room Number:</th>
                                <td>{room_no}</td>
                            </tr>
                            <tr>
                                <th className="text-right pr-2">Customer Name:</th>
                                <td><input className="border rounded px-1" type="text" placeholder="type your name here" /></td>
                            </tr>
                            <tr>
                                <th className="text-right pr-2">Payment Amount:</th>
                                <td>${rent}</td>
                            </tr>
                            <tr>
                                <th className="text-right pr-2">Credit Card Number:</th>
                                <td><input type="number" placeholder="type your credit card number" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="border rounded px-2 m-auto block mt-4 bg-sky-200 hover:bg-sky-300 font-semibold">Booking Now</button>
                </div>
            </div>
         </div>
  );
};

export default HotelBookingModal;
