import React from "react";
import CardImg1 from "../Images/icons8-user-male-512.png"
import "../css/customm.css"
import NavBarDark from "./NavBarDark"
import SaveTimeMoney from "../Videos/Businessmenlookingup.mp4"
import AttractCustomers from "../Videos/AttractCustomers.mp4"
import LightandSpaceWillow from "../Videos/LightandSpaceWillow.mp4"
import VRLab from "../Videos/vrlab.mp4"


function Developers() {

    return (
        <div>
          <NavBarDark/>
          <div class="container-fluid">

            <div class="row-fluid mt-2">
              <div class="col">
                <div class="card">
                  <video autoplay="true" loop="true" src={SaveTimeMoney} class="img-fluid"></video>
                  <div class="WhyVRLeft">
                    <div class="title">
                      <h2>Save time
                      and money</h2>
                    </div>
                    <div class="sentence">
                      <h3>Pre-sell units and avoid the cost of building model homes.</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row-fluid mt-2">
              <div class="col">
                <div class="card">
                  <video autoplay="true" loop="true" src={VRLab} class="img-fluid"></video>
                  <div class="WhyVRRight">
                    <div class="title">
                      <h2>Stand out</h2>
                    </div>
                    <div class="sentence">
                      <h3>Demonstrate your dedication to innovation and efficiency with an enterprise-grade VR lab.</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row-fluid mt-2">
              <div class="col">
                <div class="card">
                  <video autoplay="true" loop="true" src={AttractCustomers} class="img-fluid"></video>
                  <div class="WhyVRLeft">
                    <div class="title">
                      <h2>Attract customers effortlessly</h2>
                    </div>
                    <div class="sentence">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row-fluid mt-2">
              <div class="col">
                <div class="card">
                  <video autoplay="true" loop="true" src={LightandSpaceWillow} class="img-fluid"></video>
                  <div class="WhyVRRight">
                    <div class="title">
                      <h2>Experience light and space</h2>
                    </div>
                    <div class="sentence">
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      );
  }

  export default Developers;
