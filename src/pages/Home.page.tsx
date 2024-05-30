/* eslint-disable react/jsx-no-undef */
import React from "react";
import { MainLayout } from "../layouts";

function HomePage() {
  return (
    <MainLayout>
      <section>
        <div className=" relative flex justify-center text-center ">
          <div className="absolute text-white mt-16 ">
            <h4 className="text-6xl font-bold">iPhone 15 Pro</h4>
            <p className="text-2xl">Titanium. So strong. So light. So Pro</p>
            <div className=" flex justify-center gap-8 my-3 ">
              <button
                type="button"
                className="bg-blue-500 p-2 px-6 rounded-full text-sm  ">
                Learn More
              </button>
              <button
                type="button"
                className="text-blue-500 border border-blue-500 rounded-full p-2 px-6 ">
                Buy
              </button>
            </div>
          </div>
          <img
            src="https://www.apple.com/v/iphone-15-pro/c/images/meta/iphone-15-pro_overview__f8jz7aagka2q_og.png"
            alt=""
            className="w-full h-[90vh]"
          />
        </div>

        <div className=" relative flex justify-center text-center bg-white h-fit  mt-28">
          <div className="absolute mt-12   ">
            <h4 className="text-6xl font-bold">iPhone 15 Pro</h4>
            <p className="text-2xl">Titanium. So strong. So light. So Pro</p>
            <div className=" flex justify-center gap-8 my-3 pb-32 ">
              <button
                type="button"
                className="bg-blue-500 p-2 px-6 rounded-full text-sm  ">
                Learn More
              </button>
              <button
                type="button"
                className="text-blue-500 border border-blue-500 rounded-full p-2 px-6 ">
                Buy
              </button>
            </div>
          </div>
          <img
            src="https://www.apple.com/v/iphone-15/c/images/meta/iphone-15_overview__gm0jynt55aai_og.png?202404050445"
            alt=""
            className="w-full h-[80vh] mt-12"
          />
        </div>
        <div className=" relative flex justify-center text-center bg-white h-fit  mt-28">
          <div className="absolute mt-12   ">
            <h4 className="text-6xl font-bold">iPhone 15 Pro</h4>
            <p className="text-2xl">Titanium. So strong. So light. So Pro</p>
            <div className=" flex justify-center gap-8 my-3 pb-32 ">
              <button
                type="button"
                className="bg-blue-500 p-2 px-6 rounded-full text-sm  ">
                Learn More
              </button>
              <button
                type="button"
                className="text-blue-500 border border-blue-500 rounded-full p-2 px-6 ">
                Buy
              </button>
            </div>
          </div>
          <img
            src="https://www.apple.com/v/ipad-pro/ap/images/overview/closer-look/space-black/slide_1A__cxvssgdj2v6u_large_2x.jpg"
            alt=""
            className="w-full h-[80vh] mt-12"
          />
        </div>
      </section>
    </MainLayout>
  );
}

export default HomePage;
