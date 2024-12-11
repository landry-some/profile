import React, { Component } from "react";
import { Parallax } from "react-parallax";
import avatarImg from "../assets/avatar.png";
import tsinghua from "../assets/tsinghua.png";
import kent from "../assets/kent.png";

import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about-section" id="about">
        <Parallax className="parallax" bgImage={require("./../assets/Backgrounds/Yokohama-wallpaper.jpg")} strength={900}>
          <div className="parallax-content">ABOUT ME</div>
        </Parallax>
        <div className="container fs-text">
          <div className="row">
            <div className="col-md-7 py-5">
              <div className="">&nbsp;&nbsp;Hello ~</div>

              <div className="mt-4">
                &nbsp;&nbsp; Before talking about qualifications and professional abilities, I would like to introduce myself. I am Jacob. Taking web development as a profession not only fulfils my pocket but also my heart, because it has been my passion since I was a teenager. I have a Bachelor's
                degree in Computer Science from Kent University and coursework in eCommerce. I have solid knowledge of programming and graphic designing and my works are not only enchanting but also integrated with graphics, powerful logic and great insight. I am also skillful in problem solving
                methods and acquainted with computer languages like React JS, JavaScript, Node and Python. I have worked on 20+ React projects and solved complex business problems, including eCommerce, real estate and online education. I have consistently saved costs while increasing profits
                exponentially.
              </div>
              <div className="mt-4">
                &nbsp;&nbsp;Besides, my websites are SEO friendly because it did not fail to satisfy the users. Again, I keep myself up to date with new technologies and their uses, new tools and computer languages so that I can give my best level to my clients. I believe in hardship and hiring me
                would not fail your decision.
              </div>
              <div className="mt-4">Outside development, I like investing in the stock markets, playing tennis and swimming.</div>
              <div className="mt-4">I can speak fluent English.</div>
            </div>
            <div className="col-md-5 py-5" style={{ fontSize: 18 }}>
              <div className=" w-100 d-flex justify-content-center">
                <img src={avatarImg} className="avatar-img" />
              </div>
              <div className=" w-100 d-flex justify-content-center">
                <div>
                  <div className="d-flex mt-4 align-items-center">
                    <div>
                      <img src={kent} width="70" />
                    </div>
                    <div className="ml-3">
                      <div className="">Master of Science in IT</div>
                      <span className="text-high">University of Kent </span>Kent, UK
                      <div style={{ fontSize: 15 }}>2012-2016</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
