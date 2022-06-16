import React from 'react';
import HTML from '../assets/html image.png';
import CSS from '../assets/css image.png'
import Javascript from '../assets/javascript image.png';
import ReactImg from '../assets/react image.png';
import Node from '../assets/node image.png';
import Tailwind from '../assets/tailwind image.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen'>
        <div>
            <div>
                <p className='text-4xl text-[#7562a1] font-[Amsterdam4] font-bold inline border-b-4 border-[#2a145b]'>Skills</p>
                <p className='text-2xl py-10'>These are my Tech Superpowers!</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='hover:scale-110 duration-700'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='py-4'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-700'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='py-4'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-700'>
                    <img className='w-20 mx-auto' src={Javascript} alt="JS icon" />
                    <p className='py-4'>Javascript</p>
                </div>
                <div className='hover:scale-110 duration-700'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className='py-4'>React</p>
                </div>
                <div className='hover:scale-110 duration-700'>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                    <p className='py-4'>Node JS</p>
                </div>
                <div className='hover:scale-110 duration-700'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='py-4'>Tailwind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills