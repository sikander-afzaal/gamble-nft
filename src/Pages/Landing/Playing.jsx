import "./styles/Playing.css";
import { gsap, ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
const Playing = () => {
  const section = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(section.current, {
      scrollTrigger: {
        trigger: section.current,
        start: "top 50%",
      },
      opacity: 1,
      duration: 2,
    });
  }, []);
  return (
    <div ref={section} className="playing-cont container">
      <img src="/playing-coins.png" alt="" className="play-coin" />
      <div className="playing">
        <img src="/hand.png" alt="" />
        <div className="playing-flex">
          <h1 className="head head-gr">
            Start <br /> Playing!
          </h1>
          <h2 className="head head-gr">523,000</h2>
          <p>Wallets Joined</p>
          <div className="btn-div">
            <button className="cta-btn">
              Start Playing <img src="/play.png" alt="" />
            </button>
            <button className="inverse">Buy MTG</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playing;
