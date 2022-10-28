import "./styles/Hero.css";

const Hero = () => {
  return (
    <div className="container hero-cont">
      <img src="/hero-left.png" className="left-hero-img" alt="" />
      <img src="/hero-main.png" className="center-hero" alt="" />
      <div className="hero">
        <div className="left-hero">
          <h1 className="head head-gr">
            World's first net deflationary & highly profitable move to earn
            coin!
          </h1>
          <div className="btn-div">
            <button className="cta-btn">Get Start</button>
            <button className="inverse gradient-text">Buy MTG</button>
          </div>
        </div>
        <img src="/hero-coin.png" alt="" />
        <div className="scroll-cont">
          <img src="/mouse.svg" alt="" />
          <p>Scroll Down</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
