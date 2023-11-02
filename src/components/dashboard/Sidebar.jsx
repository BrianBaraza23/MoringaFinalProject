import React from "react";

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside
      className={`bg-default-green ${
        isCollapsed ? "w-16" : "w-48"
      } z-40 md:z-0 h-screen overflow-y-scroll scrollbar-hide left-0 top-14 transition-all duration-300 ease-in-out`}
    >
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
        <h6 className='text-default-gold py-1'>Yehezkiel Bryan</h6>
        <h6 className='text-white font-semibold italic'>Administrator</h6>
      </div>
    </aside>
  );
};

export default Sidebar;
