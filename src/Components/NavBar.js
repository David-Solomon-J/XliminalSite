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
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          {/* <!-- Container wrapper --> */}
          <div class="container-fluid">
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
                xLiminal Archviz Solutions
              </a>
            {/* <!-- Toggle button --> */}
            <button
              class="navbar-toggler"
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
            <div class="navbar-nav d-flex ms-auto show">
              <Link to="/">
                <a class="nav-link px-5" href="#">
                <FontAwesomeIcon icon="fa-solid fa-circle" /><br/>
                    Home Page
                    </a>
              </Link>

              <Link to="/Portfolio">
                <a class="nav-link px-5" href="#portfolio">
                <FontAwesomeIcon icon="fa-solid fa-book-open" /><br/>
                    Portfolio
                </a>
              </Link>

              <Link to="/Process">
                  <a class="nav-link px-5" href="#process">
                  <FontAwesomeIcon icon="fa-solid fa-shoe-prints" /><br/>
                      Process
                      </a>
              </Link>

              <Link to = "/Prices">
                <a class="nav-link px-5" href="#">
                <FontAwesomeIcon icon="fa-solid fa-dollar-sign" /><br/>
                    Pricing
                    </a>
              </Link>

              <Link to = "/Contact">            
                <a class="nav-link px-5" href="#contact">
                <FontAwesomeIcon icon="fa-solid fa-phone" /><br/>
                    Contact
                    </a>
              </Link>  


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