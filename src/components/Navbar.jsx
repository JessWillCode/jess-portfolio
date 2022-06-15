import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/real logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#7562a1] text-white'>
        <div>
            <img src={Logo} alt='Logo JessWillCode' style={{ width: '90px'}} />
        </div>

        {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#7562a1] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* social icons */}
            <div className='flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[0px] duration-900 bg-[#0072b1]'>
                        <a className='flex justify-between items-center w-full text- white' href="https://www.linkedin.com/in/jesswillco/">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[0px] duration-900 bg-[#443c41]'>
                        <a className='flex justify-between items-center w-full text- white' href="https://www.linkedin.com/in/jesswillco/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[0px] duration-900 bg-[#a2d3de]'>
                        <a className='flex justify-between items-center w-full text- white' href="https://www.linkedin.com/in/jesswillco/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[0px] duration-900 bg-[#7562a1]'>
                        <a className='flex justify-between items-center w-full text- white' href="https://www.linkedin.com/in/jesswillco/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>
    </div>
  )
}

export default Navbar;