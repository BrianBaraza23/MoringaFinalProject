import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import TopBar from "../components/dashboard/TopBar";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div>
      <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className='flex h-screen overflow-hidden'>
        <Sidebar isCollapsed={isCollapsed} />
        <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
          <main>
            <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
              <h4>Hello there, this is the dashboard</h4>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
