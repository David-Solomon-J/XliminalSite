import React from "react";
import CardImg1 from "../Images/icons8-user-male-512.png"
import "../css/customm.css"
import NavBar from "./NavBar"
import HolderImg from "../Images/pracImg1.png"
import HeroVid from "../Videos/homevid.mp4"
import HeroImg from "../Images/heroImage.png"
import HrdPic from "../Images/vrSet.jpg"
import ArchitectsButton from "../Images/HomepageArchitectsButton.png"
import DevelopersButton from "../Images/HomepageDevelopersButton.png"
import MileuKitchenLivingWide from "../Images/MileuKitchenLivingWide.jpg"
import WillowLivingRoomWide from "../Images/WillowLivingRoomWide.jpg"
import MarbleGreenWide from "../Images/MarbleGreenWide.jpg"
import CaseStudiesHeader from "../Images/CaseStudiesHeader.png"


function CaseStudies() {

    return (
        <div>

          <NavBar/>
          <div class="container-fluid">

            <div class="row-fluid mb-7">
              <img src={CaseStudiesHeader} class="img-fluid"/>
              <div class="col hero">
                <h1>We<br></br>
                Build<br></br>
                Immersive<br></br>
                Architectural<br></br>
                Experiences</h1>
              </div>
            </div>

            <div class="row mb-3 gx-3">
              <div class="col-12">
                <div class="card PortfolioButton">
                  <img src={MarbleGreenWide} class="img-fluid"/>
                  <a href="CaseStudies/Lorient"><div class="cardCopy hover-overlay ripple">
                  <h5 class="card-subtitle">Manufacturers</h5>
                  <h1>Marble Stuff</h1>
                  <h2>Created an experience for a conference</h2>
                  </div></a>
                </div>
              </div>
            </div>


            <div class="row mb-3 gx-3">
              <div class="col-6">
                <div class="card PortfolioButton">
                  <img src={MileuKitchenLivingWide} class="img-fluid"/>
                  <a href="CaseStudies/Lorient"><div class="cardCopy hover-overlay ripple">
                  <h5 class="card-subtitle">Developers</h5>
                  <h1>Lorient Homes</h1>
                  <h2>See how we helped Lorient Homes<br></br>
                  Sell 14 out of 20 condos<br></br>
                  with our Virtual Reality<br></br></h2>
                  </div></a>
                </div>
              </div>
              <div class="col-6">
              <div class="card PortfolioButton">
                <img src={WillowLivingRoomWide} class="img-fluid"/>
                <a href="CaseStudies/Lorient"><div class="cardCopy hover-overlay ripple">
                <h5 class="card-subtitle">Developers</h5>
                <h1>Willow</h1>
                <h2>See how we helped Willow<br></br>
                Sell 14 out of 20 condos<br></br>
                with our Virtual Reality<br></br></h2>
                </div></a>
              </div>
              </div>
            </div>
          </div>

        </div>

      );
  }

export default CaseStudies;
