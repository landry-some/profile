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
    console.log(trueOrFalse);
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
          <div className={this.state.Solidity ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Solidity"); }}><div>Solidity</div></div>
          <div className={this.state.Rust ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Rust"); }}><div>Rust</div></div>
          <div className={this.state.ERC20 ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("ERC20"); }}><div>ERC-20</div></div>
          <div className={this.state.ERC721 ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("ERC721"); }}><div>NFT/ERC-721</div></div>
          <div className={this.state.AWS ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("AWS"); }}><div>AWS</div></div>
          <div className={this.state.Node ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Node"); }}><div>Node</div></div>
          <div className={this.state.Python ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Python"); }}><div>Python</div></div>
          <div className={this.state.JavaScript ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("JavaScript"); }}><div>HTML/JS/CSS</div></div>
          <div className={this.state.ETH ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("ETH"); }}><div>ETH</div></div>
          <div className={this.state.BSC ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("BSC"); }}><div>BSC</div></div>
          <div className={this.state.Polygon ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Polygon"); }}><div>Polygon</div></div>
          <div className={this.state.SmartContract ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("SmartContract"); }}><div>Smart Contract</div></div>
          <div className={this.state.Blockchain ? "project-organize-skill highlight" : "project-organize-skill"} onClick={() => { this.handleSwitch("Blockchain"); }}><div>Blockchain</div></div>
        </div>
        <ul>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={uasFrontEnd ? "project-item highlight" : "project-item"}>
            <span></span>
            <div class="title">Open EDX Microfrontend Development</div>
            <div className="date-mobile">July 2021 - Present</div>
            <div class="location">Learning Managment System for Eduforma/Univo</div>
            <div className="project-skills"><strong>Skills:</strong>&nbsp;
              <span>Open Edx, React, Django, MySQL, MongoDB, GraphQL</span>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;AWS (EC2, ECS, Fargate, SMS, SNS, Cloudfront, Lambda, API Gateway, Cluster, VPC, Load Balancer)
              </div>
            </div>
            <div class="info">&nbsp;&nbsp;Professors can create/edit their courses in open edx and students enroll courses to get validated grades. Current trend is to migrate each components to React based Micro frontends. This platform is based on Openedx latest version - lilac, and all frontends are migrated to MFEs; app, auth, admin and class. Students use auth and app MFEs to learn courses created by administrators or support team. Admin can monitor activities of students in their admin panel like course time taken, login history, certificate obtained, course completion, email/sms notification. Open edx support some useful REST apis, but those are not enough to build MFEs and here GraphQL is introduced to manage databases. Various AWS resources are used and infrastructure is built for the final deployment.</div>
            <div class="info mt-2 mb-2">&nbsp;&nbsp;<b>My role:</b> I've developed the MFEs and GraphQL from the start. MFEs should be based on edx provided theme, and many configure settings are required to launch. And also built the whole infrastructure in aws using various resources to handle thousands of requests while keeping secure our site.</div>
            <a className={urlearn ? "website-highlighted" : "website"} href="https://app.digitallearningsolution.net/app" target="_blank">https://app.digitallearningsolution.net</a><br />
            <a className={urlearn ? "website-highlighted" : "website"} href="https://app.formaltic.cloudplateforme.com/app" target="_blank">https://app.formaltic.cloudplateforme.com/app</a><br />
            <a className={urlearn ? "website-highlighted" : "website"} href="https://app.2km.cloudplateforme.com/app" target="_blank">https://app.2km.cloudplateforme.com/app</a>
            <div className="project-image-container">
              <img className="project-image" src="assets/edu1.png" onClick={() => { this.handleTrue("show"); this.setModal("assets/edu1.png", "Homepage"); }} />
              <img className="project-image" src="assets/edu3.png" onClick={() => { this.handleTrue("show"); this.setModal("assets/edu3.png", "Admin Panel"); }} />
            </div>
            <div class="date">
              <span>Present -<br />July 2021</span>
            </div>
          </li>
          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={urlearn ? "project-item highlight" : "project-item"}>
            <span></span>
            <div class="title">Blockchain Lotery Game Site</div>
            <div className="date-mobile">October, 2021 - December, 2021</div>
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
              <span>December, 2021 -<br />October, 2021</span>
            </div>
          </li>

          {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <li className={imageFilter ? "project-item highlight" : "project-item"}>
            <span></span>
            <div class="title">Tradeasy Site Development</div>
            <div className="date-mobile">September 2021</div>
            <div class="location">Company Project</div>
            <div className="project-skills"><strong>Skills:</strong> Binance, XTB, Binance API, React, Node, MySQL, Python</div>
            <div class="info">Tradeasy is trading site with Binance/XTB and other platforms. Admin panel support various strategies so that users can estimate and emulate their trading policy in their admin panel. Users can save and evaluate which policy is good to trade (buy/sell) ethereum and other coins.</div>
            <div class="info mt-2 mb-2">&nbsp;&nbsp;<b>My role: </b>I've developed API connections to Binance/XTB and modified most of the admin design while keeping responsive. It also introduces tradingview chart to visualize.</div>
            <div className="project-image-container">
              <img className="project-image" src="assets/tradeasy1.png" onClick={() => { this.handleTrue("show"); this.setModal("assets/tradeasy1.png", "Black and white filter"); }} />
            </div>
            <div class="date">
              <span>September 2021</span>
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
