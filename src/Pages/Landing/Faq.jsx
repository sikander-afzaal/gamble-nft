import "./styles/Faq.css";
import { gsap, ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

const Faq = () => {
  const path = useRef();
  const coin = useRef();
  const section = useRef();
  const head = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    gsap.to(head.current, {
      scrollTrigger: {
        trigger: section.current,
        start: "top 50%",
      },
      opacity: 1,
      y: 0,
    });
    var myAnim = gsap.timeline({
      defaults: { duration: 2 },
      scrollTrigger: {
        trigger: path.current,
        scrub: 2,
        start: "top 15%",
        end: "bottom bottom",
        // markers: true,
      },
    });
    myAnim.to(coin.current, {
      ease: "none",
      motionPath: {
        path: path.current,
        align: path.current,
        // autoRotate: true,
        alignOrigin: [0.5, 0.5],
        // end: 3,
        // start: 0,
      },
    });
  }, []);
  return (
    <div ref={section} id="faq" className="container faq-cont">
      <img src="/cube.png" className="cube" alt="" />
      <div className="faq">
        <h1 ref={head} className="head head-gr">
          FAQ
        </h1>
        <div className="faq-grid">
          <div className="faq-box right-box">
            <h2>Can I change my plan later?</h2>
            <p>
              Ofcourse. Our pricing scales with your company. Chat to our
              friendly team to find a solution that works for you.
            </p>
            <img src="/faq1.png" alt="" />
          </div>
          <div className="faq-box left-box">
            <h2>Is there a free trial available?</h2>
            <p>
              Yes, you can try us for free for 30 days. Our friendly team will
              work with you to get you up and running as soon as possible.
            </p>
            <img src="/faq2.png" alt="" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg"
            viewBox="0 0 980.51 4149.01"
          >
            <path
              ref={path}
              className="cls-1"
              d="M622,12.85,257.84,374a2.06,2.06,0,0,0-.49.78L179.22,605.22a1.94,1.94,0,0,0,0,1.26L239,789.85l15.5,33L495.17,1119a2,2,0,0,1,.42.91l64.74,368a2,2,0,0,0,1,1.43L951.5,1694.85l-2.5,177.5L821.86,2091.72a2,2,0,0,1-1,.88l-289.53,106a2,2,0,0,0-1.13,1.06L418.93,2446.41a2,2,0,0,1-1.45,1.14l-355.72,69a2,2,0,0,0-1.56,1.5L27.5,2653.85l-27,108.5,23,737.85a2,2,0,0,0,1,1.7l344.17,186.51a2,2,0,0,1,1,1.35l94.81,459.09"
            />
            <path
              className="cls-1"
              d="M642.5.35,270.33,374a2,2,0,0,0-.48.77L191.72,605.22a1.94,1.94,0,0,0,0,1.26L251.5,789.85"
            />
            <path
              className="cls-2"
              d="M250.68,787.33l17.82,36,240.67,296.1a2,2,0,0,1,.42.91l64.74,368a2,2,0,0,0,1,1.43L965.5,1695.35l14.5,177L852.86,2091.72a2,2,0,0,1-1,.88l-289.53,106a2,2,0,0,0-1.13,1.06L449.93,2446.41a2,2,0,0,1-1.45,1.14l-355.93,69.1a2,2,0,0,0-1.46,1.19l-67.59,162-9,108,36,712.51a2,2,0,0,0,.87,1.55l292.12,199.56a1.94,1.94,0,0,1,.77,1L491.5,4148.85"
            />
          </svg>
          <img ref={coin} src="/coin.png" alt="" className="coin" />
          <div className="faq-box right-box">
            <h2>Can other info be added to an invoice?</h2>
            <p>
              At the moment, the only way to add additional information to
              invoices is to add the information to the workspace's name.
            </p>
            <img src="/faq3.png" alt="" />
          </div>
          <div className="faq-box left-box">
            <h2>What is your cancellation policy?</h2>
            <p>
              We understand that things change. You can cancel your plan at any
              time and we’ll refund you the difference already paid.
            </p>
            <img src="/faq4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
