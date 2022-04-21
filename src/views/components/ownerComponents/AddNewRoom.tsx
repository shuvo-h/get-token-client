import React, { useState } from 'react';

const roomStatus = ["booked","available"]

type addRoomType = {
    hotel_id: string,
    room_no: string,
    hotelName: string,
    status: string,
    rent: number,
    room_imgs: {uri:string,title:string,id: string}[]
    romm_floor: number,
    bed: number,
    tv: string,
    internate: string,
    other_facilities: string[],
    room_service: string
}

const addRoom = {
    hotel_id: "df54fdg2547ght",
    hotelName: "Abul Khayer hotel",
    room_no: "f-5020",
    status: "booked",
    rent: 500,
    room_imgs: [], // no need to get insert
    romm_floor: 5,
    bed: 2,
    tv: "Yes",
    internate: "No",
    other_facilities: ["Own Electric support","Doctor facility upon call with extra fees","Resturant on ground floor","Car parking facility"],
    room_service: "Once per day"
}

const AddNewRoom = () => {
    const [newRoom,setNewRoom] = useState<addRoomType>({} as addRoomType);
    const handleRoomInputChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) =>{
        if (e.target.name === "room_no" || e.target.name === "status" || e.target.name === "tv"||e.target.name === "internate"||e.target.name === "room_service") {
            const _newRoom = {...newRoom}
            _newRoom[e.target.name] = e.target.value;
            setNewRoom(_newRoom);
        }else if (e.target.name === "other_facilities") {
            const _newRoom = {...newRoom}
             _newRoom.other_facilities = [...newRoom.other_facilities,e.target.value];
            setNewRoom(_newRoom);
        }else if ( e.target.name === "rent" || e.target.name === "romm_floor" ||  e.target.name === "bed") {
            const _newRoom = {...newRoom}
            _newRoom[e.target.name] = parseInt(e.target.value);
            setNewRoom(_newRoom);
        }
    }

    const submitNewRoomHandler = () =>{
        
    }

    return (
        <div>
            AddNewRoom
            <form>
                <label htmlFor="">Hotel Name:</label>
                <input onChange={e=>handleRoomInputChange(e)} type="text" name='hotelName' value={addRoom.hotelName} />

                <label htmlFor="">Hotel ID:</label>
                <input onChange={e=>handleRoomInputChange(e)} type="text" name='hotel_id' value={addRoom.hotel_id} />

                <label htmlFor="">Room No:</label>
                <input onChange={e=>handleRoomInputChange(e)} type="text" name='room_no' />


                <select style={{width:"500px"}} className='ml-2 border-2 border-solid block' name="status" defaultValue={"select status"} id="" onChange={e=>handleRoomInputChange(e)}>
                    <option value={"select status"} disabled>Room Status</option>
                    {
                        roomStatus.map((rmStatus:string,id:number)=><option value={rmStatus} key={id}>{rmStatus}</option>)
                    }
                </select>

                <label htmlFor="">Rent:</label>
                <input onChange={e=>handleRoomInputChange(e)} type="number" name='rent' />

                <label htmlFor="">Floor No:</label>
                <input onChange={e=>handleRoomInputChange(e)} type="number" name='romm_floor' />

                <label htmlFor="">Bed:</label>
                <input onChange={e=>handleRoomInputChange(e)} type="number" name='bed' />

                <label htmlFor="">TV:</label>
                <input onChange={e=>handleRoomInputChange(e)} type="text" name='tv' />

                <label htmlFor="">Internet:</label>
                <input onChange={e=>handleRoomInputChange(e)} type="text" name='internate' />

                <label htmlFor="">Other Facilities:</label>
                <input onChange={e=>handleRoomInputChange(e)} type="text" name='other_facilities'/>

                <label htmlFor="">Services:</label>
                <input onChange={e=>handleRoomInputChange(e)} type="text" name='room_service' />
            </form>
        </div>
    );
};

export default AddNewRoom;