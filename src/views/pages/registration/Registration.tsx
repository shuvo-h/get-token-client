import React, { useState } from 'react';
import './Registration.css';

type userType = {
    name:string,
    email: string,
    mobile:string,
    password:string,
    avatar:string,
    role:string,
}
const dataIn = {
    name:"ABc",
    email: "atbc@gmail.com",
    mobile:"015654585",
    password:"Qw!234fgfdf",
    avatar:"",
    role:"owner",
}


const Registration = () => {
    const [image,setImage] = useState<string>("");
    const [newUser,setNewUser] = useState<userType>(dataIn);

    const handleImageChange = (e:any) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>{
            if (typeof reader.result === "string") {
                setImage(reader.result)
            }
        }
    }

    const handleRegistration = () =>{

        if (image) {
            newUser.avatar = image
        }
        try {
                fetch("http://localhost:5000/authenticate/registration",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(newUser)
                })
                .then(res=>res.json())
                .then(data=>console.log(data))
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className=" login-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" >
           
            <header className=' max-w-lg mx-auto' >
                <a href='/#'>
                   <h1 className='text-4xl font-bold text-white text-center'>Registration</h1>
                </a>
            </header>
            <button onClick={handleRegistration} style={{textAlign:"center", margin:"auto", display:"block", border:"1px solid",backgroundColor:"green"}}>Click Me</button>
            <main className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>
                <div>
                    <h3 className='font-bold text-2xl'>Welcome to Registration </h3>
                    <p className='text-gray-600 pt-2'>Create your account</p>
                </div>
                <div className='mt-10'>
                    <form className='flex flex-col' method='POST' action="/#">

                    <div className='mb-6 pt-3 rounded bg-gray-200'>
                           <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="email">Full Name</label>
                           <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' type="text" id="email" />
                       </div>

                       <div className='mb-6 pt-3 rounded bg-gray-200'>
                           <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="email">Email</label>
                           <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' type="text" id="email" />
                       </div>
                       <div className='mb-6 pt-3 rounded bg-gray-200'>
                           <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="password">Password</label>
                           <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' type="password" id="password" />
                       </div>
                       <div className='mb-6 pt-3 rounded bg-gray-200'>
                           <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="password">Confirm Password</label>
                           <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' type="password" id="password" />
                       </div>
                       <div className='mb-6 pt-3 rounded bg-gray-200'>
                           <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="password">Password</label>
                           <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' type="file" onChange={handleImageChange} id="file" />
                           {
                                image && <img src={image} alt="" />
                            }
                       </div>
                       {/* <div className='text-center pb-4'>
                           <a href="/#" className='text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6'>Forgot Your Passwod?</a>
                       </div> */}
                       <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200' type='submit' >Sign Up</button>
                    </form>
                </div>
            </main>
            <div className='max-w-lg mx-auto text-center mt-12 mb-6'>
                <p className='text-white'>Already have an account? <a href='/#' className='font-bold hover:underline' >Sign In</a> </p>
            </div>

            <footer className='max-w-lg mx-auto flex justify-center text-white'>
               <a href='/#' className='hover:underline'>Contact</a>
               <span className='mx-3'>•</span>
               <a href='/#' className='hover:underline'>Privacy</a>
            </footer>
             
        </div>
    );
};

export default Registration;