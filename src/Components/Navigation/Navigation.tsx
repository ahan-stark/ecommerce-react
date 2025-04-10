import React, { useState } from "react";
import AlertDialogSlide from "../../Material-UI/Dialog/AlertDialogSlide";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = useNavigate();
  const naviagateToCategory = () =>{
    router("/category")
  }
  const navStyle =
    "border-[4px] border-yellow-400 rounded-l h-[60%] text-sm w-[7.2em] font-semibold text-center h-[3.2em] pt-[5%] mt-[9%] bg-yellow-300 text-blue-800 cursor-pointer hover:bg-blue-500 hover:text-yellow-300";

  return (
    <div className="flex flex-row gap-6 h-[80%] mt-[2%]">
      <div>
        <div className={navStyle} onClick={naviagateToCategory}>Categories</div>
      </div>
      <div>
        <div className={navStyle}>Cart</div>
      </div>
      <div>
        <div className={navStyle}>Super Cart</div>
      </div>
      <div>
        <div className={navStyle}>Orders</div>
      </div>
      <div>
        <div className={navStyle} onClick={() => setOpenModal(true)}>
          Logout
        </div>
      </div>
      <AlertDialogSlide open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Navigation;
