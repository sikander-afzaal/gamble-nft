import "./styles/Works.css";

const Works = () => {
  return (
    <div className="works">
      <div className="left-works">
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
          <p>You wina1 ticket for each token sent to the pot.</p>
        </div>
      </div>
      <h1 className="head head-gr">
        How does it <br /> works?
      </h1>
    </div>
  );
};

export default Works;
