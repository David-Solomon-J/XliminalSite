import React from "react";
import "../Components/PageBody.css"
import HolderImg from "../Images/pracImg1.png"
import NavBar from "./NavBar";

function Prices() {

    return (
        <div>
        <NavBar/>
        <div classname="container">
        <div class="p-5 text-left hd">
          <h1 class="mb-3 headerTx">xLiminal Workstation</h1>
          <br/>
          <h3 class="mb-2 headerSubTx">Your All-In-One Architectural <br/>Visualization Solution</h3><br/>
          <p>Leverage hardware, software and our design team <br/> to go beyond renders and immrse your <br/> customers in interactive experences <br/> </p>

        <div class="mb-4 mt-5">
            <button type="button" class="btn-lg btn-outline-dark me-3">Contact Us</button>
            <button type="button" class="btn-lg btn-outline-dark">How it Works</button>
        </div>

        {/* <img src={HrdPic}/> */}

        </div>

        <div class="container text-center mt-5" >
            <h3>The xLiminal Workstation provides much more <br/> than virtual reality.</h3>
        </div>


            <div class="container">
            <div class="col d-flex justify-content-center">
                <div class="card mt-5 mb-5">
                    <img class="card-img-top pic" src={HolderImg} alt="Card image cap"/>
                        <div class="card-body">
                            <h3 class="card-title text-start">Learn more about the process</h3>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div class="card mt-5 mb-5">
                    <img class="card-img-bottom pic" src={HolderImg} alt="Card image cap"/>
                        <div class="card-body">
                            <h3 class="card-title text-start">Learn more about the process</h3>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
            </div>

        </div>

        <div class="tag" id ="contact"/> 

        <div class="container text-center mt-5" >
            <h3>Intrested in a demo or have questions?</h3>
        </div>

        <div class="col d-flex justify-content-center">      
        <div class="card mt-5 mb-5">
            <div class="frm">
                <form>
                    <input type="text" name="name" class="formStyle" placeholder="Name (required)" required /><br/>
                    <input type="email" name="email" class="formStyle" placeholder="Email (required)" required /><br/>
                    <lable for="Descr">Tell us you business!</lable><br/>
                    <input type="textarea" name="Descr" class="formStyle" placeholder="Fill Here" required /><br/>

                    <a href="#" class="formButton">Request Demo</a>                    
                </form>
            </div>
        </div>
        </div>  

        </div>
        </div>
    );
}

export default Prices;