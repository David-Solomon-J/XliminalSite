import React from "react";
import "../Components/PageBody.css"
import HolderImg from "../Images/pracImg1.png"
import NavBar from "./NavBar";

function Contact() {

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

export default Contact;