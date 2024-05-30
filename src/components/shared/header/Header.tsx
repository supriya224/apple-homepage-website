/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import React from "react";
import { Lock, Search } from "react-feather";

interface HeaderItem {
  title: string;
}
const Header: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const header: HeaderItem[] = [
    {
      title: "Store"
    },
    {
      title: "Mac"
    },
    {
      title: "iPad"
    },
    {
      title: "iPhone"
    },
    {
      title: "Watch"
    },
    {
      title: "Vision"
    },
    {
      title: "AirPods"
    },
    {
      title: "Tv & Home"
    },
    {
      title: "Entertainment"
    },
    {
      title: "Accessories"
    },
    {
      title: "Support"
    }
  ];
  return (
    <header className="text-white bg-zinc-800 ">
      <div className=" container mx-auto flex justify-between  ">
        <img
          width={20}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1724px-Apple_logo_grey.svg.png"
          alt=""
          className="ml-12"
        />
        <div className="flex gap-9 text-sm">
          {header.map((item, index) => {
            return (
              <ul key={index} className="flex  ">
                <li>{item.title}</li>
              </ul>
            );
          })}
        </div>
        <div className="flex gap-5">
          <Search />
          <Lock />
        </div>
      </div>
    </header>
  );
};

export default Header;
