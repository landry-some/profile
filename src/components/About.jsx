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
                &nbsp;&nbsp; Golang, Python, and React-focused engineer with over 9 years of experience in full stack development, 
                focusing on reliability, performance, and real business value. Very experienced across the full software development 
                lifecycle, from requirements analysis and system architecture through to hands-on implementation, deployment, 
                and long-term optimization. Known for designing and operating distributed microservices and event-driven systems, 
                which efficiently handle high throughput and complex workflows. Brings strong backend competencies in high-performance
                Golang services combined with hands-on frontend experience in building responsive, user-centric interfaces using React.
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
