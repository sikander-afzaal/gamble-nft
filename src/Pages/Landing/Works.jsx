import "./styles/Works.css";
import { gsap, ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
const Works = () => {
  const section = useRef();
  const head1 = useRef();
  const head2 = useRef();
  const left = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to([left.current, head1.current, head2.current], {
      scrollTrigger: {
        trigger: section.current,
        start: "top 50%",
      },
      x: 0,
      opacity: 1,
      stagger: 0.5,
    });
  }, []);
  return (
    <div ref={section} id="works" className="works">
      <div ref={left} className="left-works">
        <div className="work-text">
          <div className="left-line"></div>
          <div className="bottom-line"></div>
          <h1>1.</h1>
          <p>Swap or transact tokens to participate in the lottery.</p>
        </div>
        <div className="work-text">
          <div className="long-line"></div>
          <div className="right-line"></div>
          <div className="right-bottom-line"></div>
          <h1>2.</h1>
          <p>Each transaction burns 1% & sends 1% to the pot.</p>
        </div>
        <div className="work-text">
          <div className="long-line-right"></div>
          <div className="left-line"></div>
          <div className="bottom-line"></div>
          <h1>3.</h1>
          <p>Each week 10 wallet will receive the pot split equally.</p>
        </div>
        <div className="work-text">
          <div className="long-line"></div>
          <h1>4.</h1>
          <p>You win 1 ticket for each token sent to the pot.</p>
        </div>
      </div>
      <div className="flex-col-head">
        <h1 ref={head1} className="head head-gr">
          How does it
        </h1>
        <h1 ref={head2} className="head head-gr">
          works?
        </h1>
      </div>
    </div>
  );
};

export default Works;
