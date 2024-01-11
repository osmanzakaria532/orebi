import React from "react";

const ContainerFluid = ({ className, children }) => {
  return <div className={` w-full ${className} `}>{children}</div>;
};

export default ContainerFluid;
