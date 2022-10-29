import { useLayoutEffect, useRef } from "react";
import "./styles/Token.css";
import { gsap, ScrollTrigger } from "gsap/all";

const Token = () => {
  const head1 = useRef();
  const head2 = useRef();
  const first = useRef();
  const last = useRef();
  const section = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to([head1.current, head2.current, first.current, last.current], {
      scrollTrigger: {
        trigger: section.current,
        start: "top 40%",
      },
      opacity: 1,
      x: 0,
      stagger: 0.5,
    });
  }, []);
  return (
    <div ref={section} id="token" className="token">
      <div className="flex-col-head">
        <h1 className="head head-gr" ref={head1}>
          Token
        </h1>{" "}
        <h1 className="head head-gr" ref={head2}>
          economics
        </h1>
      </div>
      <div ref={first} className="token-div first">
        <div className="token-row">
          <h2>1,000,000,000</h2>
          <p>Total Supply</p>
        </div>
        <div className="token-row">
          <h2>$1,200,000</h2>
          <p>Initial Valuation</p>
        </div>
        <div className="token-row">
          <h2>25% - 250,000,000</h2>
          <p>Marketing partners & KOLs</p>
        </div>
        <div className="token-row">
          <h2>10% - 100,000,000</h2>
          <p>Team</p>
        </div>
        <img src="/left-arrow.png" className="desktop-img" alt="" />
        <img src="/mob-left.png" alt="" className="mobile-img" />
      </div>
      <div ref={last} className="token-div">
        <img src="/right-arrow.png" className="desktop-img" alt="" />
        <img src="/mob-right.png" alt="" className="mobile-img" />
        <div className="token-row">
          <h2>36%</h2>
          <p>Initial circulating supply</p>
        </div>
        <div className="token-row">
          <h2>$430,000</h2>
          <p>Initial Market Cap</p>
        </div>
        <div className="token-row">
          <h2>40% - 400,000,000</h2>
          <p>DAO Maker sale</p>
        </div>
        <div className="token-row">
          <h2>20% - 200,000,000</h2>
          <p>Liquidity</p>
        </div>
      </div>
    </div>
  );
};

export default Token;
