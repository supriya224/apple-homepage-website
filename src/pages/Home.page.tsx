/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { MainLayout } from "../layouts";
import Card from "../components/core/card/Card";
import Swiper from "../components/core/pagination/Pagination";

const HomePage: React.FC = () => {
  const images = [
    "https://i.ytimg.com/vi/HNPKSSqOa9Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAvXnBvgWjTuaevXbtcpfFUzT4Cbw",
    "https://www.apple.com/tv-pr/shows-and-films/d/dark-matter/images/season-01/thumbnail/key-art-01/Apple_TV_Dark_Matter_key_art_main_16_9.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnyQ9I5jeyBraKif-_ri6HRRyy9iMp4RC20w&s",
    "https://www.apple.com/tv-pr/shows-and-films/a/acapulco/images/season-03/thumbnail/key-art-01/Apple_TV_Acapulco_key_art_main_16_9.jpg",
    "https://www.apple.com/newsroom/images/product/apple-tv-plus/standard/Apple-Today-at-Apple-session-Ted-Lasso-hero_big.jpg.slideshow-xlarge_2x.jpg",
    "https://learn.appletvapp.apple/api/storage/images/65fb5ae5938b4e00077de963/en-us-large@1x.jpeg",
    "https://www.apple.com/tv-pr/shows-and-films/t/the-big-cigar/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_The_Big_Cigar_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1717004405773",
    "https://www.apple.com/tv-pr/articles/2022/07/apples-global-comedy-sensation-loot-renewed-for-season-two/images/big-image/teaser/ATV_Loot_Key_Art_big_image_post.jpg.large.jpg",
    "https://i.ytimg.com/vi/eJ_AxxKj_30/maxresdefault.jpg"
  ];
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

        <div className=" relative flex justify-center text-center bg-black h-fit">
          <div className="absolute mt-12 text-white   ">
            <h4 className="text-6xl font-bold">iPad 15 Pro</h4>
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
            src="https://www.apple.com/v/ipad-pro/ap/images/overview/themes/design/modal/hero__mdl3lpkglcia_large.jpg"
            alt=""
            className=" h-full mt-32 pt-32"
          />
        </div>
        {/* card */}
        <Card />
        <Swiper images={images} />
      </section>
    </MainLayout>
  );
};

export default HomePage;
