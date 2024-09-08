import React from "react";
// import TopAccordian from "../FAQ";
import "react-accessible-accordion/dist/fancy-example.css";

const Header = ({ Reload, ActiveConfetti }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className="w-full">
          <p className="text-[36px] my-16 text-center dark:text-white font-semibold">
            Purchase Promotions From Your Favorite Influencers
          </p>
        </div>
        {/* <TopAccordian Reload={Reload} ActiveConfetti={ActiveConfetti} /> */}
      </div>
    </div>
  );
};

export default Header;
