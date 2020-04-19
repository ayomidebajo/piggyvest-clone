import React from "react";
import Save1 from "../../img/save1.png";
import Save2 from "../../img/save2.png";
import Save3 from "../../img/save3.png";
import Invest1 from '../../img/invest1.png';
import Invest2 from '../../img/invest2.png';
import Invest3 from '../../img/invest2.png';

function HowTo() {
  return (
    <div className="how-to-container">
      <div className="save--container">
        <div className="center--text">
          <h1 className="h1--text">Save smartly & responsibly!</h1>
          <p className="text--black save">
            PiggyVest helps you reach your savings target much faster with
            various savings types. Plus you can even team up with others to
            reach joint goals.
          </p>
        </div>
        <div className="grid--container">
          <div className="cards">
            <img src={Save1} alt="save" width="400px" />
            <div className="card--text">
              {" "}
              <h2 className="h2--text">
                Enjoy <br /> quarterly savings
              </h2>
              <p className="text--black">
                Join over 100,000 users that use our quarterly savings feature
                called "PiggyBank" to reach their general/personal savings goals
                more quickly.
              </p>
            </div>
          </div>
          <div className="cards">
            <img src={Save2} alt="save" width="400px" />
            <div className="card--text">
              <h2 className="h2--text">
                Reach <br /> multiple targets
              </h2>
              <p className="text--black">
                Set and reach multiple saving goals you set using our "Target
                Savings" feature, you can save for holidays, fees or even
                special events.
              </p>
            </div>
          </div>
          <div className="cards">
            <img src={Save3} alt="save" width="400px" />
            <div className="card--text">
              <h2 className="h2--text">
                Lock <br /> funds away
              </h2>
              <p className="text--black">
                Use our "SafeLock" feature to lock funds away so you don't have
                access until your set date. You also earn over 13% p.a.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="invest--container">
        <div className="center--text">
          <h1 className="h1--text">Invest in bits & on the go!</h1>
          <p className="text--black save">
            Many investments are expensive, which makes it hard to get started.
            At PiggyVest, you too can invest in tiny & affordable chunks and
            still enjoy the same return rates in amazing opportunities.
          </p>
        </div>
        <div className="grid--container">
          <div className="cards">
            <img src={Invest1} alt="save" width="400px" />
            <div className="card--text">
              {" "}
              <h2 className="h2--text">
                Enjoy <br /> quarterly savings
              </h2>
              <p className="text--black">
                Join over 100,000 users that use our quarterly savings feature
                called "PiggyBank" to reach their general/personal savings goals
                more quickly.
              </p>
            </div>
          </div>
          <div className="cards">
            <img src={Invest2} alt="save" width="400px" />
            <div className="card--text">
              <h2 className="h2--text">
                Reach <br /> multiple targets
              </h2>
              <p className="text--black">
                Set and reach multiple saving goals you set using our "Target
                Savings" feature, you can save for holidays, fees or even
                special events.
              </p>
            </div>
          </div>
          <div className="cards">
            <img src={Invest3} alt="save" width="400px" />
            <div className="card--text">
              <h2 className="h2--text">
                Lock <br /> funds away
              </h2>
              <p className="text--black">
                Use our "SafeLock" feature to lock funds away so you don't have
                access until your set date. You also earn over 13% p.a.
              </p>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default HowTo;
