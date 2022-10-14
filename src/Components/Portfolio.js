import React from "react";
import "../Components/PageBody.css"
import "../css/custom.css"
import HolderImg from "../Images/pracImg1.png"
import HeroImg from "../Images/heroImage.png"
import NavBar from "./NavBar";

function Portfolio() {

    return (
      <div>
        <NavBar/>
        <div classname="container">
          <div class="row">
            <img src={HeroImg} alt="Card image cap"/>
            <div class="col hero">
              <h1>xLiminal Workstation</h1>
              <h2>Your All-In-One Architectural <br/>Visualization Solution</h2>
              <h3>Leverage hardware, software and our design team <br/> to go beyond renders and immrse your <br/> customers in interactive experences</h3>
              <div class="">
                <button type="button" class="btn-lg btn-outline-dark me-3">Contact Us</button>
                <button type="button" class="btn-lg btn-outline-dark">How it Works</button>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row paddingVirticleLg">
            <div class="col text-center">
              <h3>The xLiminal Workstation provides much more <br/> than virtual reality.</h3>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row gy-3 g-3">
            <div class="col-md-8">
              <div class="card">
                <img class="card-img-top pic" src={HolderImg} alt="Card image cap"/>
                <div class="card-body">
                  <h3 class="card-title text-start">Learn more about the process</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img class="card-img-top pic" src={HolderImg} alt="Card image cap"/>
                <div class="card-body">
                  <h3 class="card-title text-start">Learn more about the process</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card">
                <img class="card-img-top pic" src={HolderImg} alt="Card image cap"/>
                <div class="card-body">
                  <h3 class="card-title text-start">Learn more about the process</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img class="card-img-top pic" src={HolderImg} alt="Card image cap"/>
                <div class="card-body">
                  <h3 class="card-title text-start">Learn more about the process</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img class="card-img-top pic" src={HolderImg} alt="Card image cap"/>
                <div class="card-body">
                  <h3 class="card-title text-start">Learn more about the process</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tag" id ="contact"/>

        <div class="container">
          <div class="row text-center paddingVirticleMd">
            <div class="col">
              <h3>Intrested in a demo or have questions?</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <form>
                <div class="mb-3">
                  <input type="name" id="Name" class="form-control" placeholder="Name"></input>
                </div>
                <div class="mb-3">
                  <input type="email" id="Email" class="form-control" placeholder="Email"></input>
                </div>
                <div class="mb-3">
                  <input type="name" id="Phone" class="form-control" placeholder="Phone"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Tell us about yourself.</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary mb-3">Request Demo</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

    );
}

export default Portfolio;
