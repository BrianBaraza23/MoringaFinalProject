import React from "react";

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside
      className={`bg-default-green ${
        isCollapsed ? "w-16" : "w-48"
      } z-40 md:z-0 h-screen overflow-y-scroll scrollbar-hide left-0 top-0 transition-all duration-300 ease-in-out`}
    >
      <div className='sticky top-0 bg-gray-700 flex gap-4'></div>
      <div className='px-4 pb-4 mb-8'></div>
    </aside>
  );
};

export default Sidebar;
