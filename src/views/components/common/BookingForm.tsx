import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
const BookingForm = () => {
    return (
        <div className='my-10 px-8 shadow-xl  rounded-xl bg-white text-black'>
            <form action="" className='py-8'>
                <div className="flex justify-items-start items-center mb-8 font-medium text-lg ">
                    <div>
                        <input type="radio" name="click" value="One Way" />
                        <label className="ml-3" htmlFor="click">
                            One Way
                        </label>
                    </div>
                    <div className="ml-5">
                        <input
                            checked
                            type="radio"
                            name="click"
                            value="Round Trip"
                        />
                        <label className="ml-3" htmlFor="click">
                            Round Trip
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-5">
                    <div className="flex flex-col justify-items-start border-2 py-3 px-5">
                        <label htmlFor="" className="text-md font-medium">
                            Location
                        </label>
                        <input
                            type="text"
                            placeholder="Add City"
                            className="w-4/5 my-3  outline-none"
                        />
                    </div>
                    <div className="flex flex-col justify-items-start border-2 py-3 px-5">
                        <label htmlFor="" className="text-md font-medium">
                            Arrival
                        </label>
                        <input
                            type="date"
                            placeholder="Add City"
                            className="w-4/5 my-3  outline-none"
                        />
                    </div>
                    <div className="flex flex-col justify-items-start border-2 py-3 px-5">
                        <label htmlFor="" className="text-md font-medium">
                            Departure
                        </label>
                        <input
                            type="date"
                            placeholder="Add City"
                            className="w-4/5 my-3  outline-none"
                        />
                    </div>
                    <div className="travell_class border-2 py-3 px-5 ">
                        <label
                            htmlFor="travel class"
                            className="text-md font-medium"
                        >
                            Passengers & Travel class
                        </label>

                        <p className="flex justify-between items-center field cursor-pointer travel-class mt-3">
                            <span> 0 passenger 'Economy'</span>
                            <FiChevronDown className="inline ml-20" />
                        </p>

                        {/* <div className="border-2 py-5 travel-class-portal outline outline-3 outline-blue-200">
                            <div className="p-3">
                                <label
                                    className="text-xl"
                                    htmlFor="travel class"
                                >
                                    Travel Class
                                </label>
                                <br />
                                <select
                                    className="field text-lg"
                                    name="travel class"
                                >
                                    <option
                                        className="text-lg mb-2"
                                        value="Economy"
                                    >
                                        Economy{' '}
                                    </option>
                                    <option
                                        className="text-lg mb-2"
                                        value="Premium"
                                    >
                                        Premium{' '}
                                    </option>
                                    <option
                                        className="text-lg mb-2"
                                        value="Upper Class"
                                    >
                                        Upper Class{' '}
                                    </option>
                                </select>
                            </div>
                            <hr />
                            <div className="p-3">
                                <p className="my-2 text-xl">Passenger</p>

                                <div className="flex justify-between items-center my-5">
                                    <div>
                                        <h2 className="text-xl mb-1">Adult</h2>
                                        <h3>Age 16 and over</h3>
                                    </div>
                                    <div className="flex justify-around items-center border bg-slate-100">
                                        <button
                                            type="button"
                                            className=" py-2 px-5 text-red-600 text-4xl"
                                            value="adult"
                                        >
                                            -
                                        </button>
                                        <span className=" py-2 px-5">
                                            passenger count
                                        </span>
                                        <button
                                            type="button"
                                            className=" py-2 px-5 text-red-600 text-4xl"
                                            value="adult"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center my-5">
                                    <div>
                                        <h2 className="text-xl mb-1">
                                            Young adult
                                        </h2>
                                        <h3>Age 12 - 15</h3>
                                    </div>
                                    <div className="flex justify-around items-center border bg-slate-100">
                                        <button
                                            type="button"
                                            className=" py-2 px-5 text-red-600 text-4xl"
                                            value="adult"
                                        >
                                            -
                                        </button>
                                        <span className=" py-2 px-5">
                                            yound adult count
                                        </span>
                                        <button
                                            type="button"
                                            className=" py-2 px-5 text-red-600 text-4xl"
                                            value="adult"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-center my-5 items-center">
                                <button className="py-3 px-10 text-xl cursor-pointer border-red-600 border text-red-600">
                                    Done
                                </button>
                            </div>
                        </div> */}
                    </div>
                    <input
                        className="border-3 text-xl  font-medium border my-5 cursor-pointer bg-black py-5 px-10 text-white"
                        type="submit"
                        value="Book Now"
                    />
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
