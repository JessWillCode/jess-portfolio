import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/real logo.png';
import {Link} from 'react-scroll';

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
                <li>
                <Link to="home"  smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li><Link to="work"  smooth={true} duration={500} offset={-110}>
                Work
                </Link></li>
                <li><Link to="about"  smooth={true} duration={500}>
                About
                </Link></li>
                <li><Link to="skills"  smooth={true} duration={500} offset={-110}>
                Skills
                </Link></li>
                <li><Link to="contact"  smooth={true} duration={500} offset={-60}>
                Contact
                </Link></li>
            </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#7562a1] flex flex-col justify-center items-center'}>
                <li className='py-6 px-20 text-4xl hover:bg-[#a2d3de] hover:text-[#2a145b]'>
                    <Link onClick={handleClick} to="home"  smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li className='py-6 px-20 text-4xl hover:bg-[#a2d3de] hover:text-[#2a145b]'>
                    <Link onClick={handleClick} to="work"  smooth={true} duration={500} offset={-110}>
                Work
                </Link>
                </li>
                <li className='py-6 px-20 text-4xl hover:bg-[#a2d3de] hover:text-[#2a145b]'>
                    <Link onClick={handleClick} to="about"  smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li className='py-6 px-20 text-4xl hover:bg-[#a2d3de] hover:text-[#2a145b]'>
                    <Link onClick={handleClick} to="skills"  smooth={true} duration={500} offset={-110}>
                Skills
                </Link>
                </li>
                <li className='py-6 px-20 text-4xl hover:bg-[#a2d3de] hover:text-[#2a145b]'>
                    <Link onClick={handleClick} to="contact"  smooth={true} duration={500} offset={-60}>
                Contact
                </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[0px] duration-900 bg-[#0072b1]'>
                        <a target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text- white' href="https://www.linkedin.com/in/jesswillco/">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[0px] duration-900 bg-[#443c41]'>
                        <a target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text- white' href="https://github.com/JessWillCode">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[0px] duration-900 bg-[#a2d3de]'>
                        <a className='flex justify-between items-center w-full text- white' href="/"><Link to="contact"  smooth={true} duration={500} offset={-60}>
                            Email </Link><HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[0px] duration-900 bg-[#7562a1]'>
                        <a target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text- white' href="https://docs.google.com/document/d/1YXRRRxgrSsCfvbSsxgaj25EixmH3dc12FdxpmQZDgSg/edit?usp=sharing">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>
    </div>
  )
}

export default Navbar;
