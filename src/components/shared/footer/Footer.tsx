import React from "react";
import CollapsibleSection from "./CollapsibleSection";

function Footer() {
  return (
    <footer className="container mx-auto">
      <section>
        <div className="p-4">
          <div className=" mx-auto">
            <CollapsibleSection title=" Shop and Learn">
              <ul className="text-sm">
                <li>Store</li>
                <li>Mac</li>
                <li>Store</li>
                <li>iPhone</li>
                <li>iPad</li>
                <li>Watch</li>
                <li>Vision </li>
                <li>Airdops</li>
                <li>TV & Home</li>
                <li>Air Tag</li>
                <li>Accessories</li>
                <li>Gift Cards</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title=" Apple Wallet">
              <ul>
                <li>Wallet</li>
                <li>Apple Card</li>
                <li>Apple Pay</li>
                <li>Apple Cash</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title=" Account">
              <ul>
                <li>Manage Your Apple ID</li>
                <li>Apple Store Account</li>
                <li>iCloud.com</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title=" Entertainment">
              <ul>
                <li>Apple One</li>
                <li>Apple TV+</li>
                <li>Apple Music</li>
                <li>Apple Arcade</li>
                <li>Apple Fitness+</li>
                <li>Apple News+</li>
                <li>Apple Podcasts </li>
                <li>Apple Books</li>
                <li>App Store</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title=" Shop and Learn">
              <ul>
                <li>Store</li>
                <li>Mac</li>
                <li>Store</li>
                <li>iPhone</li>
                <li>iPad</li>
                <li>Watch</li>
                <li>Vision </li>
                <li>Airdops</li>
                <li>TV & Home</li>
                <li>Air Tag</li>
                <li>Accessories</li>
                <li>Gift Cards</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Apple Store">
              <ul>
                <li>Find a Store</li>
                <li>Genius Bar</li>
                <li>Today at Apple</li>
                <li>Group Reservations</li>
                <li>Apple Camp</li>
                <li>Apple Store App</li>
                <li>Certified Refurbished </li>
                <li>Apple Trade In</li>
                <li>Financing</li>
                <li>Carrier Deals at Apple</li>
                <li>Order Status</li>
                <li>Shopping Help</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="For Business">
              <ul>
                <li>Apple and Business</li>
                <li>Shop for Business</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="For Education">
              <ul>
                <li>Apple and Education</li>
                <li>Shop for K-12</li>
                <li>Shop for College</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="For Education">
              <ul>
                <li>Apple and Education</li>
                <li>Shop for K-12</li>
                <li>Shop for College</li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="For Government">
              <ul>
                <li>Shop for Government</li>
                <li>Shop for Veterans and Military</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Apple Values">
              <ul>
                <li>Accessibility</li>
                <li>Education</li>
                <li>Environment</li>
                <li>Inclusion and Diversity</li>
                <li>Privacy</li>
                <li>Racial Equity and Justice</li>
                <li>Supply Chain</li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="About Apple">
              <ul>
                <li>Newsroom</li>
                <li>Apple Leadership</li>
                <li>Career Opportunities</li>
                <li>Investors</li>
                <li>Ethics & Compliance</li>
                <li>Events</li>
                <li>Contact Apple</li>
              </ul>
            </CollapsibleSection>
          </div>
        </div>
      </section>

      <section>
        <div className="text-sm py-3">
          <h3>
            More ways to shop: Find an Apple Store or other retailer near you.
            Or call 1-800-MY-APPLE.
          </h3>
        </div>
      </section>
      <hr />
      <section>
        <div className="flex justify-between text-xs py-3">
          <ul className="flex flex-col lg:flex-row xl:flex-row xl:gap-12 lg:gap-12">
            <li>Copyright © 2024 Apple Inc. All rights reserved.</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li> Sales and Refunds</li>
            <li> Legal</li>
            <li> Site Map</li>
          </ul>
          <h3> United State</h3>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
