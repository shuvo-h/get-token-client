import React, { useRef, useState } from 'react';
import commonService from '../../../services/commonService/common.service';

export type contactFormType = {
    name: string
    email: string
    issue: string
    message: string
}


const ContactUS = () => {
    const [contactInfo,setContactInfo] = useState<contactFormType>({} as contactFormType);

    const handleOnBlurContact = (e:  React.FocusEvent<HTMLInputElement, Element> | React.FocusEvent<HTMLTextAreaElement, Element>) =>{
        if (e.target.name === "name" || e.target.name === "email" || e.target.name === "issue" || e.target.name === "message") {
            const _contactInfo = {...contactInfo}
            _contactInfo[e.target.name] = e.target.value;
            setContactInfo(_contactInfo);
        }
    }
    
    const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        commonService.sendContactMessage(contactInfo)
        .then(data=>{
            if (data.messageID) {
                alert("Message sent successfull!")
            }else{
                alert("Something went wrong. Please try aggain!")
            }
        })
    }
    
    return (
        <div className='bg-sky-300'>
            <div>
                <h1 className='text-center font-bold text-2xl py-6'>Contact US</h1>
                <p className='text-center text-xl'>Leave us a message if you want to contact with us. We will get back to you soon.</p>
                <div className='py-6'>
                    <form className='w-fit mx-auto flex flex-col shadow py-6 px-6 bg-white rounded-lg' onSubmit={e=>handleContactSubmit(e)}>
                        <label htmlFor="">Name:</label>
                        <input onBlur={e=>handleOnBlurContact(e)} className='border my-1' style={{width:"450px"}} type="text" name='name' autoFocus />

                        <label htmlFor="">Email *:</label>
                        <input onBlur={e=>handleOnBlurContact(e)} className='border my-1' style={{width:"450px"}} type="email" name='email' required />

                        <label htmlFor="">Issue to contact with us:</label>
                        <input onBlur={e=>handleOnBlurContact(e)} className='border my-1' style={{width:"450px"}} type="text" name='issue' placeholder='type the issue here' required />

                        <label htmlFor="">Message:</label>
                        <textarea onBlur={e=>handleOnBlurContact(e)} className='border my-1' style={{width:"450px"}} name="message" id="" cols={30} rows={10} placeholder="write your message here"></textarea>

                        <button className='bg-blue-200 hover:bg-blue-300 font-semibold w-fit mx-auto px-2 rounded-md' type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUS;