import "./styles/Faq.css";

const Faq = () => {
  return (
    <div className="container faq-cont">
      <img src="/cube.png" className="cube" alt="" />
      <div className="faq">
        <h1 className="head head-gr">FAQ</h1>
        <div className="faq-grid">
          <div className="faq-box right-box">
            <h2>Can I change my plan later?</h2>
            <p>
              Ofcourse. Our pricing scales with your company. Chat to our
              friendly team to find a solution that works for you.
            </p>
            <img src="/faq1.png" alt="" />
          </div>
          <div className="faq-box left-box">
            <h2>Is there a free trial available?</h2>
            <p>
              Yes, you can try us for free for 30 days. Our friendly team will
              work with you to get you up and running as soon as possible.
            </p>
            <img src="/faq2.png" alt="" />
          </div>
          <img src="/coin.png" alt="" className="coin" />
          <div className="faq-box right-box">
            <h2>Can other info be added to an invoice?</h2>
            <p>
              At the moment, the only way to add additional information to
              invoices is to add the information to the workspace's name.
            </p>
            <img src="/faq3.png" alt="" />
          </div>
          <div className="faq-box left-box">
            <h2>What is your cancellation policy?</h2>
            <p>
              We understand that things change. You can cancel your plan at any
              time and we’ll refund you the difference already paid.
            </p>
            <img src="/faq4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
