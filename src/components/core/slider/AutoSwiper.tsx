/* eslint-disable react/no-array-index-key */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";

const images = [
  "https://m.economictimes.com/thumb/msid-101001539,width-1200,height-900,resizemode-4,imgsize-35838/silo-apple-tv-renews-sci-fi-thriller-for-season-2.jpg",
  "https://www.apple.com/tv-pr/shows-and-films/a/acapulco/images/season-03/thumbnail/key-art-01/Apple_TV_Acapulco_key_art_main_16_9.jpg",
  "https://learn.appletvapp.apple/api/storage/images/65fb5ae5938b4e00077de963/en-us-large@1x.jpeg",
  "https://www.apple.com/tv-pr/shows-and-films/t/the-big-cigar/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_The_Big_Cigar_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1717004405773",
  "https://www.apple.com/tv-pr/articles/2022/07/apples-global-comedy-sensation-loot-renewed-for-season-two/images/big-image/teaser/ATV_Loot_Key_Art_big_image_post.jpg.large.jpg",
  "https://i.ytimg.com/vi/eJ_AxxKj_30/maxresdefault.jpg",
  "https://www.shortlist.com/media/imager/202004/47820-original.jpg",
  "https://www.apple.com/tv-pr/articles/2023/01/apples-new-comedy-shrinking-debuts-trailer-ahead-of-january-27-global-premiere-on-apple-tv/images/big-image/big-image-01/011823_ATV_apples_new_comedy_shrinking_debuts_trailer_big_image_post.jpg.large.jpg",
  "https://www.apple.com/tv-pr/articles/2023/04/apple-tv-unveils-trailer-for-thrilling-new-drama-city-on-fire-from-creators-josh-schwartz-and-stephanie-savage/images/big-image/big-image-01/041823_Trailer_New_Drama_City_Fire_Big_Image_01_big_image_post.jpg.og.jpg",
  "https://www.apple.com/tv-pr/articles/2024/02/apple-tv-unveils-a-sneak-peek-at-star-studded-lineup-of-new-and-returning-original-series-set-to-debut-in-2024/images/big-image/big-image-01/020524_Apple_Sneak_Peak_Original_Series_Big_Image_01_big_image_post.jpg.large.jpg",
  "https://www.apple.com/tv-pr/articles/2022/02/apple-tv-presents-exciting-lineup-of-new-series-from-the-worlds-greatest-storytellers-set-to-debut-globally-in-2022/images/big-image/big-image-01/020422_Apple_Presents_Lineup_New_Series_Big_Image_01_big_image_post.jpg.large.jpg"
];
const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt="Slider Image"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
