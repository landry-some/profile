import React, { Component } from "react";
import { Parallax } from "react-parallax";
import avatarImg from "../assets/avatar.png";
import kent from "../assets/univ-logo.png";

import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about-section" id="about">
        <Parallax className="parallax" bgImage={require("./../assets/Backgrounds/Yokohama-wallpaper.jpg")} strength={900}>
          <div className="parallax-content" style={{color: "black"}}>ABOUT ME</div>
        </Parallax>
        <div className="container fs-text">
          <div className="row">
            <div className="col-md-7 py-5">
              <div className="mt-4">
                &nbsp;&nbsp; Experienced and innovative software engineer with 8 years of expertise in designing and implementing cutting-edge software solutions to drive business efficiency. Proficient in all phases of the software development life cycle, from initial planning to
deployment, with a strong track record of managing projects from start to finish. Known for being a proactive, hands-on leader with a talent for guiding cross-functional teams in high-pressure, deadline-focused environments to deliver projects on time and within
budget. Core competencies include database management, Golang, Python, Node.js, and React.
              </div>
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
                      <div className="">Bachelors in CIS</div>
                      <span className="text-high">DeVry University </span> in Atlanta GA
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
