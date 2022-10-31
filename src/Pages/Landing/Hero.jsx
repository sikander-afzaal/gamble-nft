import "./styles/Hero.css";
import { gsap, ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

const Hero = () => {
  const TYPED__HEADING = `World's first net deflationary & highly profitable move to earn coin!`;
  const path = useRef();
  const coin = useRef();
  // const wrapper = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

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
        end: 0.99,
        // start: 0,
      },
    });
  }, []);
  return (
    <div id="hero" className="container hero-cont">
      <svg
        width="375"
        height="2520"
        viewBox="0 0 375 2520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-mob"
        preserveAspectRatio="none"
      >
        <path
          d="M208 2515.5L185 2477L158.892 2432.17C158.697 2431.84 158.599 2431.67 158.535 2431.49C158.472 2431.31 158.444 2431.11 158.389 2430.73L145.147 2338.52C145.074 2338.01 145.037 2337.76 145.065 2337.51C145.094 2337.25 145.185 2337.01 145.368 2336.53L199.588 2194.08C199.793 2193.54 199.895 2193.28 200.066 2193.05C200.236 2192.82 200.466 2192.65 200.926 2192.31L241.37 2161.97C241.684 2161.74 241.841 2161.62 241.971 2161.47C242.102 2161.33 242.203 2161.16 242.404 2160.82L304.513 2056.82C304.755 2056.41 304.877 2056.21 304.947 2055.98C305.017 2055.76 305.034 2055.52 305.068 2055.05L308.875 2002.24C308.936 2001.38 308.967 2000.95 308.829 2000.56C308.69 2000.17 308.398 1999.85 307.813 1999.22L229.114 1914.66C228.808 1914.33 228.655 1914.17 228.543 1913.97C228.431 1913.78 228.364 1913.57 228.228 1913.14L198.217 1818.19C198.109 1817.84 198.055 1817.67 198.032 1817.5C198.009 1817.32 198.018 1817.14 198.037 1816.78L203.961 1700.26C203.981 1699.88 203.99 1699.69 204.035 1699.51C204.08 1699.32 204.159 1699.15 204.316 1698.81L239.425 1621.76C239.71 1621.14 239.852 1620.82 239.884 1620.49C239.915 1620.15 239.834 1619.82 239.671 1619.15L213.75 1513.02C213.626 1512.51 213.564 1512.26 213.44 1512.03C213.317 1511.8 213.137 1511.61 212.779 1511.23L88.6211 1379.16C88.3119 1378.83 88.1572 1378.67 88.0437 1378.47C87.9303 1378.28 87.8617 1378.07 87.7245 1377.64L66.5991 1311.38C66.305 1310.46 66.1579 1310 66.2273 1309.53C66.2968 1309.07 66.5731 1308.68 67.1258 1307.88L138.53 1205.18C138.764 1204.84 138.881 1204.67 138.961 1204.48C139.042 1204.3 139.083 1204.09 139.165 1203.69L170.419 1050.4C170.46 1050.2 170.48 1050.1 170.49 1050C170.5 1049.9 170.5 1049.8 170.5 1049.6V940.509C170.5 940.007 170.5 939.756 170.561 939.515C170.622 939.274 170.741 939.054 170.979 938.612L225.644 837.16C225.822 836.831 225.91 836.666 225.967 836.489C226.023 836.312 226.046 836.127 226.092 835.756L254.388 607.899C254.444 607.451 254.472 607.227 254.45 607.005C254.428 606.783 254.356 606.569 254.214 606.141L243.54 574.12C243.274 573.321 243.141 572.922 242.869 572.616C242.598 572.31 242.218 572.13 241.457 571.769L168 537L106.696 499.727C106.104 499.367 105.808 499.187 105.592 498.925C105.376 498.662 105.257 498.337 105.018 497.686L72.7333 409.636C72.6169 409.319 72.5587 409.16 72.528 408.995C72.4973 408.829 72.4947 408.66 72.4893 408.322L70.519 283.206C70.5096 282.607 70.5049 282.308 70.5855 282.024C70.6662 281.741 70.8276 281.489 71.1506 280.985L190 95.5L234.5 27.5L249.5 1"
          stroke="#7E8196"
        />
        <path
          ref={path}
          d="M252 2L199 95.5L80.1506 280.985C79.8276 281.489 79.6662 281.741 79.5855 282.024C79.5049 282.308 79.5096 282.607 79.519 283.206L81.4893 408.322C81.4947 408.66 81.4973 408.829 81.528 408.995C81.5587 409.16 81.6169 409.319 81.7333 409.636L114.018 497.686C114.257 498.337 114.376 498.662 114.592 498.925C114.808 499.187 115.104 499.367 115.696 499.727L177 537L250.457 571.769C251.218 572.13 251.598 572.31 251.869 572.616C252.141 572.922 252.274 573.321 252.54 574.12L263.214 606.141C263.356 606.569 263.428 606.783 263.45 607.005C263.472 607.227 263.444 607.451 263.388 607.899L235.092 835.756C235.046 836.127 235.023 836.312 234.967 836.489C234.91 836.666 234.822 836.831 234.644 837.16L179.979 938.612C179.741 939.054 179.622 939.274 179.561 939.515C179.5 939.756 179.5 940.007 179.5 940.509V1049.6C179.5 1049.8 179.5 1049.9 179.49 1050C179.48 1050.1 179.46 1050.2 179.419 1050.4L148.165 1203.69C148.083 1204.09 148.042 1204.3 147.961 1204.48C147.881 1204.67 147.764 1204.84 147.53 1205.18L76.1258 1307.88C75.5731 1308.68 75.2968 1309.07 75.2273 1309.53C75.1579 1310 75.305 1310.46 75.5991 1311.38L96.7245 1377.64C96.8617 1378.07 96.9303 1378.28 97.0437 1378.47C97.1572 1378.67 97.3119 1378.83 97.6211 1379.16L221.779 1511.23C222.137 1511.61 222.317 1511.8 222.44 1512.03C222.564 1512.26 222.626 1512.51 222.75 1513.02L248.671 1619.15C248.834 1619.82 248.915 1620.15 248.884 1620.49C248.852 1620.82 248.71 1621.14 248.425 1621.76L213.316 1698.81C213.159 1699.15 213.08 1699.32 213.035 1699.51C212.99 1699.69 212.981 1699.88 212.961 1700.26L207.037 1816.78C207.018 1817.14 207.009 1817.32 207.032 1817.5C207.055 1817.67 207.109 1817.84 207.217 1818.19L237.228 1913.14C237.364 1913.57 237.431 1913.78 237.543 1913.97C237.655 1914.17 237.808 1914.33 238.114 1914.66L316.813 1999.22C317.398 1999.85 317.69 2000.17 317.829 2000.56C317.967 2000.95 317.936 2001.38 317.875 2002.24L314.068 2055.05C314.034 2055.52 314.017 2055.76 313.947 2055.98C313.877 2056.21 313.755 2056.41 313.513 2056.82L251.404 2160.82C251.203 2161.16 251.102 2161.33 250.971 2161.47C250.841 2161.62 250.684 2161.74 250.37 2161.97L209.926 2192.31C209.466 2192.65 209.236 2192.82 209.066 2193.05C208.895 2193.28 208.793 2193.54 208.588 2194.08L154.368 2336.53C154.185 2337.01 154.094 2337.25 154.065 2337.51C154.037 2337.76 154.074 2338.01 154.147 2338.52L167.389 2430.73C167.444 2431.11 167.472 2431.31 167.535 2431.49C167.599 2431.67 167.697 2431.84 167.892 2432.17L193.814 2476.68C193.907 2476.84 193.953 2476.92 193.992 2477C194.031 2477.09 194.062 2477.17 194.124 2477.35L209 2519"
          stroke="#7E8196"
          stroke-dasharray="9 9"
        />
      </svg>
      <img ref={coin} src="/coin.png" alt="" className="coin-mob" />
      {window.innerWidth > 1200 ? (
        <img src="/hero-left.png" className="left-hero-img" alt="" />
      ) : (
        <img src="/mob-hero.png" className="left-hero-img" alt="" />
      )}
      <img src="/hero-main.png" className="center-hero" alt="" />
      <div className="hero">
        <div className="left-hero">
          <h1>{TYPED__HEADING}</h1>
          <h1 className="head head-gr"></h1>
          <div className="btn-div">
            <button className="cta-btn">Get Start</button>
            <button className="inverse ">Buy MTG</button>
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
