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


function PageBody() {

    return (
        <div>

        <NavBar/>
        <div class="container-fluid">

          <div class="row-fluid mb-7">
            <video autoplay="true" loop="true" src={HeroVid} class="img-fluid"></video>
            <div class="col hero">
              <h1>We<br></br>
              Build<br></br>
              Immersive<br></br>
              Architectural<br></br>
              Experiences</h1>
            </div>
          </div>

          <div class="row-fluid mb-5">
            <div class="col mainBlurb">
                <h2>Communicate and sell properties clearly and quickly by immersing customers in interactive experiences.</h2>
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-5"></div>
            <div class="col-2 divider"></div>
            <div class="col-5"></div>
          </div>

          <div class="row-fluid mb-7">
            <div class="col minorBlurb">
                <h3>xLiminal is an experiential architectural visualization design consultancy comprised of architecture, 3D and interaction experts - an interdisciplinary design team working with companies worldwide. </h3>
            </div>
          </div>

          <div class="row mb-7 whatWeDo">
            <div class="col-4">
                <h4>We design Virtual Reality to help customers explore light & space.</h4>
            </div>
            <div class="col-4">
                <h4>We develop within the entire life-cycle from design to the final sale.</h4>
            </div>
            <div class="col-4">
                <h4>We provide enterprise virtual reality. This is not your child’s Oculus.  </h4>
            </div>
          </div>

          <div class="row mb-3 gx-3">
            <div class="col-6">
              <div class="card DemographicButton">
                <img src={ArchitectsButton} class="img-fluid"/>
                <h5 class="card-title">Architects</h5>
                <p>See how xLiminal helps architects communicate more effectively.</p>
              </div>
            </div>
            <div class="col-6">
              <div class="card DemographicButton">
                <img src={DevelopersButton} class="img-fluid"/>
                <h5 class="card-title">Developers</h5>
                <p>See how xLiminal helps developers sell more effectively.</p>
              </div>
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

export default PageBody;
