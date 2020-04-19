import React from "react";
import Appstore from "../../img/appstore.webp";
import Playstore from "../../img/playstore.webp";
import Shield from "../../img/security.png";
import Woman from '../../img/woman-header-min.png'

function Header() {
  return (
    <div>
      <div className="header--container">
        <div className="header--text">
          <h1 className="h1--text">The Better Way To Save & Invest</h1>
          <p className="text--black">
            PiggyVest helps you achieve financial freedom by enabling you save
            responsibly and invest on the go.
          </p>
          <p className="text--black">Earn 10% - 15.5% interests on savings.</p>
          <p className="text--black">Earn over 25% return on investments.</p>
          <button className="btn-green-md"> Create a Free Account</button>
          <div className="download--btns">
            <div className="appstore">
              <img src={Appstore} alt="appstore" height="40px" width="120px" />
            </div>
            <div className="playstore">
              <img
                src={Playstore}
                alt="playstore"
                height="40px"
                width="120px"
              />
            </div>
          </div>
        </div>
        <div className="header--background"><img src={Woman} alt="Woman" width="890px" height="100%"/></div>
      </div>
      <div className="security--container">
        <div className="shield--image">
          <img src={Shield} alt="shield" width="100px" height="100%"/>
        </div>
        <div className="security--text">
          <h3  className="h3--text">Your Security is our Priority</h3>
          <p className="text--black security" >
            PiggyVest uses the highest levels of Internet Security, and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is completely protected from fraud.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
