import React from "react";
import Footer from "./shared/footer/Footer";

function Discription() {
  return (
    <section className="bg-zinc-100">
      <div className="container mx-auto w-auto h-min text-xs flex mt-2 space-y-3 ">
        <ul className="leading-7">
          <li>
            1. Get extra trade-in credit when you trade in an eligible iPhone
            and purchase a new eligible Apple device through June 3, 2024.
            Additional terms from Apple or Apple’s trade-in partners may apply.
          </li>
          <li>
            Available in the U.S. on apple.com, in the Apple Store app, and at
            Apple Stores.
          </li>
          <li>
            To access and use all Apple Card features and products available
            only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad that supports and has the latest version of iOS or
            iPadOS. Apple Card is subject to credit approval, available only for
            qualifying applicants in the United States, and issued by Goldman
            Sachs Bank USA, Salt Lake City Branch.
          </li>
          <li>
            If you reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about Apple Card.
          </li>
          <li>
            Learn more about how Apple Card applications are evaluated at
            support.apple.com/kb/HT209218.
          </li>
          <li>A subscription is required for Apple TV+.</li>
          <li>
            A subscription is required for Apple Arcade, Apple Fitness+, and
            Apple Music.
          </li>
        </ul>
      </div>
      <Footer />
    </section>
  );
}

export default Discription;
