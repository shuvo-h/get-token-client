import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store/store';
import OwnerService from '../../../../services/ownerServices/hotel.service';
import { addNewHotelType } from '../../../../type/hotelType';
import { getOwnerHotelType } from '../../../../type/ownerTypes';
import { hotelFormType } from '../AddNewHotel';
type editHotelPropType = {
    hotel: getOwnerHotelType
}
const EditOwnerHotel = ({hotel}:editHotelPropType) => {
    const user = useSelector((state:RootState)=>state.user);

    const [newHotelInfo,setNewHotelInfo] = useState<addNewHotelType>({} as addNewHotelType);
    const [countries,setCountries] = useState<any>([]);
    const [availableCities,setAvailableCities] = useState([]);
    const hotelCategory = ["1 star","2 star","3 star","4 star","5 star","General","Other"];
    // const [images,setImages] = useState<hotelImgType[]>([]);

    // load all country information 
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_ALL_COUNTRIES_API_URL}`)
        .then(res=>res.json())
        .then(data=>setCountries(data.data))
    },[])
    
    // separate the available cities 
    useEffect(()=>{
       if (newHotelInfo.country) {
            countries.map((item:any)=>{
               if (item.country === newHotelInfo.country) {
                setAvailableCities( item.cities);
               }
               return null
           });
       }
       
    },[newHotelInfo.country,countries.length])

    const handleInputChange = (e:hotelFormType,action:"room"|"image"|"regular") =>{
        const _newHotelInfo = {...newHotelInfo}; 
        switch (action) {
            case "room":
                if (e.target.name === "total" || e.target.name === "booked" || e.target.name === "available") {
                    _newHotelInfo.room = {..._newHotelInfo.room}
                    _newHotelInfo.room[e.target.name] = parseInt(e.target.value); 
                    setNewHotelInfo(_newHotelInfo)
                }
                break;
            default:
                if(e.target.name === "hotelName" || e.target.name === "address" || e.target.name === "city" || e.target.name === "country" || e.target.name === "img_banner" || e.target.name === "hotel_category" || e.target.name === "description" || e.target.name === "contact_email" || e.target.name === "contact_phone" || e.target.name === "contact_Extra_info") {
                    _newHotelInfo[e.target.name] = e.target.value;
                    setNewHotelInfo(_newHotelInfo)
                    break;
                }
        }
            
    }
/*
    const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if (e.target?.files !== null) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () =>{
                if (typeof reader.result == "string") {
                    // const imgUploadInfo = imageUploader(reader.result);
                    // console.log(imgUploadInfo,"imgUploadInfo");
                    
                    setImages([...images,{uri:reader.result,title:file.name,id:`${Date.now()}`}]);
                    e.target.value = "";
                }
            }
        }
    }
*/
    const handleHotelEditSubmit = (hotelID:string)  =>{
        if (user.user?.email) {
            newHotelInfo.owner_email = user.user.email;
            
            try {
                OwnerService.updateOwnerSingleHotel(hotelID,newHotelInfo)
                .then(data=>{
                    if (data.result.modifiedCount > 0) {
                        alert("Site updated Successfully")
                    }
                })
            } catch (err) {
                // setSendError(err.message);
                console.log(err);
            }
        }

    }

    return (
        <div>
            <div>
                <div className='drop-shadow-md flex justify-end'>
                    <p>Hotel Name:</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"regular")}  value={newHotelInfo.hotelName ? newHotelInfo.hotelName : hotel.hotelName}  type="text" name='hotelName' /><br />
                </div>

                <div className='drop-shadow-md flex justify-end'>
                    <p>Hotel Address:</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"regular")} value={newHotelInfo.hotelName ? newHotelInfo.address : hotel.address} type="text" name='address' /><br />
                </div>
                
                <div className='drop-shadow-md flex justify-end'>
                    <p>Choose your country:</p>
                    <select style={{width:"500px"}} className='ml-2 border-2 border-solid block'  name="country" id="" onChange={e=>handleInputChange(e,"regular")} defaultValue={newHotelInfo.country ? newHotelInfo.country : hotel.country}>
                        {hotel.country && <option value={hotel.country} key={hotel.country}>{hotel.country}</option>}
                        
                        {
                            countries.map((item:any,id:number)=><option value={item.country} key={id}>{item.country}</option>)
                        }
                    </select>
                </div>
                <div className='drop-shadow-md flex justify-end'>
                    <p>Choose your city</p>
                    <select style={{width:"500px"}} className='ml-2 border-2 border-solid block' name="city" id="" onChange={e=>handleInputChange(e,"regular")} defaultValue={newHotelInfo.city ? newHotelInfo.city : hotel.city}>
                        {hotel.city && <option value={hotel.city} key={hotel.city}>{hotel.city}</option>}
                        {
                            availableCities.map((city:any,id:number)=><option value={city} key={id}>{city}</option>)
                        }
                    </select>
                </div>

               
                <div className='drop-shadow-md flex justify-end'>
                    <p>Total Room</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"room")} value={newHotelInfo.room?.total ? newHotelInfo.room?.total : hotel.room?.total} type="number" name='total' /><br />
                </div>
                <div className='drop-shadow-md flex justify-end'>
                    <p>Booked Room</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"room")} value={newHotelInfo.room?.booked ? newHotelInfo.room?.booked : hotel.room?.booked} type="number" name='booked' /><br />
                </div>
                <div className='drop-shadow-md flex justify-end'>
                    <p>Available Room</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"room")} value={newHotelInfo.room?.available ? newHotelInfo.room?.available : hotel.room?.available} type="number" name='available' /><br />
                </div>


               
                <div  className='drop-shadow-md flex justify-end'>
                    <p>Contact Email</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"regular")} value={newHotelInfo.contact_email ? newHotelInfo.contact_email : hotel.contact_email} type="email" name='contact_email' /><br />
                </div>
                <div  className='drop-shadow-md flex justify-end'>
                    <p>Contact Phone number</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"regular")} value={newHotelInfo.contact_phone ? newHotelInfo.contact_phone : hotel.contact_phone} type="tel" name='contact_phone' /><br />
                </div>
                <div  className='drop-shadow-md flex justify-end'>
                    <p>Additional Contact  info</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"regular")} value={newHotelInfo.contact_Extra_info ? newHotelInfo.contact_Extra_info : hotel.contact_Extra_info} type="text" name='contact_Extra_info' /><br />
                </div>
                <div  className='drop-shadow-md flex justify-end'>
                    <p>Hotel Category</p>
                    <select style={{width:"500px"}} className='ml-2 border-2 border-solid block' name="hotel_category"defaultValue={newHotelInfo.hotel_category ? newHotelInfo.hotel_category : hotel.hotel_category} id="" onChange={e=>handleInputChange(e,"regular")}>
                        {hotel.hotel_category && <option value={hotel.hotel_category} key={hotel.hotel_category}>{hotel.hotel_category}</option>}
                        {
                            hotelCategory.map((ctg:any,id:number)=><option value={ctg} key={id}>{ctg}</option>)
                        }
                    </select> <br />
                </div>
                <div  className='drop-shadow-md flex justify-end'>
                    <p>About hotel</p>
                    <textarea  style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"regular")} value={newHotelInfo.description ? newHotelInfo.description : hotel.description} name="description" id="" ></textarea> <br />
                </div>

                <button style={{backgroundColor:"lightgrey", border:"1px solid"}} onClick={()=> handleHotelEditSubmit(hotel.hotel_id)} type="submit">Save</button>
            </div>
        </div>
    );
};

export default EditOwnerHotel;