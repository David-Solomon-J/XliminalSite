import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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

export default FormEmail;
