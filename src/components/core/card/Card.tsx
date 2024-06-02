import React from "react";

function Card() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-3 mx-3 pt-3 relative">
        <div className="relative w-full">
          <div className="flex justify-center items-end h-[80vh]">
            <img
              className="w-full h-full object-cover"
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/wwdc-2024-294410190-16x9_0.jpg?VersionId=eKH7kdIZ2dt6fTpDA.8PYVL9dirjBF5U&size=690:388"
              alt=""
            />
            <div className="absolute bottom-12 w-full text-white flex justify-center p-4 bg-black bg-opacity-10">
              <div className="w-1/2 text-center">
                <h3 className="text-4xl font-bold mb-2">VWDC24</h3>
                <p className="mb-4 text-xl">
                  Apple Worldwide Developer Conference. Join us online June
                  10-14.
                </p>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="flex justify-center items-end h-[80vh]">
            <img
              className="w-full h-full object-cover"
              src=" https://www.apple.com/v/education/college-students/a/images/overview/bento_battery__eu0cuhmxxc4m_large_2x.jpg"
              alt=""
            />
            <div className="absolute bottom-12 w-full text-white flex justify-center p-4  bg-opacity-10">
              <div className="w-1/2 text-center">
                <h3 className="text-4xl font-bold mb-2">College Students</h3>
                <p className="mb-4 text-xl">Mac and iPad go further.</p>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[80vh]">
          <div className="absolute inset-0 flex flex-col items-center justify-start text-white p-4 pt-16 bg-black bg-opacity-10">
            <h3 className="text-3xl font-bold mb-2">Watch</h3>
            <span className="text-xl mb-2">Series</span>
            <p className="text-lg mb-4">Smarter. Brighter. Mightier.</p>
            <div className="flex space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-full">
                Learn More
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-blue-500 text-white rounded-full">
                Buy
              </button>
            </div>
          </div>
          <img
            className="w-full h-full object-cover"
            src="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/tile/Apple-Watch-S9-hero-230912.jpg.landing-big_2x.jpg"
            alt=""
          />
        </div>

        <div className="relative w-full">
          <div className="flex justify-center items-end h-[80vh]">
            <img
              className="w-full h-full object-fill"
              src="https://www.apple.com/newsroom/images/2024/01/apple-vision-pro-available-in-the-us-on-february-2/article/Apple-Vision-Pro-availability-hero_big.jpg.large.jpg"
              alt=""
            />
            <div className="absolute bottom-12 w-full flex justify-center  bg-opacity-10">
              <div className="w-1/2 text-center">
                <h3 className="text-4xl font-bold mb-2">Vision Pro</h3>
                <p className="mb-4 text-xl">
                  Welcome to the era of Spatial computing
                </p>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[80vh]">
          <div className="absolute mx-32 inset-0 flex flex-col items-center justify-start  p-4 pt-16  bg-opacity-10">
            <h3 className="text-3xl font-bold mb-2">Trade In</h3>
            <p className="text-lg mb-1">
              For a limited time, get $200- $650 in credit toward a new iPhone
              when you trade in iPhone11 or higher
            </p>
            <span className="text-gray-400 mb-1">New through 6.3</span>
            <div className="flex space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-full">
                Learn More
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-blue-500 text-white rounded-full">
                Buy
              </button>
            </div>
          </div>
          <img
            className="w-full h-full object-cover"
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-appletradein.image.large_2x.png"
            alt=""
          />
        </div>

        <div className="relative w-full h-[80vh]">
          <div className="absolute inset-0 flex flex-col items-center justify-start  p-4 pt-16 bg-black bg-opacity-10">
            <h3 className="text-3xl font-bold mb-2">card</h3>
            <span className="text-xl mb-2">Series</span>
            <p className="text-lg mb-4">
              {" "}
              Get up 3% daily cash back with every purchase
            </p>
            <div className="flex space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-full">
                Learn More
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-blue-500 text-white rounded-full">
                Buy
              </button>
            </div>
          </div>
          <img
            className="w-full h-full object-cover"
            src="https://www.thinkingtech.in/wp-content/uploads/apple-credit-card.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Card;
