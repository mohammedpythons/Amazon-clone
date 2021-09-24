import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner image"
      />

      <div className="home__row">
        <Product
          id="1236985"
          title="amaxone Echo (3rd generation) | smart speaker with Alexa"
          price="550"
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
        <Product
          id="2231458523354"
          title="Samsung Curved LED Gaming"
          price="222"
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3231263213354"
          title="500 Robotic Vacuum"
          price="303.91"
          rating={3}
          image="https://m.media-amazon.com/images/I/71h2UbdETKL._AC_SL1353_.jpg"
        />
        <Product
          id="42312335986354"
          title="Hornbill Smart Door Lock"
          price="179.99"
          rating={2}
          image="https://m.media-amazon.com/images/I/61doB9T50iL._AC_SL1500_.jpg"
        />
        <Product
          id="523123348527754"
          title="Refoss Smart Wi-Fi Garage Door Opener"
          price="49.99"
          rating={4}
          image="https://m.media-amazon.com/images/I/61maLh52isL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="62312338999954"
          title="Samsung - 55 QN60A QLED 4K UHD Smart TV"
          price="1,098"
          rating={5}
          image="https://i5.walmartimages.ca/images/Enlarge/199/600/6000203199600.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
