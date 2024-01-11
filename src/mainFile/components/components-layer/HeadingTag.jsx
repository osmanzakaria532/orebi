import React from "react";

const HeadingTag = ({ className, children }) => {
  return (
    <div
      className={`text-[40px] font-bold font-DM mb-[48px] capitalize ${className}`}
    >
      {children}
    </div>
  );
};

export default HeadingTag;
