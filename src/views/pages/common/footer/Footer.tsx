import React from 'react';
import './Footer.css';
// import { FaChevronRight } from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        
    <footer >
        <div className='footer_area bg-gray-800 text-gray-200 '>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                   <div className='mb-5'>
                      <h4 className='text-2xl pb-4'>GetTokens</h4>
                      <p className='text-gray-500'>
                        A123 Lost street <br/>
                        Dhaka, PB 24322  <br/>
                        Bangladesh <br/> <br />
                        <strong> <i className='fa fa-phone text-yellow-500'></i></strong> +88 012222333 <br />
                        <strong><i className='fa fa-envelope text-yellow-500'></i></strong> info@example.com <br /> 
                      </p>
                   </div>
                   <div className='mb-5'>
                     <h4 className='pb-4'>Useful Links</h4> 
                     <ul className='text-gray-500 '>
                         <li className='pb-4'> <NavLink to={"/home"}>Home</NavLink></li>
                         <li className='pb-4'> <NavLink to={"/about-us"}>About US</NavLink></li>
                         <li className='pb-4'> <NavLink to={"/contact-us"}>Contact US</NavLink></li>
                         <li className='pb-4'> <NavLink to={"/term-and-service"}>Terms of services</NavLink></li>
                         <li className='pb-4'> <NavLink to={"/privacy-policy"}>Privacy policy</NavLink></li>
                     </ul>
                   </div>
                   <div className='mb-5'>
                   <h4 className='pb-4'>Our Services</h4> 
                     <ul className='text-gray-500'>
                         <li className='pb-4'> <i className="fa fa-chevron-right text-yellow-500"></i> <a href="/#" className="hover:text-yellow-500">Enterprise</a></li>
                         <li className='pb-4'> <i className="fa fa-chevron-right text-yellow-500"></i> <a href="/#" className="hover:text-yellow-500">Business</a> </li>
                         <li className='pb-4'> <i className="fa fa-chevron-right text-yellow-500"></i> <a href="/#" className="hover:text-yellow-500">Services</a> </li>
                         <li className='pb-4'> <i className="fa fa-chevron-right text-yellow-500"></i> <a href="/#" className="hover:text-yellow-500">Development</a> </li>
                         <li className='pb-4'> <i className="fa fa-chevron-right text-yellow-500"></i> <a href="/#" className="hover:text-yellow-500">Ticket booking</a> </li>
                     </ul>
                   </div>
                   <div className='mb-5'>
                       <h4 className='pb-4'>Join Our Newsletter</h4>
                       <p className='text-gray-500 pb-2'>Join 25,000+ others and never miss out on new tips, tutorials, and more</p>
                       <form className='flex flex-row flex-wrap' >
                           <input type="text" className='text-gray-500 w-2/3 p-2 focus:border-yellow-500' placeholder='email@example.com' /><br />
                           <button className='p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-600'>Subscribe</button> 
                       </form>

                       <div className="text-center text-xl text-white pt-7 ">
                       <a href="/#" className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"><i className="fa fa-twitter"></i></a>
                       <a href="/#" className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"><i className="fa fa-instagram"></i></a>
                       <a href="/#" className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"><i className="fa fa-facebook"></i></a>
                       <a href="/#" className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"><i className="fa fa-linkedin"></i></a>
                       
                    </div> 

                   </div>
                   
                </div>
            </div>
        </div>
        <div className='w-full bg-gray-900 text-gray-500 px-10'>
            <div className="text-center">
                <div className='max-w-7xl  py-4 mx-auto'>
                   <div>
                       &copy; <strong><span>GetTokens</span></strong> All Rights Reserved
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>

      
    );
};

export default Footer;


{/* < FaChevronRight className='text-yellow-500' /> */}