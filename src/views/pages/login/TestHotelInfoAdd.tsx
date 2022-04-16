import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuthAccess from '../../../hooks/useAuthAccess';
import { fetchUser } from '../../../redux/slices/authSlice';
import { RootState } from '../../../redux/store/store';
import OwnerService from '../../../services/ownerServices/hotel.service';
import { hotelImgType } from '../../../type/ownerTypes';

type hotelFormType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> |  React.ChangeEvent<HTMLTextAreaElement>



const TestHotelInfoUpload = () => {
    // load and get user information 
    useAuthAccess()
    const user = useSelector((state:RootState)=>state.user);

    const [newHotelInfo,setNewHotelInfo] = useState<any>({});
    const [countries,setCountries] = useState<any>([]);
    const [availableCities,setAvailableCities] = useState([]);
    const hotelCategory = ["1 star","2 star","3 star","4 star","5 star","General","Other"];
    const [images,setImages] = useState<hotelImgType[]>([]);
    const [sendError,setSendError] = useState<string>("");

// console.log(newHotelInfo);

    // load all country information 
    useEffect(()=>{
        fetch("https://countriesnow.space/api/v0.1/countries")
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
       
    },[newHotelInfo.country])

    const handleInputChange = (e:hotelFormType) =>{
        const _newHotelInfo = {...newHotelInfo};
        _newHotelInfo[e.target.name] = e.target.value;
        setNewHotelInfo(_newHotelInfo)
    }

    const handleHotelSubmit = ()  =>{
        if (user.user?.email) {
            newHotelInfo.owner_email = user.user.email;
            newHotelInfo.img_uri = images;
            
            try {
                OwnerService.addNewHotel(newHotelInfo)
                .then(data=>console.log(data))

            } catch (err) {
                // setSendError(err.message);
                console.log(err);
                
            }
            
        }
    }

    const handleImageChange = (e:any) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>{
            if (typeof reader.result == "string") {
                setImages([...images,{uri:reader.result,title:file.name,id:`${Date.now()}`}]);
                e.target.value = "";
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
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block'  onChange={e=>handleInputChange(e)} type="text" name='hotelName' /><br />
                </div>

                <div className='drop-shadow-md flex justify-end'>
                    <p>Hotel Address:</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e)} type="text" name='address' /><br />
                </div>
                
                <div className='drop-shadow-md flex justify-end'>
                    <p>Choose your country:</p>
                    <select style={{width:"500px"}} className='ml-2 border-2 border-solid block'  name="country" id="" defaultValue="select country" onChange={e=>handleInputChange(e)}>
                        <option value="select country" disabled>select country</option>
                        {
                            countries.map((item:any,id:number)=><option value={item.country} key={id}>{item.country}</option>)
                        }
                    </select>
                </div>
                <div className='drop-shadow-md flex justify-end'>
                    <p>Choose your city</p>
                    <select style={{width:"500px"}} className='ml-2 border-2 border-solid block' name="city" id="" defaultValue={"select city"} onChange={e=>handleInputChange(e)}>
                        <option value={"select city"} disabled>select city</option>
                        {
                            availableCities.map((city:any,id:number)=><option value={city} key={id}>{city}</option>)
                        }
                    </select>
                </div>
               
                <div className='drop-shadow-md flex justify-end'>
                    <p>Total Room</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e)} type="number" name='totalRoom' /><br />
                </div>


               
                <div  className='drop-shadow-md flex justify-end'>
                    <p>Contact Email</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e)} type="email" name='contact_email' /><br />

                </div>
                <div  className='drop-shadow-md flex justify-end'>
                    <p>Contact Phone number</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e)} type="tel" name='contact_phone' /><br />
                </div>
                <div  className='drop-shadow-md flex justify-end'>
                    <p>Additional Contact  info</p>
                    <input style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e)} type="text" name='contact_Extra_info' /><br />
                </div>
                <div  className='drop-shadow-md flex justify-end'>
                    <p>Hotel Category</p>
                    <select style={{width:"500px"}} className='ml-2 border-2 border-solid block' name="hotel_category" defaultValue={"select category"} id="" onChange={e=>handleInputChange(e)}>
                        <option value={"select category"} disabled>select category</option>
                        {
                            hotelCategory.map((ctg:any,id:number)=><option value={ctg} key={id}>{ctg}</option>)
                        }
                    </select> <br />
                </div>
                <div  className='drop-shadow-md flex justify-end'>
                    <p>About hotel</p>
                    <textarea  style={{width:"500px"}} className='ml-2 border-2 border-solid block' onChange={e=>handleInputChange(e)} name="description" id="" ></textarea> <br />
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

export default TestHotelInfoUpload;