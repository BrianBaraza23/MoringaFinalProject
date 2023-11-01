import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import TopBar from "../components/dashboard/TopBar";
import ProfileSection from "../components/dashboard/ProfileSection";
import CategorySection from "../components/dashboard/CategorySection";

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
              <ProfileSection />
              <CategorySection />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
