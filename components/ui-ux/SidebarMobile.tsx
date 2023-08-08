import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SidebarNav from "./SidebarNav";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: React.SetStateAction<boolean>;
}

const SidebarMobile = ({ sidebarOpen, setSidebarOpen }: Props) => {
  return (
    <>
      <h1>Coming soon... SidebarMobile</h1>
    </>
  );
};

export default SidebarMobile;
