import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-section" id="home">
        <Particles
          class="particulas-section"
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "",
              },
              image: "",
              position: "center",
              repeat: "",
              size: "",
              opacity: 1,
            },
            backgroundMask: {
              cover: {
                color: {
                  value: "#fff",
                },
                opacity: 1,
              },
              enable: false,
            },
            detectRetina: true,
            fpsLimit: 30,
            infection: {
              cure: false,
              delay: 0,
              enable: false,
              infections: 0,
              stages: [],
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: [],
                },
                onDiv: {
                  ids: [],
                  enable: false,
                  mode: [],
                  type: "circle",
                },
                onHover: {
                  enable: false,
                  mode: [],
                  parallax: {
                    enable: true,
                    force: 50,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                attract: {
                  distance: 200,
                  duration: 0.4,
                  speed: 1,
                },
                bubble: {
                  distance: 200,
                  duration: 0.4,
                },
                connect: {
                  distance: 40,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 100,
                  links: {
                    opacity: 1,
                  },
                },
                push: {
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  speed: 1,
                },
                slow: {
                  factor: 3,
                  radius: 200,
                },
                trail: {
                  delay: 1,
                  quantity: 1,
                },
              },
            },
            particles: {
              collisions: {
                enable: true,
                mode: "bounce",
              },
              color: {
                value: "#fff",
                animation: {
                  enable: false,
                  speed: 1,
                  sync: true,
                },
              },
              links: {
                blink: false,
                color: {
                  value: "#fff",
                },
                consent: false,
                distance: 200,
                enable: true,
                opacity: 0.08,
                shadow: {
                  blur: 5,
                  color: {
                    value: "#00ff00",
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                },
                width: 1,
                warp: false,
              },
              move: {
                angle: 90,
                attract: {
                  enable: false,
                  rotate: {
                    x: 3000,
                    y: 3000,
                  },
                },
                direction: "none",
                enable: true,
                noise: {
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                  },
                  enable: false,
                },
                outMode: "out",
                random: false,
                speed: 2,
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: {
                    value: "#000000",
                  },
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: false,
                  area: 800,
                  factor: 1000,
                },
                limit: 200,
                value: 50,
              },
              opacity: {
                animation: {
                  enable: false,
                  minimumValue: 0,
                  speed: 2,
                  sync: false,
                },
                random: {
                  enable: false,
                  minimumValue: 1,
                },
                value: 0.15,
              },
              rotate: {
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false,
                },
                direction: "clockwise",
                path: false,
                random: false,
                value: 0,
              },
              shadow: {
                blur: 0,
                color: {
                  value: "#000000",
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                options: {},
                type: "circle",
              },
              size: {
                animation: {
                  destroy: "none",
                  enable: false,
                  minimumValue: 0,
                  speed: 5,
                  startValue: "max",
                  sync: false,
                },
                random: {
                  enable: false,
                  minimumValue: 1,
                },
                value: 2,
              },
              stroke: {
                width: 0,
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
            },
            pauseOnBlur: true,
          }}
        />
        <div className="intro">
          <div className="name">Jacob R.</div>
          <div className="desc">Sr. React Developer</div>
        </div>
        <Link className="learn-more" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={1000}>
          LEARN MORE<br></br>⌵
        </Link>
      </div>
    );
  }
}
