import React from "react";
import CardImg1 from "../Images/icons8-user-male-512.png"
import "../css/customm.css"
import NavBarDark from "./NavBarDark"
import SaveTimeMoney from "../Videos/developersSavetimeandmoney.mp4"
import AttractCustomers from "../Videos/AttractCustomers.mp4"
import VRLab from "../Videos/vrlab.mp4"



function Architects() {

    return (
        <div>
          <NavBarDark/>
          <div class="container-fluid">

            <div class="row-fluid mt-2">
              <div class="col">
                <div class="card">
                  <video autoplay="true" loop="true" src={AttractCustomers} class="img-fluid"></video>
                  <div class="WhyVRLeft">
                    <div class="title">
                      <h2>Communicate light and space effectively</h2>
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
                  <video autoplay="true" loop="true" src={SaveTimeMoney} class="img-fluid"></video>
                  <div class="WhyVRLeft">
                    <div class="title">
                      <h2>Save time and money</h2>
                    </div>
                    <div class="sentence">
                    <h3>Avoid change orders down the line</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      );
  }

  export default Architects;
