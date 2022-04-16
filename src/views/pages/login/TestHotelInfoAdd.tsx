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
                OwnerService.addNewHotel(newHotelInfo);
                
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
    

    return (
        <div>
            <h1 style={{fontSize:"25px", fontWeight:"700"}}>{user?.user?.name}</h1>
            <div >
                <label htmlFor="">Hotel Name</label>
                <input onChange={e=>handleInputChange(e)} type="text" name='hotelName' /><br />

                <label htmlFor="">Hotel Address</label>
                <input onChange={e=>handleInputChange(e)} type="text" name='address' /><br />
                
                <label htmlFor="">Country</label>
                <input type="text" name='country' /><br />

                <label htmlFor="">Choose your country</label>
                <select name="country" id="" defaultValue="select country" onChange={e=>handleInputChange(e)}>
                    <option value="select country" disabled>select country</option>
                    {
                        countries.map((item:any,id:number)=><option value={item.country} key={id}>{item.country}</option>)
                    }
                </select> <br />

                <label htmlFor="">Choose your city</label>
                <select name="city" id="" defaultValue={"select city"} onChange={e=>handleInputChange(e)}>
                    <option value={"select city"} disabled>select city</option>
                    {
                        availableCities.map((city:any,id:number)=><option value={city} key={id}>{city}</option>)
                    }
                </select> <br />


                <label htmlFor="">Total Room</label>
                <input onChange={e=>handleInputChange(e)} type="number" name='totalRoom' /><br />

               

                <label htmlFor="">About hotel</label>
                <textarea onChange={e=>handleInputChange(e)} name="description" id="" cols={30} rows={10}></textarea> <br />

                <label htmlFor="">Contact Email</label>
                <input onChange={e=>handleInputChange(e)} type="email" name='contact_email' /><br />

                <label htmlFor="">Contact Phone number</label>
                <input onChange={e=>handleInputChange(e)} type="tel" name='contact_phone' /><br />

                <label htmlFor="">Additional Contact  info</label>
                <input onChange={e=>handleInputChange(e)} type="text" name='contact_Extra_info' /><br />

                <label htmlFor="">Hotel Category</label>
                <select name="hotel_category" defaultValue={"select category"} id="" onChange={e=>handleInputChange(e)}>
                    <option value={"select category"} disabled>select category</option>
                    {
                        hotelCategory.map((ctg:any,id:number)=><option value={ctg} key={id}>{ctg}</option>)
                    }
                </select> <br />

                <button style={{backgroundColor:"lightgrey", border:"1px solid"}} onClick={handleHotelSubmit} type="submit">Submit</button>
            </div>

            <div>
                <label htmlFor="">Images of hotel</label>
                <input onChange={(e)=>handleImageChange(e)} type="file" name='img_uri' multiple /><br />
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