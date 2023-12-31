import React from 'react';

import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const ContactScreen = () => {
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
          <li class="nav-item"><a href="destination.html" class="nav-link">Destination</a></li>
          <li class="nav-item"><a href="hotel.html" class="nav-link">Hotel</a></li>

          <li class="nav-item active"><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${require("../images/bg_2.jpg")})` }}>
    <div class="overlay js-fullheight"></div>
    <div class="container">
      <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
        <div class="col-md-9  pb-5 text-center">
          <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i
                  class="fa fa-chevron-right"></i></a></span> <span>Contact us <i
                class="fa fa-chevron-right"></i></span></p>
          <h1 class="mb-0 bread">Contact us</h1>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section ftco-no-pb contact-section mb-4">
    <div class="container">
      <div class="row d-flex contact-info">
        <div class="col-md-3 d-flex">
          <div class="align-self-stretch box p-4 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="fa fa-map-marker"></span>
            </div>
            <h3 class="mb-2">Address</h3>
            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
        </div>
        <div class="col-md-3 d-flex">
          <div class="align-self-stretch box p-4 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="fa fa-phone"></span>
            </div>
            <h3 class="mb-2">Contact Number</h3>
            <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
          </div>
        </div>
        <div class="col-md-3 d-flex">
          <div class="align-self-stretch box p-4 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="fa fa-paper-plane"></span>
            </div>
            <h3 class="mb-2">Email Address</h3>
            <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
          </div>
        </div>
        <div class="col-md-3 d-flex">
          <div class="align-self-stretch box p-4 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="fa fa-globe"></span>
            </div>
            <h3 class="mb-2">Website</h3>
            <p><a href="#">yoursite.com</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section contact-section ftco-no-pt">
    <div class="container">
      <div class="row block-9">
        <div class="col-md-12 order-md-last d-flex">
          <form action="#" class="bg-light p-5 contact-form">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your Name"/>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your Email"/>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Subject"/>
            </div>
            <div class="form-group">
              <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
            </div>
            <div class="form-group">
              <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
            </div>
          </form>

        </div>


      </div>
    </div>
  </section>

  <section class="ftco-intro ftco-section ftco-no-pt">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 text-center">
          <div class="img" style={{ backgroundImage: `url(${require("../images/bg_2.jpg")})` }}>
            <div class="overlay"></div>
            <h2>We Are Travelix A Travel Agency</h2>
            <p>We can manage your dream building A small river named Duden flows by their place</p>
            <p class="mb-0"><a href="#" class="btn btn-primary px-4 py-3">Ask For A Quote</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  



             <FooterComponent></FooterComponent>
        </div>
    );
};

export default ContactScreen;