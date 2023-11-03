import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import HttpsIcon from "@mui/icons-material/Https";

const Header = () => {
  return (
    <div className='bg-default-gold flex flex-wrap items-center md:justify-between py-2 px-4 md:px-12 border-bottom'>
      <div className='w-full md:w-auto flex gap-2 items-center justify-between md:justify-start'>
        <div className='flex items-center gap-1'>
          <i
            className='fa fa-bullhorn text-default-green text-3xl md:text-4xl'
            aria-hidden='true'
          ></i>
          <h2 className='text-default-green font-bold text-4xl my-auto'>MSD</h2>
        </div>
        <h6 className='text-white my-auto font-semibold'>
          Keeping you a click ahead
        </h6>
      </div>
      <ul className='text-default-green w-full md:w-auto flex justify-between items-center md:gap-3 my-auto list-none py-2 md:py-0'>
        <li>
          <Link to='/dashboard' className='flex gap-1 items-center'>
            <PersonIcon style={{ fontSize: "22px" }} />
            <h6 className='my-auto text-md font-semibold'>Dashboard</h6>
          </Link>
        </li>
        <li className='flex gap-1 items-center'>
          <StarIcon style={{ fontSize: "22px" }} />
          <h6 className='my-auto text-md font-semibold'>Wishlist</h6>
        </li>
        <li className='flex gap-1 items-center'>
          <HttpsIcon style={{ fontSize: "22px" }} />
          <h6 className='my-auto text-md font-semibold'>Logout</h6>
        </li>
      </ul>
    </div>
  );
};

export default Header;
