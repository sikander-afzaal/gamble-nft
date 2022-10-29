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
        // end: 3,
        // start: 0,
      },
    });
  }, []);
  return (
    <div id="hero" className="container hero-cont">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="svg-mob"
        viewBox="0 0 980.51 4149.01"
        preserveAspectRatio="none"
      >
        <path
          ref={path}
          className="cls-1"
          d="M125 1L6.15056 186.485C5.82764 186.989 5.66617 187.241 5.58551 187.524C5.50485 187.808 5.50956 188.107 5.51899 188.706L7.48933 313.822C7.49465 314.16 7.49731 314.329 7.52803 314.495C7.55874 314.66 7.61694 314.819 7.73333 315.136L40.0183 403.186C40.2568 403.837 40.3761 404.162 40.5918 404.425C40.8076 404.687 41.1036 404.867 41.6957 405.227L103 442.5L176.457 477.269C177.218 477.63 177.598 477.81 177.869 478.116C178.141 478.422 178.274 478.821 178.54 479.62L189.214 511.641C189.356 512.069 189.428 512.283 189.45 512.505C189.472 512.727 189.444 512.951 189.388 513.399L161.092 741.256C161.046 741.627 161.023 741.812 160.967 741.989C160.91 742.166 160.822 742.331 160.644 742.66L105.979 844.112C105.741 844.554 105.622 844.774 105.561 845.015C105.5 845.256 105.5 845.507 105.5 846.009V955.096C105.5 955.298 105.5 955.399 105.49 955.499C105.48 955.599 105.46 955.698 105.419 955.895L74.1646 1109.19C74.0826 1109.59 74.0416 1109.8 73.9614 1109.98C73.8812 1110.17 73.764 1110.34 73.5295 1110.68L2.12584 1213.38C1.57312 1214.18 1.29676 1214.57 1.22734 1215.03C1.15792 1215.5 1.30499 1215.96 1.59912 1216.88L22.7245 1283.14C22.8617 1283.57 22.9303 1283.78 23.0437 1283.97C23.1572 1284.17 23.3119 1284.33 23.6211 1284.66L147.779 1416.73C148.137 1417.11 148.317 1417.3 148.44 1417.53C148.564 1417.76 148.626 1418.01 148.75 1418.52L174.671 1524.65C174.834 1525.32 174.915 1525.65 174.884 1525.99C174.852 1526.32 174.71 1526.64 174.425 1527.26L139.316 1604.31C139.159 1604.65 139.08 1604.82 139.035 1605.01C138.99 1605.19 138.981 1605.38 138.961 1605.76L133.037 1722.28C133.018 1722.64 133.009 1722.82 133.032 1723C133.055 1723.17 133.109 1723.34 133.217 1723.69L163.228 1818.64C163.364 1819.07 163.431 1819.28 163.543 1819.47C163.655 1819.67 163.808 1819.83 164.114 1820.16L242.813 1904.72C243.398 1905.35 243.69 1905.67 243.829 1906.06C243.967 1906.45 243.936 1906.88 243.875 1907.74L240.068 1960.55C240.034 1961.02 240.017 1961.26 239.947 1961.48C239.877 1961.71 239.755 1961.91 239.513 1962.32L177.404 2066.32C177.203 2066.66 177.102 2066.83 176.971 2066.97C176.841 2067.12 176.684 2067.24 176.37 2067.47L135.926 2097.81C135.466 2098.15 135.236 2098.32 135.066 2098.55C134.895 2098.78 134.793 2099.04 134.588 2099.58L80.3681 2242.03C80.1851 2242.51 80.0935 2242.75 80.0654 2243.01C80.0374 2243.26 80.074 2243.51 80.1471 2244.02L93.3892 2336.23C93.4444 2336.61 93.4721 2336.81 93.5355 2336.99C93.5989 2337.17 93.6967 2337.34 93.8921 2337.67L120 2382.5"
          stroke="#7E8196"
        />
        <path
          className="cls-2"
          d="M134 1L15.1506 186.485C14.8276 186.989 14.6662 187.241 14.5855 187.524C14.5049 187.808 14.5096 188.107 14.519 188.706L16.4893 313.822C16.4947 314.16 16.4973 314.329 16.528 314.495C16.5587 314.66 16.6169 314.819 16.7333 315.136L49.0183 403.186C49.2568 403.837 49.3761 404.162 49.5918 404.425C49.8076 404.687 50.1036 404.867 50.6957 405.227L112 442.5L185.457 477.269C186.218 477.63 186.598 477.81 186.869 478.116C187.141 478.422 187.274 478.821 187.54 479.62L198.214 511.641C198.356 512.069 198.428 512.283 198.45 512.505C198.472 512.727 198.444 512.951 198.388 513.399L170.092 741.256C170.046 741.627 170.023 741.812 169.967 741.989C169.91 742.166 169.822 742.331 169.644 742.66L114.979 844.112C114.741 844.554 114.622 844.774 114.561 845.015C114.5 845.256 114.5 845.507 114.5 846.009V955.096C114.5 955.298 114.5 955.399 114.49 955.499C114.48 955.599 114.46 955.698 114.419 955.895L83.1646 1109.19C83.0826 1109.59 83.0416 1109.8 82.9614 1109.98C82.8812 1110.17 82.764 1110.34 82.5295 1110.68L11.1258 1213.38C10.5731 1214.18 10.2968 1214.57 10.2273 1215.03C10.1579 1215.5 10.305 1215.96 10.5991 1216.88L31.7245 1283.14C31.8617 1283.57 31.9303 1283.78 32.0437 1283.97C32.1572 1284.17 32.3119 1284.33 32.6211 1284.66L156.779 1416.73C157.137 1417.11 157.317 1417.3 157.44 1417.53C157.564 1417.76 157.626 1418.01 157.75 1418.52L183.671 1524.65C183.834 1525.32 183.915 1525.65 183.884 1525.99C183.852 1526.32 183.71 1526.64 183.425 1527.26L148.316 1604.31C148.159 1604.65 148.08 1604.82 148.035 1605.01C147.99 1605.19 147.981 1605.38 147.961 1605.76L142.037 1722.28C142.018 1722.64 142.009 1722.82 142.032 1723C142.055 1723.17 142.109 1723.34 142.217 1723.69L172.228 1818.64C172.364 1819.07 172.431 1819.28 172.543 1819.47C172.655 1819.67 172.808 1819.83 173.114 1820.16L251.813 1904.72C252.398 1905.35 252.69 1905.67 252.829 1906.06C252.967 1906.45 252.936 1906.88 252.875 1907.74L249.068 1960.55C249.034 1961.02 249.017 1961.26 248.947 1961.48C248.877 1961.71 248.755 1961.91 248.513 1962.32L186.404 2066.32C186.203 2066.66 186.102 2066.83 185.971 2066.97C185.841 2067.12 185.684 2067.24 185.37 2067.47L144.926 2097.81C144.466 2098.15 144.236 2098.32 144.066 2098.55C143.895 2098.78 143.793 2099.04 143.588 2099.58L89.3681 2242.03C89.1851 2242.51 89.0935 2242.75 89.0654 2243.01C89.0374 2243.26 89.074 2243.51 89.1471 2244.02L102.389 2336.23C102.444 2336.61 102.472 2336.81 102.535 2336.99C102.599 2337.17 102.697 2337.34 102.892 2337.67L129 2382.5"
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
