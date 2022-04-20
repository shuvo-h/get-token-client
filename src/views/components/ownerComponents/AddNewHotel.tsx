import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useAuthAccess from '../../../hooks/useAuthAccess';
import { RootState } from '../../../redux/store/store';
import OwnerService from '../../../services/ownerServices/hotel.service';
import { addNewHotelType } from '../../../type/hotelType';
import { hotelImgType } from '../../../type/ownerTypes';

type hotelFormType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> |  React.ChangeEvent<HTMLTextAreaElement>



const AddNewHotel = () => {
    // load and get user information 
    // useAuthAccess()
    const user = useSelector((state:RootState)=>state.user);

    const [newHotelInfo,setNewHotelInfo] = useState<addNewHotelType>({} as addNewHotelType);
    const [countries,setCountries] = useState<any>([]);
    const [availableCities,setAvailableCities] = useState([]);
    const hotelCategory = ["1 star","2 star","3 star","4 star","5 star","General","Other"];
    const [images,setImages] = useState<hotelImgType[]>([]);
    const [sendError,setSendError] = useState<string>("");

console.log(newHotelInfo);

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

    const handleHotelSubmit = ()  =>{
        if (user.user?.email) {
            newHotelInfo.owner_email = user.user.email;
            newHotelInfo.img_uri = images;
            try {
                OwnerService.addNewHotel(newHotelInfo)
                .then(data=>{
                    if (data.result._id) {
                        alert("Site added Successfully")
                    }
                })
            } catch (err) {
                // setSendError(err.message);
                console.log(err);
            }
        }

    }

    console.log(user.user);
    

    return (
        <div className='mx-auto  w-max'>
            <h1 className='text-xl font-semibold text-center my-2'>Fillup the form with your hotel information</h1>
            <div>
                <div className='drop-shadow-md flex justify-end'>
                    <p>Hotel Name:</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block'  onChange={e=>handleInputChange(e,"regular")} type="text" name='hotelName' /><br />
                </div>

                <div className='drop-shadow-md flex justify-end'>
                    <p>Hotel Address:</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"regular")} type="text" name='address' /><br />
                </div>
                
                <div className='drop-shadow-md flex justify-end'>
                    <p>Choose your country:</p>
                    <select style={{width:"500px"}} className='ml-2 border-2 border-solid block'  name="country" id="" defaultValue="select country" onChange={e=>handleInputChange(e,"regular")}>
                        <option value="select country" disabled>select country</option>
                        {
                            countries.map((item:any,id:number)=><option value={item.country} key={id}>{item.country}</option>)
                        }
                    </select>
                </div>
                <div className='drop-shadow-md flex justify-end'>
                    <p>Choose your city</p>
                    <select style={{width:"500px"}} className='ml-2 border-2 border-solid block' name="city" id="" defaultValue={"select city"} onChange={e=>handleInputChange(e,"regular")}>
                        <option value={"select city"} disabled>select city</option>
                        {
                            availableCities.map((city:any,id:number)=><option value={city} key={id}>{city}</option>)
                        }
                    </select>
                </div>

               
                <div className='drop-shadow-md flex justify-end'>
                    <p>Total Room</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"room")} type="number" name='total' /><br />
                </div>
                <div className='drop-shadow-md flex justify-end'>
                    <p>Booked Room</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"room")} type="number" name='booked' /><br />
                </div>
                <div className='drop-shadow-md flex justify-end'>
                    <p>Available Room</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"room")} type="number" name='available' /><br />
                </div>


               
                <div  className='drop-shadow-md flex justify-end'>
                    <p>Contact Email</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"regular")} type="email" name='contact_email' /><br />

                </div>
                <div  className='drop-shadow-md flex justify-end'>
                    <p>Contact Phone number</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"regular")} type="tel" name='contact_phone' /><br />
                </div>
                <div  className='drop-shadow-md flex justify-end'>
                    <p>Additional Contact  info</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"regular")} type="text" name='contact_Extra_info' /><br />
                </div>
                <div  className='drop-shadow-md flex justify-end'>
                    <p>Hotel Category</p>
                    <select style={{width:"500px"}} className='ml-2 border-2 border-solid block' name="hotel_category" defaultValue={"select category"} id="" onChange={e=>handleInputChange(e,"regular")}>
                        <option value={"select category"} disabled>select category</option>
                        {
                            hotelCategory.map((ctg:any,id:number)=><option value={ctg} key={id}>{ctg}</option>)
                        }
                    </select> <br />
                </div>
                <div  className='drop-shadow-md flex justify-end'>
                    <p>About hotel</p>
                    <textarea  style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e,"regular")} name="description" id="" ></textarea> <br />
                </div>

                <button style={{backgroundColor:"lightgrey", border:"1px solid"}} onClick={handleHotelSubmit} type="submit">Submit</button>
            </div>

            <div>
                <p >Images of hotel</p>
                <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={(e)=>handleImageChange(e)} type="file" name='img_uri' multiple /><br />
                <div>
                    {
                        images.map((image,id)=><p key={id}>{image.title}</p>)
                    }
                </div>
                <div>
                    {
                        images.map(image=><img src={image.uri}></img>)
                    }
                </div> 
            </div>
        </div>
    );
};

export default AddNewHotel;