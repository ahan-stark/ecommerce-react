import React from "react";

const Navigation = () => {
  //styling//
  const navStyle =
    "border-[4px] border-yellow-400 rounded-l h-[60%] text-sm w-[7.2em] font-semibold  text-center h-[3.2em] pt-[5%] mt-[9%]  bg-yellow-300 text-blue-800 cursor-pointer  hover:bg-blue-500 hover:text-yellow-300";
  //styling//
  return (
    <div className=" flex flex-row gap-6  h-[80%] mt-[2%]">
      <div>
        <div className={navStyle}>Categories</div>
      </div>
      <div>
        <div className={navStyle}>Cart</div>
      </div>
      <div>
        <div className={navStyle}>orders</div>
      </div>
      <div>
        <div className={navStyle}>Logout</div>
      </div>
    </div>
  );
};

export default Navigation;
