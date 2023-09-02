import React from 'react';

import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";


const DestinationScreen = () => {
    return (
        <div>

           <HeaderComponent></HeaderComponent>

           <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
      <a class="navbar-brand" href="index.html">Travelix<span>Travel Agency</span></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
          <li class="nav-item active"><a href="destination.html" class="nav-link">Destination</a></li>
          <li class="nav-item"><a href="hotel.html" class="nav-link">Hotel</a></li>
          <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${require("../images/bg_4.jpg")})` }}>
    <div class="overlay js-fullheight"></div>
    <div class="container">
      <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
        <div class="col-md-9 pb-5 text-center">
          <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i
                  class="fa fa-chevron-right"></i></a></span> <span>Tour List <i class="fa fa-chevron-right"></i></span>
          </p>
          <h1 class="mb-0 bread">Tours List</h1>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section ftco-no-pb">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="search-wrap-1">
            <form action="#" class="search-property-1">
              <div class="row no-gutters">
                <div class="col-lg d-flex">
                  <div class="form-group p-4 border-0">
                    <label for="#">Destination</label>
                    <div class="form-field">
                      <div class="icon"><span class="fa fa-search"></span></div>
                      <input type="text" class="form-control" placeholder="Search place"/>
                    </div>
                  </div>
                </div>
                <div class="col-lg d-flex">
                  <div class="form-group p-4 border-0">
                    <label for="#">Location/Area</label>
                    <div class="form-field">
                      <div class="icon"><span class="fa fa-location-arrow"></span></div>
                      <input type="text" class="form-control" placeholder="Search place"/>
                    </div>
                  </div>
                </div>
                
                
                <div class="col-lg d-flex">
                  <div class="form-group d-flex w-100 border-0">
                    <div class="form-field w-100 align-items-center d-flex">
                      <input type="submit" value="Search" class="align-self-stretch form-control btn btn-primary"/>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section">
    <div class="container">
      <div class="row">

        <div class="col-md-4 m-btm-40">
          <div class="item">
            <div class="project-destination">
              <a href="#" class="img" style={{ backgroundImage: `url(${require("../images/place-1.jpg")})` }}>
                <div class="text">
                  <h3>Philippines</h3>
                  <span>8 Tours</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4 m-btm-40">
          <div class="item">
            <div class="project-destination">
              <a href="#" class="img" style={{ backgroundImage: `url(${require("../images/place-2.jpg")})` }}>
                <div class="text">
                  <h3>Canada</h3>
                  <span>2 Tours</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4 m-btm-40">
          <div class="item">
            <div class="project-destination">
              <a href="#" class="img" style={{ backgroundImage: `url(${require("../images/place-3.jpg")})` }}>
                <div class="text">
                  <h3>Thailand</h3>
                  <span>5 Tours</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4 m-btm-40">
          <div class="item">
            <div class="project-destination">
              <a href="#" class="img" style={{ backgroundImage: `url(${require("../images/place-4.jpg")})` }}>
                <div class="text">
                  <h3>Autralia</h3>
                  <span>5 Tours</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4 m-btm-40">
          <div class="item">
            <div class="project-destination">
              <a href="#" class="img" style={{ backgroundImage: `url(${require("../images/place-5.jpg")})` }}>
                <div class="text">
                  <h3>Greece</h3>
                  <span>7 Tours</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4 m-btm-40">
          <div class="item">
            <div class="project-destination">
              <a href="#" class="img" style={{ backgroundImage: `url(${require("../images/place-1.jpg")})` }}>
                <div class="text">
                  <h3>Philippines</h3>
                  <span>8 Tours</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4 m-btm-40">
          <div class="item">
            <div class="project-destination">
              <a href="#" class="img" style={{ backgroundImage: `url(${require("../images/place-2.jpg")})` }}>
                <div class="text">
                  <h3>Canada</h3>
                  <span>2 Tours</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4 m-btm-40">
          <div class="item">
            <div class="project-destination">
              <a href="#" class="img" style={{ backgroundImage: `url(${require("../images/place-3.jpg")})` }}>
                <div class="text">
                  <h3>Thailand</h3>
                  <span>5 Tours</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4 m-btm-40">
          <div class="item">
            <div class="project-destination">
              <a href="#" class="img" style={{ backgroundImage: `url(${require("../images/place-4.jpg")})` }}>
                <div class="text">
                  <h3>Autralia</h3>
                  <span>5 Tours</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        
      </div>
      <div class="row mt-5">
        <div class="col text-center">
          <div class="block-27">
            <ul>
              <li><a href="#">&lt;</a></li>
              <li class="active"><span>1</span></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">&gt;</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

 


           <FooterComponent></FooterComponent> 
            
        
         </div>
    );
};

export default DestinationScreen;