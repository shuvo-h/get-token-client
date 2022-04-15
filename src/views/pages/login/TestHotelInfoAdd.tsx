import React, { useEffect, useState } from 'react';

type newHotelInfoType = {
    hotelName: string,
    address: string,
    city: string,
    country: string,
    totalRoom: number,
    img_uri: string[],
    description: string,
    owner_email: string,
    owner_id: string,
    contact_email: string,
    contact_phone: string,
    contact_Extra_info: string,
    hotel_category: "1 star" | "2 star" | "3 star" | "other",
}

const TestHotelInfoUpload = () => {
    const [newHotelInfo,setNewHotelInfo] = useState<any>({});
    const [countries,setCountries] = useState<any>([]);
console.log(newHotelInfo);
// console.log(countries[0]?.country);

    useEffect(()=>{
        fetch("https://countriesnow.space/api/v0.1/countries")
        .then(res=>res.json())
        .then(data=>setCountries(data.data))
    },[])

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>{
        const _newHotelInfo = {...newHotelInfo};
        _newHotelInfo[e.target.name] = e.target.value;
        setNewHotelInfo(_newHotelInfo)
    }

    const handleHotelSubmit = (e: React.FormEvent<HTMLFormElement>)  =>{
        e.preventDefault();
        
    }

    return (
        <div>
            <form onSubmit={e=>handleHotelSubmit(e)}>
                <label htmlFor="">Hotel Name</label>
                <input onChange={e=>handleInputChange(e)} type="text" name='hotelName' /><br />

                <label htmlFor="">Hotel Address</label>
                <input onChange={e=>handleInputChange(e)} type="text" name='address' /><br />
                
                <label htmlFor="">Country</label>
                <input type="text" name='country' /><br />

                <label htmlFor="">Choose your country</label>
                <select name="country" id="" onChange={e=>handleInputChange(e)}>
                    <option value="a" disabled selected>select</option>
                    {
                        countries.map((item:any)=><option value={item.country}>{item.country}</option>)
                    }
                </select> <br />

                <label htmlFor="">City</label>
                <input type="text" name='city' /><br />
                <label htmlFor="">Total Room</label>
                <input type="text" name='totalRoom' /><br />
                <label htmlFor="">Images of hotel</label>
                <input type="file" name='totalRoom' /><br />
                <label htmlFor="">Hotel description</label>
                <input type="text" name='description' /><br />
                <label htmlFor="">Owner Email</label>
                <input type="email" name='owner_email' /><br />
                <label htmlFor="">Owner ID</label>
                <input type="text" name='owner_id' /><br />
                <label htmlFor="">Owner Email</label>
                <input type="email" name='contact_email' /><br />
                <label htmlFor="">Contact Phone number</label>
                <input type="tel" name='contact_phone' /><br />
                <label htmlFor="">Additional Contact  info</label>
                <input type="text" name='contact_Extra_info' /><br />
                <label htmlFor="">Hotel Category</label>
                <input type="text" name='hotel_category' /><br />
                <button style={{backgroundColor:"lightgrey", border:"1px solid"}} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TestHotelInfoUpload;