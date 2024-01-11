import React from "react";
import List from "./List";
import LiItem from "./LiItem";

const SubCategory = ({ className }) => {
  return (
    <div
      className={`flex md:w-[557px] justify-between py-4 md:py-8 px-8 md:px-10 ${className}`}
    >
      <div className="text-start">
        <h3 className="text-[#262626] font-bold pb-2 md:pb-5">phones</h3>
        <List className="flex-col">
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="text-[#767676] hover:text-[#262626]"
          />
        </List>
      </div>
      <div className="text-end md:text-start">
        <h3 className="text-[#262626] font-bold pb-2 md:pb-5">Computers</h3>
        <List className="flex-col">
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="text-[#767676] hover:text-[#262626]"
          />
        </List>
      </div>
      <div className="text-start mt-3 md:mt-auto">
        <h3 className="text-[#262626] font-bold pb-2 md:pb-5">Smart watches</h3>
        <List className="flex-col">
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="text-[#767676] hover:text-[#262626]"
          />
        </List>
      </div>
      <div className="text-end md:text-start mt-3 md:mt-auto">
        <h3 className="text-[#262626] font-bold pb-2 md:pb-5">Cameras</h3>
        <List className="flex-col">
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="pb-2 text-[#767676] hover:text-[#262626]"
          />
          <LiItem
            liInnerContent="hello"
            className="text-[#767676] hover:text-[#262626]"
          />
        </List>
      </div>
    </div>
  );
};

export default SubCategory;
