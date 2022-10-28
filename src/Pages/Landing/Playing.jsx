import "./styles/Playing.css";

const Playing = () => {
  return (
    <div className="playing-cont container">
      <img src="/playing-coins.png" alt="" className="play-coin" />
      <div className="playing">
        <img src="/hand.png" alt="" />
        <div className="playing-flex">
          <h1 className="head head-gr">
            Start <br /> Playing!
          </h1>
          <h2 className="head head-gr">523,000</h2>
          <p>Wallets Joined</p>
          <div className="btn-div">
            <button className="cta-btn">
              Start Playing <img src="/play.png" alt="" />
            </button>
            <button className="inverse gradient-text">Buy MTG</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playing;
