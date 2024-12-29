import Logo from "../../../public/assets/logo1.png";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-slate-400 bg-opacity-5 absolute w-full z-50 text-white font-semibold px-8">
        <div>
          <img className="w-72" src={Logo} alt="" />
        </div>
        <div className="flex">
          <ul className="flex gap-10 items-center shadow-xl">
            <li>Home</li>
            <li>Contact</li>
            <li>Dashboard</li>
            <li>Menu</li>
            <li className="flex items-center gap-3 text-base">
              Shop <BsCart2 size={20} />
            </li>
            <li className="btn btn-ghost text-base">
              Sign Out <FaRegUserCircle size={24} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
