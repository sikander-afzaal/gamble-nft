import "./styles/Landing.css";
import Faq from "./Faq";
import Hero from "./Hero";
import Playing from "./Playing";
import Token from "./Token";
import Works from "./Works";

const Landing = () => {
  return (
    <div className="container">
      <Hero />
      <Token />
      <Works />
      <Playing />
      <Faq />
    </div>
  );
};

export default Landing;
