import Hero from "./Hero";
import "./styles/Landing.css";
import Token from "./Token";
import Works from "./Works";

const Landing = () => {
  return (
    <div className="container">
      <Hero />
      <Token />
      <Works />
    </div>
  );
};

export default Landing;
