import React from "react";
import SidebarNav from "./SidebarNav";

const SidebarDesktop = () => {
  return (
    <>
      {/* <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"> */}
      <div className="hidden lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
          <div className="flex shrink-0 items-center">
            {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                /> */}
          </div>
          {/* DESKTOP SIDEBAR NAVIGATION */}
          <SidebarNav />
        </div>
      </div>
    </>
  );
};

export default SidebarDesktop;
