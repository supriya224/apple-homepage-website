import React from "react";

function Card() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-3 mx-3 relative">
        <div className="pt-3 flex justify-center items-center ">
          <div className="absolute text-white w-1/2">
            <h3>VWDC24</h3>
            <p>
              apple worldwide developer conference. Join us online June 10-14.{" "}
            </p>
            <button type="button">learn More</button>
          </div>
          <img
            className="w-full h-[80vh]"
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/wwdc-2024-294410190-16x9_0.jpg?VersionId=eKH7kdIZ2dt6fTpDA.8PYVL9dirjBF5U&size=690:388"
            alt=""
          />
        </div>
        <div className="pt-3">
          <div className="absolute text-white">
            <h3>College Students</h3>
            <p>Mac and iPad go further.</p>
            <button type="button">learn More</button>
          </div>
          <img
            className="w-full h-[80vh]"
            src=" https://www.apple.com/v/education/college-students/a/images/overview/bento_battery__eu0cuhmxxc4m_large_2x.jpg"
            alt=""
          />
        </div>
        <div className="">
          <div className="absolute text-white">
            <h3>Watch</h3>
            <span>Series</span>
            <p>Smarter. Brighter. Mighter</p>
            <button type="button">learn More</button>
            <button type="button">Buy</button>
          </div>
          <img
            className="w-full h-[80vh]"
            src="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/tile/Apple-Watch-S9-hero-230912.jpg.landing-big_2x.jpg"
            alt=""
          />
        </div>
        <div className="">
          <div className="absolute text-black">
            <h3>Vision Pro</h3>
            <p>Welcome to the era of Spatial computing</p>
            <button type="button">learn More</button>
            <button type="button">Buy</button>
          </div>
          <img
            className="w-full h-[80vh]"
            src="https://www.apple.com/newsroom/images/2024/01/apple-vision-pro-available-in-the-us-on-february-2/article/Apple-Vision-Pro-availability-hero_big.jpg.large.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="w-1/2 absolute text-black">
            <h3>Trade In</h3>
            <p>
              {" "}
              For a limited time, get $200- $650 in credit toward a new iPhone
              when you trade in iPhone11 or higher
            </p>
            <span>New through 6.3</span>
            <button type="button">Get Extra credit</button>
          </div>
          <img
            className="w-full h-[80vh]"
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-appletradein.image.large_2x.png"
            alt=""
          />
        </div>
        <div>
          <div className="absolute text-back">
            <h3>card</h3>
            <p>Get up 3% daily cash back with every purchase</p>
            <button type="button">learn More</button>
            <button type="button">Apple Now</button>
          </div>
          <img
            className="w-full h-[80vh]"
            src="https://www.thinkingtech.in/wp-content/uploads/apple-credit-card.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Card;
