import { gsap, ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { useEffect, useLayoutEffect, useRef } from "react";

function App() {
  const path = useRef();
  const coin = useRef();
  const wrapper = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    var myAnim = gsap.timeline({
      // defaults: { duration: 2 },
      scrollTrigger: {
        trigger: path.current,
        scrub: 2,
        start: "top top",
        end: "bottom bottom",
        // markers: true,
      },
    });
    myAnim.to(coin.current, {
      ease: "none",
      motionPath: {
        path: path.current,
        align: path.current,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });
    // gsap.set(coin.current, {
    //   transformOrigin: "50% 50%",
    // });
    // gsap.to(coin.current, {
    //   scrollTrigger: {
    //     trigger: document.querySelector(".App"),
    //     start: "top top",
    //     end: "bottom bottom",
    //     // scrub: 1,
    //   },
    //   duration: 10000,
    //   motionPath: {
    //     path: path.current,
    //     align: path.current,
    //     alignOrigin: [0.5, 0.5],
    //     autoRotate: true,
    //     end: 1,
    //     start: 0,
    //   },
    // });
  }, []);

  return (
    <div className="App" ref={wrapper}>
      <img ref={coin} src="/coin.png" alt="" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980.51 4149.01">
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
    </div>
  );
}

export default App;
