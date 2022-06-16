import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import Pic from '../assets/pic of me.png';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#dfeff4]'>
        
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div classname='flex snap-center bg-[black] border-solid border-blue-600'>
                <img className='h-[150px] ml-[98px] sm:h-[300px] ml-[300px]' src={Pic} alt='a girl and her 2 dogs'/>
                <h1 className='text-5xl sm:text-7xl text-center font-bold font-[Amsterdam4] text-[#7562a1] py-20'>Jessica Williams</h1>
            </div>
            <h2 className='text-2xl sm:7xl'>Full Stack Software Engineer & Designer</h2>
            <p className='py-3 max-w-[700px]'> I specialize in building magical experiences through responsive full-stack web applications for your users.</p>
            <div>
            <button className='border-[#2a145b] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7562a1] hover:border-[#7562a1] hover:text-white'>View my Work
                <span className='group-hover:rotate-90 duration-700'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Home;