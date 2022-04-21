import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useAuthAccess from '../../../hooks/useAuthAccess';
import { RootState } from '../../../redux/store/store';
import OwnerService from '../../../services/ownerServices/hotel.service';
import { addNewHotelType } from '../../../type/hotelType';
import { hotelImgType } from '../../../type/ownerTypes';
import HotelImage from '../../../assets/images/stock-hotel-photo.jpg';


export type hotelFormType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> |  React.ChangeEvent<HTMLTextAreaElement>



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
        <div className='flex  gap-x-6 justify-center bg-indigo-50'>
                {/* <div> */}
                <div className=' py-5 w-2/3'>
                <h1 className='text-xl  justify-end font-semibold flex text-purple-700 text-opacity-100 my-2'>FILLUP THE FORM WITH YOUR HOTEL INFORMATION</h1>
                <div className='space-y-3 '>
                    <div className='drop-shadow-md flex justify-end items-center '>
                        <p>Hotel Name:</p>
                        <input style={{width:"400px", height:"45px"}} className='ml-2 border-2 border-solid rounded focus:outline-none focus:border-teal-500  '  onChange={e=>handleInputChange(e,"regular")} type="text" name='hotelName'/>
                    </div>

                    <div className='drop-shadow-md flex justify-end items-center'>
                        <p>Hotel Address:</p>
                        <input style={{width:"400px",height:"45px"}} className='ml-2 border-2 border-solid block focus:outline-none focus:border-teal-500 rounded' onChange={e=>handleInputChange(e,"regular")} type="text" name='address' /><br />
                    </div>
                    
                    <div className='drop-shadow-md flex justify-end items-center'>
                        <p>Choose your country:</p>
                        <select style={{width:"400px",height:"45px"}} className='ml-2 border-2 border-solid block focus:outline-none focus:border-teal-500 rounded'   name="country" id="" defaultValue="select country" onChange={e=>handleInputChange(e,"regular")}>
                            <option value="select country" disabled>select country</option>
                            {
                                countries.map((item:any,id:number)=><option value={item.country} key={id}>{item.country}</option>)
                            }
                        </select>
                    </div>
                    <div className='drop-shadow-md flex justify-end items-center'>
                        <p>Choose your city</p>
                        <select style={{width:"400px", height:"45px"}} className='ml-2 border-2 border-solid block focus:outline-none focus:border-teal-500 rounded' name="city" id="" defaultValue={"select city"} onChange={e=>handleInputChange(e,"regular")}>
                            <option value={"select city"} disabled>select city</option>
                            {
                                availableCities.map((city:any,id:number)=><option value={city} key={id}>{city}</option>)
                            }
                        </select>
                    </div>

                
                    <div className='drop-shadow-md flex justify-end items-center'>
                        <p>Total Room</p>
                        <input style={{width:"400px",height:"45px"}} className='ml-2 border-2 border-solid block focus:outline-none focus:border-teal-500 rounded' onChange={e=>handleInputChange(e,"room")} type="number" name='total' /><br />
                    </div>
                    <div className='drop-shadow-md flex justify-end items-center'>
                        <p>Booked Room</p>
                        <input style={{width:"400px", height:"45px"}} className='ml-2 border-2 border-solid block focus:outline-none focus:border-teal-500 rounded' onChange={e=>handleInputChange(e,"room")} type="number" name='booked' /><br />
                    </div>
                    <div className='drop-shadow-md flex justify-end items-center'>
                        <p>Available Room</p>
                        <input style={{width:"400px", height:"45px"}} className='ml-2 border-2 border-solid block focus:outline-none focus:border-teal-500 rounded' onChange={e=>handleInputChange(e,"room")} type="number" name='available' /><br />
                    </div>


                
                    <div  className='drop-shadow-md flex justify-end items-center'>
                        <p>Contact Email</p>
                        <input style={{width:"400px", height:"45px"}} className='ml-2 border-2 border-solid block focus:outline-none focus:border-teal-500 rounded' onChange={e=>handleInputChange(e,"regular")} type="email" name='contact_email' /><br />

                    </div>
                    <div  className='drop-shadow-md flex justify-end items-center'>
                        <p>Contact Phone number</p>
                        <input style={{width:"400px", height:"45px"}} className='ml-2 border-2 border-solid block focus:outline-none focus:border-teal-500 rounded' onChange={e=>handleInputChange(e,"regular")} type="tel" name='contact_phone' /><br />
                    </div>
                    <div  className='drop-shadow-md flex justify-end items-center'>
                        <p>Additional Contact  info</p>
                        <input style={{width:"400px",height:"45px"}} className='ml-2 border-2 border-solid block focus:outline-none focus:border-teal-500 rounded' onChange={e=>handleInputChange(e,"regular")} type="text" name='contact_Extra_info' /><br />
                    </div>
                    <div  className='drop-shadow-md flex justify-end items-center'>
                        <p>Hotel Category</p>
                        <select style={{width:"400px", height:"45px"}} className='ml-2 border-2 border-solid block focus:outline-none focus:border-teal-500 rounded' name="hotel_category" defaultValue={"select category"} id="" onChange={e=>handleInputChange(e,"regular")}>
                            <option value={"select category"} disabled>select category</option>
                            {
                                hotelCategory.map((ctg:any,id:number)=><option value={ctg} key={id}>{ctg}</option>)
                            }
                        </select> <br />
                    </div>
                    

                    <div className='flex items-center'>
                    <p className='mx-7' >Images of hotel</p>
                    <input style={{width:"400px", height:"45px"}} className='ml-2  border-2 border-solid block rounded ' onChange={(e)=>handleImageChange(e)} type="file" name='img_uri' multiple />
                    <div className=''>
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

                <div  className='drop-shadow-md flex justify-end items-center'>
                        <p>About hotel</p>
                        <textarea  style={{width:"400px", height:"80px"}} className='ml-2 border-2 border-solid block focus:outline-none focus:border-teal-500 rounded' onChange={e=>handleInputChange(e,"regular")} name="description" id="" ></textarea> <br />
                    </div>

                    <button  onClick={handleHotelSubmit} type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 w-1/3  flex justify-center items-center mx-auto' >Submit</button>
                </div>

                
            </div>
                {/* </div> */}


            <div className=' flex items-center '>
                 < img src={HotelImage} />
            </div>
        </div>
    );
};

export default AddNewHotel;