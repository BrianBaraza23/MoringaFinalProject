import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside
      className={`bg-default-green d-none d-md-block ${
        isCollapsed ? "w-16" : "w-48"
      } z-40 md:z-0 h-screen overflow-y-scroll scrollbar-hide left-0 top-14 transition-all duration-300 ease-in-out`}
    >
      <div className='sticky top-0 bg-default-gold h-16 flex items-center px-3'>
        <div className='h-20 flex items-center justify-center text-xl'>
          {!isCollapsed && (
            <h6 className='text-default-green font-semibold'>MSD Dashboard</h6>
          )}
          <div
            className={`h-8 w-12
                    ${
                      isCollapsed ? "visible" : "invisible"
                    } flex justify-center items-center cursor-pointer absolute right-3`}
          >
            <i
              className='fa fa-bullhorn text-default-green text-3xl md:text-4xl'
              aria-hidden='true'
            ></i>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        {isCollapsed ? (
          <i
            className='fa fa-user-circle text-3xl text-white mt-4 mx-auto'
            aria-hidden='true'
          ></i>
        ) : (
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_os0byb3xeANO3FvA5MgMYvIbmMpxI7VOUg&usqp=CAU'
            alt='user'
            className={`w-16 h-16 rounded-full mt-8`}
          />
        )}
        {!isCollapsed && (
          <>
            <h6 className='text-default-gold py-1'>Yehezkiel Bryan</h6>
            <h6 className='text-white font-semibold italic'>Administrator</h6>
          </>
        )}
        <Link
          to='/'
          className='w-3/5 flex items-center gap-2 text-default-gold p-2 bg-gray-800 rounded mt-4'
        >
          <i className='fa fa-home' aria-hidden='true'></i>
          <h6 className={`${isCollapsed ? "invisible" : ""}`}>Home</h6>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
