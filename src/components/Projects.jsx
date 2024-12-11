/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './Projects.css';

export default class Projects extends Component {
  state = {
    show: false,
    ReactJS: false,
    Solildity: false,
    Rust: false,
    ERC20: false,
    ERC721: false,
    AWS: false,
    Node: false,
    Python: false,
    Javascript: false,
    ETH: false,
    BSC: false,
    Polygon: false,
    Blockchain: false,
  };

  modalImage = "";
  modalText = "";

  handleFalse(item) {
    this.setState({ [item]: false });
  }

  handleTrue(item) {
    this.setState({ [item]: true });
  }

  handleSwitch(item) {
    var trueOrFalse = this.state[item];
    this.setState({ [item]: !trueOrFalse });
  }

  setModal(image, text) {
    this.modalImage = image;
    this.modalText = text;
  }

  render() {
    const urlearn = (this.state.Python || this.state.Git);
    const uasFrontEnd = (this.state.JavaScript || this.state.ReactJS || this.state.WebApp || this.state.Git);
    const cs50 = (this.state.Python);
    const ambrosePortfolio = (this.state.JavaScript || this.state.ReactJS || this.state.WebApp || this.state.Git);
    const rPiController = (this.state.Python || this.state.Swift || this.state.iOSApp || this.state.Git);
    const personalPortfolio = (this.state.JavaScript || this.state.ReactJS || this.state.WebApp || this.state.Git);
    const imageFilter = (this.state.Cpp || this.state.Git);
    const dancingBiped = (this.state.Python || this.state.Git);
    const mood = (this.state.JavaScript || this.state.ReactJS || this.state.WebApp || this.state.Git);
    const smartMirror = false;
    const wikiMediator = (this.state.Java || this.state.Git);
    const kamino = (this.state.Java || this.state.Git);
    const riscMachine = (this.state.Git);
    const surveyOpti = (this.state.Python || this.state.Git);
    const calculator = (this.state.Swift || this.state.iOSApp || this.state.Git);
    return (
      <div class="projects-section" id="projects">
        <h1 class="page-title">Technical Experience</h1>
        <div className="project-organize">
          <h2 className="project-organize-title">Top skills:</h2>
          <div className={this.state.ReactJS ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("ReactJS"); }}><div>ReactJS</div></div>
          <div className={this.state.Golang ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Golang"); }}><div>Golang</div></div>
          <div className={this.state.Python ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Python"); }}><div>Python</div></div>
          <div className={this.state.Node ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Node"); }}><div>Node</div></div>
          <div className={this.state.AWS ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("AWS"); }}><div>AWS</div></div>
          <div className={this.state.Docker ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Docker"); }}><div>Docker</div></div>
          <div className={this.state.Kubernetes ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Kubernetes"); }}><div>Kubernetes</div></div>
          <div className={this.state.Jenkins ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Jenkins"); }}><div>Jenkins</div></div>
          <div className={this.state.SQL ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("SQL"); }}><div>SQL</div></div>
          <div className={this.state.NoSQL ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("NoSQL"); }}><div>NoSQL</div></div>
          <div className={this.state.Kafka ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Kafka"); }}><div>Kafka</div></div>
          <div className={this.state.SQS ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("SQS"); }}><div>SQS</div></div>
          <div className={this.state.Grafana ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Grafana"); }}><div>Grafana</div></div>
        </div>
        <ul>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={imageFilter ? "project-item highlight" : "project-item"}>
            <span></span>
            <div class="title">Slack Generative AI Chatbot</div>
            <div className="date-mobile">Jul 2024 - Present</div>
            <div class="location">Hooley Solutions (Pleasant Grove, UT)</div>
            <div className="project-skills"><strong>Skills:</strong> Bot, Go, Python, Gen AI/Plugin, LLM, Slack API, DynamoDB, Lambda, AWS</div>
            <div class="info">I developed and deployed a Slack generative chatbot using Go/Python, integrating it with the Slack API and leveraging NLP models like OpenAI GPT for real-time, context-aware conversational interactions. The bot was designed to handle dynamic message parsing, interactive commands, and generate relevant responses to enhance collaboration within Slack workspaces. I also optimized its scalability and efficiency by implementing containerized deployment, ensuring robust API communication, and integrating with CI/CD pipelines for seamless updates.</div>
            <div class="info mt-2 mb-2">&nbsp;&nbsp;<b>My role: </b>I've developed Slack/Gen AI API connections and developed most of the prototypes while testing on it.</div>
            <div className="project-image-container">
              <img className="project-image" src="assets/tradeasy1.png" onClick={() => { this.handleTrue("show"); this.setModal("assets/tradeasy1.png", "Black and white filter"); }} />
            </div>
            <div class="date">
              <span>Jul 2024 -<br />Present</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={urlearn ? "project-item highlight" : "project-item"}>
            <span></span>
            <div class="title">Blockchain Lotery Game Site</div>
            <div className="date-mobile">Jan, 2024 - Jul, 2024</div>
            <div class="location">Blockchain DApp</div>
            <div className="project-skills"><strong>Skills:</strong> ERC20, Smart Contract, React, Solidity, Blockchain, BSC, Web3, Node, MySQL</div>
            <div class="info">&nbsp;&nbsp;Created an website that users can participate 3 game activities: Dice, Coin flip and Wheel. By prediction of the possible output, users can earn crypto of loss. The program randomly show the target result and announce the user who win the game and make payment. Users should connect their wallet to the site and can take crypto anytime they want.</div>
            <div class="info mt-2">&nbsp;&nbsp;My role was to create smart contract based on this logic in BSC, integration with React sites using Web3, React site development with Material UI design.</div>
            <a className={urlearn ? "website-highlighted" : "website"} href="https://sloto.netlify.app/" target="_blank">https://sloto.netlify.app</a>
            <div className="project-image-container">
              <img className="project-image" src="assets/sloto1.png" onClick={() => { this.handleTrue("show"); this.setModal("assets/sloto1.png", "Dashboard"); }} />
              <img className="project-image" src="assets/sloto2.png" onClick={() => { this.handleTrue("show"); this.setModal("assets/sloto2.png", "Dice"); }} />
            </div>
            <div class="date">
              <span>Jan, 2024 -<br />Jul, 2024</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={uasFrontEnd ? "project-item highlight" : "project-item"}>
            <span></span>
            <div class="title">LMS Micro frontends</div>
            <div className="date-mobile">May 2017 - Jul 2021</div>
            <div class="location">Silicon Slopes Consulting (Draper, UT)</div>
            <div className="project-skills"><strong>Skills:</strong>&nbsp;
              <span>Open Edx, React, Golang, Django, MySQL, MongoDB, GraphQL, Lambda, AWS infrastructure, Terraform</span>
            </div>
            <div class="info">&nbsp;&nbsp;Professors can manage and modify their courses within Open edX, allowing students to enroll and earn validated grades. The platform is transitioning to React-based Micro Frontends (MFEs) for each component, aligning with current trends. Built on the latest Open edX version (Lilac), all key frontends, including app, auth, admin, and class, have been migrated to MFEs. Students interact with the app and auth MFEs to access and complete courses designed by administrators or support teams. Administrators utilize the admin panel to monitor student activity, such as course duration, login records, certificates earned, course completion status, and sending notifications via email or SMS. While Open edX offers REST APIs, they are insufficient for building MFEs, leading to the adoption of GraphQL for database management. The platform also leverages various AWS services and infrastructure to enable efficient final deployment.</div>
            <div class="info mt-2 mb-2">&nbsp;&nbsp;<b>My role:</b> I've developed the MFEs and GraphQL from the start. MFEs should be based on edx provided theme, and many configure settings are required to launch. And also built the whole infrastructure in aws using various resources to handle thousands of requests while keeping secure our site.</div>

            <div className="project-image-container">
              <img className="project-image" src="assets/edu1.png" onClick={() => { this.handleTrue("show"); this.setModal("assets/edu1.png", "Homepage"); }} />
              <img className="project-image" src="assets/edu3.png" onClick={() => { this.handleTrue("show"); this.setModal("assets/edu3.png", "Admin Panel"); }} />
            </div>
            <div class="date">
              <span>May 2017 -<br />Jul 2021</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          

          
          
        </ul>
        <Modal dialogClassName="project-modal" show={this.state.show} onHide={() => this.handleFalse("show")}>
          <Modal.Header closeButton>
            <Modal.Title>{this.modalText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="project-modal-image" src={this.modalImage} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
