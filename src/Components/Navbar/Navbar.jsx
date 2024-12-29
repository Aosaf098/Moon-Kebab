import Logo from '../../../public/assets/logo1.png'
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div>
           <img className='w-72' src={Logo} alt="" /> 
        </div>
        <div className='flex'>
            <ul className='flex gap-8 items-center'>
                <li>Home</li>
                <li>Contact</li>
                <li>Dashboard</li>
                <li>Menu</li>
                <li className='flex items-center gap-3 text-base'>Shop <BsCart2 size={20} /></li>
                <li className='btn text-base'>Sign Out <FaRegUserCircle size={24} /></li>
            </ul>

        </div>
      </div>
    </>
  );
};

export default Navbar;
