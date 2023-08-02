import React from "react";
import SwitchButton from "../ui-ux/SwitchButton";

const SidebarForm = () => {
  return (
    <div>
      <SwitchButton labelText="Remote Only" />
      <SwitchButton labelText="Featured Only" />
    </div>
  );
};

export default SidebarForm;
