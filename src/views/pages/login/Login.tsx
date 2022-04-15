import { type } from 'os';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../../redux/slices/authSlice';
import AuthService from '../../../services/Auth.service';
import { logInfoType } from '../../../type/allTypes';
import './Login.css';

const fakeUser = {
    email: "amir@gmail.com",
    password:"Aa@12345678"
}

const Login = () => {
    const dispatch = useDispatch();
    const [loginInfo,setLoginInfo] = useState<logInfoType>(fakeUser as logInfoType);
    
    const handleLogin =  async(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        dispatch(setUserInfo({user:null,status: 'pending',error:null}))
        try {
            const user =  await AuthService.login(loginInfo)
            if (user.email) {
                console.log(user);
                
                dispatch(setUserInfo({user,status: 'success',error:null}))
            }else{
                dispatch(setUserInfo({user:null,status: 'error',error:"Unknown error occured"}))
            }
        } catch (err) {
            dispatch(setUserInfo({user:null,status: 'error',error:"Something went wrong. Try again!"}))
        }
    }

    const handleLogout = async() =>{
        try {
            const result =  await AuthService.logoutUser();
            if (result.user == null) {
                dispatch(setUserInfo({user: result.user,status: 'success',error:null}))
            }
        } catch (err) {
            console.log(err);
            dispatch(setUserInfo({user:null,status: 'error',error:"Something went wrong!"}))
        }
    }

    return (
        <div className=" login-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" >
           
            <header className=' max-w-lg mx-auto' >
                <a href='/#'>
                   <h1 className='text-4xl font-bold text-white text-center'>Login</h1>
                </a>
            </header>
            <main className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>
                <div>
                    <h3 className='font-bold text-2xl'>Welcome to Login </h3>
                    <p className='text-gray-600 pt-2'>Sign in to your account</p>
                </div>
                <div className='mt-10'>
                    <form className='flex flex-col' onSubmit={e=>handleLogin(e)}>
                       <div className='mb-6 pt-3 rounded bg-gray-200'>
                           <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="email">Email</label>
                           <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' type="text" name='email' id="email" />
                       </div>
                       <div className='mb-6 pt-3 rounded bg-gray-200'>
                           <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="password">Password</label>
                           <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'   type="password" name='password' id="password" />
                       </div>
                       <div className='text-center pb-4'>
                           <a href="/#" className='text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6'>Forgot Your Password?</a>
                       </div>
                       <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200' type='submit' >Sign In</button>
                    </form>
                </div>
            </main>
            <div className='max-w-lg mx-auto text-center mt-12 mb-6'>
                <p className='text-white'>Don't have an account? <a href='/#' className='font-bold hover:underline' >Sign Up</a> </p>
            </div>

            <footer className='max-w-lg mx-auto flex justify-center text-white'>
               <a href='/#' className='hover:underline'>Contact</a>
               <span className='mx-3'>•</span>
               <a href='/#' className='hover:underline'>Privacy</a>
            </footer>
             
        </div>
    );
};

export default Login;
