import React from "react";
import {Link} from "react-router-dom";
import "../Components/NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavBar() {
  function myFunction() {
    //document.getElementsByClassName("navbar-nav");
    document.querySelector("show").style.display = "block";
  }



    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-light ">
          {/* <!-- Container wrapper --> */}
          <div class="container-fluid">
          <a class="navbar-brand mt-0 mt-lg-0 navpaddingLeft" href="#">
                xLiminal
              </a>
            {/* <!-- Toggle button --> */}
            <button
              class="navbar-toggler navpaddingRight"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={myFunction}
            >
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>


            {/* <!-- Collapsible wrapper --> */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <!-- Navbar brand --> */}

            {/* <!-- Collapsible wrapper --> */}

            {/* <!-- Right elements --> */}
            <div class="navbar-nav d-flex ms-auto show navpaddingRight">
              <Link to="/"><a class="nav-link px-1" href="#">Home</a></Link>
              <Link to="/Portfolio"><a class="nav-link px-1" href="#portfolio">Portfolio</a></Link>
              <Link to="/Process"><a class="nav-link px-1" href="#process">Process</a></Link>
              <Link to = "/Prices"><a class="nav-link px-1" href="#">Pricing</a></Link>
              <Link to = "/Contact"><a class="nav-link px-1" href="#contact">Contact</a></Link>
              <Link to = "/Developers"><a class="nav-link px-1" href="#developers">Developers</a></Link>
              <Link to = "/Architects"><a class="nav-link px-1" href="#architects">Architects</a></Link>
              <Link to = "/CaseStudies"><a class="nav-link px-1" href="#CaseStudies">Case Studies</a></Link>
            </div>
            {/* <!-- Right elements --> */}
          </div>
          {/* <!-- Container wrapper --> */}

          </div>
        </nav>
        {/* //<!-- Navbar --> */}

      </header>

    );
}

export default NavBar;
