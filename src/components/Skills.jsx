import React from 'react';
import HTML from '../assets/html image.png';
import CSS from '../assets/css image.png'
import Javascript from '../assets/javascript image.png';
import ReactImg from '../assets/react image.png';
import Node from '../assets/node image.png';
import Github from '../assets/github black image.png';
import Express from '../assets/express image.png';
import Postgres from '../assets/postgres image.png';
import Jest from '../assets/jest image.png';
import Redux from '../assets/redux image.png';
import Figma from '../assets/Figma image.png';
import Playwright from '../assets/playwright image.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen'>
        <div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-4xl text-[#7562a1] font-[Amsterdam4] font-bold inline border-b-4 border-[#2a145b] pb-4'>Skills</p>
                <p className='text-2xl py-10'>These are my Tech Superpowers!</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center px-20'>
                <div className='hover:scale-110 duration-700 mx-auto py-4'>
                    <img className='w-20' src={HTML} alt="HTML icon" />
                    <p>HTML</p>
                </div>
                <div className='hover:scale-110 duration-700 mx-auto py-4'>
                    <img className='w-20' src={CSS} alt="CSS icon" />
                    <p>CSS</p>
                </div>
                <div className='hover:scale-110 duration-700 mx-auto py-4'>
                    <img className='w-20' src={Javascript} alt="JS icon" />
                    <p>Javascript</p>
                </div>
                <div className='hover:scale-110 duration-700 mx-auto py-4'>
                    <img className='w-20' src={ReactImg} alt="React icon" />
                    <p>React</p>
                </div>
                <div className='hover:scale-110 duration-700 mx-auto py-4'>
                    <img className='w-20' src={Redux} alt="Redux icon" />
                    <p>Redux</p>
                </div>
                <div className='hover:scale-110 duration-700 mx-auto py-4'>
                    <img className='w-20' src={Node} alt="Node icon" />
                    <p>Node JS</p>
                </div>
                <div className='hover:scale-110 duration-700 mx-auto py-4'>
                    <img className='w-20' src={Express} alt="Express icon" />
                    <p>Express</p>
                </div>
                <div className='hover:scale-110 duration-700 mx-auto py-4'>
                    <img className='w-20' src={Postgres} alt="PostgreSQL icon" />
                    <p>PostgreSQL</p>
                </div>
                <div className='hover:scale-110 duration-700 mx-auto py-4'>
                    <img className='w-20' src={Jest} alt="Jest icon" />
                    <p>Jest</p>
                </div>
                <div className='hover:scale-110 duration-700 mx-auto py-4'>
                    <img className='w-20' src={Playwright} alt="Playwright icon" />
                    <p>Playwright</p>
                </div>
                <div className='hover:scale-110 duration-700 mx-auto py-4'>
                    <img className='w-20' src={Github} alt="Github icon" />
                    <p>Github</p>
                </div>
                <div className='hover:scale-110 duration-700 mx-auto py-4'>
                    <img className='w-20' src={Figma} alt="Figma icon" />
                    <p>Figma</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;