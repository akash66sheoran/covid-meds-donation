import React from "react";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://imgix.bustle.com/uploads/image/2019/5/2/ffa82ad4-937e-412c-9bfd-33cb9252e88e-instagram-donate.jpg"

          alt="home_image"
        />
        <div className="home__row">
          <Product
            id="1"
            title="Paracetamol 500mg"
            expiry="OCT-2022"
            image="https://www.practostatic.com/practopedia-v2-images/res-750/48303979a4449106d14c48b318a2cf0cc2ed3b291.jpg"
          />
          <Product
            id="2"
            title="Domstal 10mg"
            expiry="JAN-2024"
            image="https://www.internationaldrugmart.com/drug-images/big/otc_domstal_10mg_torrent.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Carzec 6.25mg"
            expiry="FEB-2021"
            image="https://www.practostatic.com/practopedia-v2-images/res-750/5f2ae5d8e5f6f5c9b23b1cf1d7528845340813e81.JPG"
          />
          <Product
            id="4"
            title="Calpol 650mg"
            expiry="SEP-2023"
            image="https://www.practostatic.com/practopedia-v2-images/res-750/114e86a58504efba4c86aed11e52994d71d872ef1.JPG"
          />
          <Product
            id="5"
            title="Cetrizine 10mg"
            expiry="JAN-2023"
            image="https://www.practostatic.com/practopedia-v2-images/res-750/7fe2b6b0281322da5896825d93b2c86d1381234b1.JPG"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Zipcet 5mg"
            expiry="JAN-2021"
            image="https://www.netmeds.com/images/product-v1/600x600/337910/zipcet_5mg_tablet_10_s_0.jpg"
          />
          <Product
            id="7"
            title="Domstal 100mg"
            expiry="MAY-2024"
            image="https://www.internationaldrugmart.com/drug-images/big/otc_domstal_10mg_torrent.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
