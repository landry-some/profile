import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-section" id="contact">
        <div className="e-mail">
          <div>jradack.tech@gmail.com</div>
          <div>+1 650 385 8062</div>
        </div>
        <div className="copyright">
          <div>$kype: live:.cid.a6b4066a3f33fe29</div>
        </div>
      </div>
    );
  }
}
