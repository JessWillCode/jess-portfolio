import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='mt-[250px] sm:w-full h-screen flex justify-center items-center p-8'>
        <form method='POST' action='https://getform.io/f/da489b5b-bce6-4dd0-af53-10af56c502b4' className='flex flex-col max-w-[600px] w-full'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-4xl text-[#7562a1] font-[Amsterdam4] font-bold inline border-b-4 border-[#2a145b] pb-6'>Contact</p>
                <p className='text-2xl text-center py-10'>Submit the form below or shoot me an email- jesswillcode@gmail.com</p>
            </div>
            <input className='my-4 p-4 bg-[#f2f6f9]' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-4 bg-[#f2f6f9]' type='email' placeholder='Email' name='email' />
            <textarea className='my-4 p-4 bg-[#f2f6f9]' name='message' rows='10' placeholder='Message'></textarea>
            <button className='w-[130px] mx-auto text-center  px-6 py-3 my-2 flex items-center text-white bg-[#7562a1] hover:border-[#2a145b] border-2 hover:bg-[#a2d3de]'>Let's Chat!</button>
        </form>
    </div>
  )
}

export default Contact;