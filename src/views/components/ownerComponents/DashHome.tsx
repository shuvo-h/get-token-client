import React from 'react';
import Piechart from './Piechart';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const DashHome = () => {
    return (
        <div>
            <div className="h-screen flex-1 p-7">
      <div className="">
            
            <div className='flex-auto '>
                <div className=' flex flex-col bg-white'>
                    <div className='  flex-row'>
                        <h1 className='text-center font-bold text-gray-500 py-6 '>Welcome to Owner Dashboard</h1>
                    </div>
                </div>
            </div>

                     <div className='text-center mb-6 pt-3 rounded bg-gray-200'>
                          
                           <input className='  rounded w-64 text-gray-700 focus:outline-none border-b-4 border-gray-300   px-3 pb-3' type="search"  />
                           <button className=' ' >Search</button>
                       </div>

                        <div className=' text-center flex gap-x-8 '>
                            
                            <div className=' text-center rounded w-64 h-32 bg-gray-500 pt-6'>
                                <h2>Total Profit</h2>
                                <h2>$2455</h2>
                                <h5>Compared To Last month</h5>

                            </div>
                            <div className=' text-center rounded w-64 bg-gray-500 pt-6'>
                                <h2>Total Cost</h2>
                                <h2>$2455</h2>
                                <h5>Compared To Last month</h5>

                            </div>
                            <div className=' text-center rounded w-64 bg-gray-500 pt-6'>
                                <h2>Total Revenue</h2>
                                <h2>$2455</h2>
                                <h5>Compared To Last month</h5>

                            </div>
                            <div className=' text-center rounded w-64 bg-gray-500 pt-6'>
                                <h2>Others</h2>
                                <h2>$2455</h2>
                                <h5>Compared To Last month</h5>

                            </div>
                        </div>

                        <div className='flex mt-5 gap-x-3'>
                            <div>
                                <h1 className='py-5 font-bold'>Social Source</h1>
                                <h3>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt. Maecenas nec odio et ante tincidunt tempus.</h3>

                                <div className='pt-8'>
                                    <div className='flex  gap-x-8'>
                                        <div className=''>
                                          <span className=' '>< FaFacebook className='' /></span>
                                          <h1 className='font-bold'>Facebook</h1>
                                          <span><h3>125 sales</h3></span>
                                        </div>
                                        <div>
                                          <span>< FaTwitter/></span>
                                          <h1 className='font-bold'>Twitter</h1>
                                          <span><h3>122 sales</h3></span>
                                        </div>
                                        <div>
                                        <span>< FaInstagram/></span>
                                          <h1 className='font-bold'>Instragram</h1>
                                          <span><h3>123 sales</h3></span>
                                        </div>
                                    </div>
                                   
                                </div>

                            </div>
                            <div>
                            <h1 className='py-5 font-bold'>Activity</h1>
                            <h3>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</h3>
                            </div>
                            <div>
                              <h1 className='py-5 font-bold'>Top Cities Hotels</h1>
                              <div className=''><Piechart></Piechart></div>
                            </div>
                        </div>

                        {/* Transaction */}
                        <div>
                           <h1>Latest Transaction</h1>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label  className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-3 py-3">
                    Order ID
                </th>
                <th scope="col" className="px-3 py-3">
                Billing Name
                </th>
                <th scope="col" className="px-3 py-3">
                Date
                </th>
                <th scope="col" className="px-3 py-3">
                Total
                </th>
                
                <th scope="col" className="px-3 py-3">
                    View Details
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label  className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                #SK2540
                </th>
                <td className="px-6 py-4">
                Neal Matthews
                </td>
                <td className="px-6 py-4">
                07 Oct, 2019
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label  className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                #SK2541
                </th>
                <td className="px-6 py-4">
                Jamal Burnett
                </td>
                <td className="px-6 py-4">
                07 Oct, 2019
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label  className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                #SK2542
                </th>
                <td className="px-6 py-4">
                Juan Mitchell
                </td>
                <td className="px-6 py-4">
                06 Oct, 2021
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label  className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                #SK2542
                </th>
                <td className="px-6 py-4">
                Juan Mitchell
                </td>
                <td className="px-6 py-4">
                06 Oct, 2021
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label  className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                #SK2542
                </th>
                <td className="px-6 py-4">
                Juan Mitchell
                </td>
                <td className="px-6 py-4">
                06 Oct, 2021
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label  className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                #SK2542
                </th>
                <td className="px-6 py-4">
                Juan Mitchell
                </td>
                <td className="px-6 py-4">
                06 Oct, 2021
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
                        </div>

            <div className=' '>
                 <div className='mt-8'>
                     <div className='flex items-center bg-white'>
                        
                        <div className=''><Piechart></Piechart></div>
                        <div className=''><Piechart></Piechart></div>
                        
                     </div>
                 </div>
            </div>

         </div>
      </div>
        </div>
    );
};

export default DashHome;