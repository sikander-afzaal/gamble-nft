import Hero from "./Hero";
import Playing from "./Playing";
import "./styles/Landing.css";
import Token from "./Token";
import Works from "./Works";

const Landing = () => {
  return (
    <div className="container">
      <Hero />
      <Token />
      <Works />
      <Playing />
    </div>
  );
};

export default Landing;
