import "./styles/Token.css";

const Token = () => {
  return (
    <div id="token" className="token">
      <h1 className="head head-gr">
        Token <br /> economics
      </h1>
      <div className="token-div">
        <div className="token-row">
          <h2>1,000,000,000</h2>
          <p>Total Supply</p>
        </div>
        <div className="token-row">
          <h2>$1,200,000</h2>
          <p>Initial Valuation</p>
        </div>
        <div className="token-row">
          <h2>25% - 250,000,000</h2>
          <p>Marketing partners & KOLs</p>
        </div>
        <div className="token-row">
          <h2>10% - 100,000,000</h2>
          <p>Team</p>
        </div>
        <img src="/left-arrow.png" className="desktop-img" alt="" />
        <img src="/mob-left.png" alt="" className="mobile-img" />
      </div>
      <div className="token-div">
        <img src="/right-arrow.png" className="desktop-img" alt="" />
        <img src="/mob-right.png" alt="" className="mobile-img" />
        <div className="token-row">
          <h2>36%</h2>
          <p>Initial circulating supply</p>
        </div>
        <div className="token-row">
          <h2>$430,000</h2>
          <p>Initial Market Cap</p>
        </div>
        <div className="token-row">
          <h2>40% - 400,000,000</h2>
          <p>DAO Maker sale</p>
        </div>
        <div className="token-row">
          <h2>20% - 200,000,000</h2>
          <p>Liquidity</p>
        </div>
      </div>
    </div>
  );
};

export default Token;
