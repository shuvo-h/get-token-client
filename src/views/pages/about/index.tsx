import React from 'react';
import hotel from "../../../assets/images/hotel.jpg";
import bg from "../../../assets/images/reception.jpg";
import indoor from "../../../assets/images/indoor.jpg";
import quote from "../../../assets/images/quote.png";
import "./About.css";
const About = () => {
    const style = {
        backgroundImage: `url(${bg})`,
        opacity: 0.9,
    }
    return (
        <div>
            <section className='fewWords p-10  lg:flex justify-center'>
                <div className='flex items-start lg:w-2/4 p-5 my-20'>
                    <img src={hotel} alt="" />
                </div>
                <div className='items-start justify-start lg:w-2/4 p-5 my-auto '>
                    <div className='w-4/5'>
                        <h3 className='text-2xl font-medium text-gray-400 pt-5'>A few words about us</h3>
                        <h1 className='text-[2.5rem] font-bold text-purple-800 py-5'>Experience luxury accommodation at its finest</h1>
                        <p className='text-lg text-gray-600 pb-5'>Get-tokens is one of the best luxury hotels in our state. We offer high-quality accommodation with a wide variety of rooms, additional services, and amenities available to all our guests.</p>
                        <button className='py-5 bg-purple-800 px-10 text-white text-lg'>Read More</button>
                    </div>
                </div>
            </section>
            <section className="bg h-96 bg-cover bg-center flex items-center justify-center ">
                <div className='text-center'>
                    <h1 className='text-purple-800 text-2xl text-center'>Looking for accommodation?</h1>
                    <h1 className='lg:text-[3rem] text-[2rem]  text-center font-bold'>Get-tokens is here to provide you <br /> with the best possible service</h1>

                    <button className='py-5 my-5 bg-purple-800 px-10 text-white text-lg'>view our services</button>
                </div>
            </section>
            <section className='team p-16'>
                <h1 className='text-[2rem] font-semibold text-purple-900'>Meet Our team</h1>
                <p className='text-gray-500 text-lg my-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, molestias doloribus tempore totam aspernatur deserunt explicabo porro asperiores inventore blanditiis.</p>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 m-auto
                '>
                    <div className=' border-2 border-gray-100 m-5' >
                        <img className='max-h-64 h-56' src="" alt="img" />
                        <div className='p-5'>
                            <h1 className='text-2xl font-semibold'>Members Name</h1>
                            <h5 className='text-lg text-purple-900'>Members job</h5>

                            <p className='text-gray-500 py-5 w-4/5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, ipsum.</p>
                            <div>
                                {/* social icon */}
                            </div>
                        </div>
                    </div>
                    <div className=' border-2 border-gray-100 m-5' >
                        <img className='max-h-64 h-56' src="" alt="img" />
                        <div className='p-5'>
                            <h1 className='text-2xl font-semibold'>Members Name</h1>
                            <h5 className='text-lg text-purple-900'>Members job</h5>

                            <p className='text-gray-500 py-5 w-4/5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, ipsum.</p>
                            <div>
                                {/* social icon */}
                            </div>
                        </div>
                    </div>
                    <div className=' border-2 border-gray-100 m-5' >
                        <img className='max-h-64 h-56' src="" alt="img" />
                        <div className='p-5'>
                            <h1 className='text-2xl font-semibold'>Members Name</h1>
                            <h5 className='text-lg text-purple-900'>Members job</h5>

                            <p className='text-gray-500 py-5 w-4/5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, ipsum.</p>
                            <div>
                                {/* social icon */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex lg:flex-row-reverse flex-col i p-14 mx-20 my-14'>
                <div className='lg:w-2/5 flex items-center justify-center'>
                    <img src={indoor} alt="" />
                </div>
                <div className='lg:w-3/5 flex items-center lg:justify-start justify-center lg:text-left text-center'>
                    <div className='w-3/4'>
                        <h1 className='lg:text-[3rem] text-[2rem] text-purple-800 font-semibold my-5'>Trusted and loved by <br /> the clients all over the US</h1>
                        <div >

                            <p className='text-2xl font-semibold'>

                                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque voluptas tempore explicabo, quaerat minima eaque velit illo laborum, necessitatibus unde eos accusamus natus similique nemo ipsum distinctio reiciendis culpa possimus."
                            </p>
                        </div>
                        <div className='lg:flex p-10'>
                            <div>
                                <img className=' w-24 h-24 lg:m-0 first-letter: mx-auto my-5 p-3  rounded-full ring-4 ring-purple-800' src="" alt="user photo" />
                            </div>
                            <div className='my-auto mx-5'>
                                <p className='font-semibold text-2xl'>User's Name</p>
                                <p className='text-lg text-gray-500'> quoted date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex items-center justify-center  h-[25rem] md:h-[30rem] bg-purple-800'>
                <div className='text-center p-14'>
                    <h1 className='text-white text-[3rem] md:text-[4rem] font-bold'>150+ rooms to choose from</h1>
                    <h2 className='text-[2rem] md:text-[2.5rem] font-semibold text-white'>We are your #1 choice if you are looking for a comfortable place to stay.</h2>
                    <button className='text-white text-xl m-3 px-10 py-3 border-4 '>Book Now</button>
                </div>
            </section>

        </div>
    );
};

export default About;