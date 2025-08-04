import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8'>
                <div className=' w-full text-center pb-8'>
                    <p className='w-full text-4xl text-[#7562a1] font-bold font-[Amsterdam4] inline border-b-4 border-[#2a145b]'>About</p>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pt-4 mt-4 px-20'>
                    <div className='sm:text-left text-3xl font-bold '>
                        <p>Hey there, I'm Jess! Nice to Virtually meet you. Make yourself right at home and take a peek around.</p>
                    </div>
                    <div>
                        <p> I am passionate showing others their magic through design, development, and collaborative problem-solving. I began pursuing software engineering full-time through Bloomtech’s full-stack web development program, where I gained the tools to express myself through a new medium and use my passion to truly make a difference. This career path is the perfect blend of my previous experience and love of design. I can’t wait to join a company that aligns with my values and allows me to thrive as a storyteller!
                        </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About