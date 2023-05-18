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
import GrandekitchenWide from "../Images/GrandekitchenWide.jpg"
import GrandelivingroomWide from "../Images/GrandelivingroomWide.jpg"
import GrandeupstairslivingroomWide from "../Images/GrandeupstairslivingroomWide.jpg"
import MileuKitchenLivingWide from "../Images/MileuKitchenLivingWide.jpg"
import MiluehallWide from "../Images/MiluehallWide.jpg"
import MiluelivingroomKitchenWide2 from "../Images/MiluelivingroomKitchenWide2.jpg"
import CaseStudyFactsBackground from "../Images/CaseStudyFactsBackground.png"

import MiluemasterbathWide from "../Images/MiluemasterbathWide.jpg"

function Lorient() {

    return (
        <div>

          <NavBar/>
          <div class="container-fluid">

            <div class="row-fluid mb-7">
              <img src={MileuKitchenLivingWide} class="img-fluid"/>
              <div class="col heroSmaller">
                <h1>Lorient Homes</h1>
                <h2>See how we helped Lorient Homes<br></br>
                Sell 14 out of 20 condos<br></br>
                with our Virtual Reality<br></br>
                </h2>
              </div>
            </div>

            <div class="row-fluid mb-3 gx-3">
              <img src={GrandekitchenWide} class="img-fluid"/>
            </div>

            <div class="row mb-3 gx-3">
              <div class="col-12">
                <div class="card">
                  <img src={CaseStudyFactsBackground} class="img-fluid"/>
                  <div class="CaseStudyCards">
                    <h1>12 / 14</h1>
                    <h3>Condos pre-Sold</h3>
                  </div>
                </div>
              </div>
            </div>



            <div class="row-fluid mb-3 gx-3">
              <img src={GrandeupstairslivingroomWide} class="img-fluid"/>
            </div>

            <div class="row mb-3 gx-3">
              <div class="col-4">
                <img src={HeroImg} class="img-fluid"/>
              </div>
              <div class="col-8">
                <img src={GrandelivingroomWide} class="img-fluid"/>
              </div>
            </div>

            <div class="row-fluid mb-3 gx-3">
              <img src={MiluelivingroomKitchenWide2} class="img-fluid"/>
            </div>

            <div class="row-fluid mb-3 gx-3">
              <img src={MiluemasterbathWide} class="img-fluid"/>
            </div>

            <div class="row mb-3 gx-3">
              <div class="col-8">
                <img src={HeroImg} class="img-fluid"/>
              </div>
              <div class="col-4">
                <img src={HeroImg} class="img-fluid"/>
              </div>
            </div>
          </div>

        </div>

      );
  }

export default Lorient;
