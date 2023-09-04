import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover <br />
              Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              E simplesmente uma simulação de texto da indústria tipográfica e
              de impressos, e vem sendo utilizado desde o século XVI.
            </span>
            <span className="secondaryText">
              Lorem Ipsum sobreviveu não só a cinco séculos, como também ao
              salto para a editoração eletrônica, permanecendo essencialmente
              inalterado.
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1} end={100} duration={8} />
                <span>+</span>
              </span>
              <span className="secondary-Text">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={8} />
                <span>+</span>
              </span>
              <span className="secondary-Text">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondary-Text">Award Winning</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
