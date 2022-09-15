import React, { Component } from 'react'
import c3 from './images/c3.jpg'
import "bootstrap/dist/css/bootstrap.css";
import TV from './images/TV.jpg'
import Internet from './images/Internet.jpg'
import Headphone from './images/Headphone.jpg'


function Services() {
  
    return (
      <div>
        <div class="container service">
          <h3 className='head'>Our Services</h3>
          <div class="row mt-4">
            <div class="col-sm-6 col-lg-4">
              <article class="box-icon-classic">
                <div class="unit box-icon-classic-body flex-column flex-md-row text-md-left flex-lg-column text-lg-center flex-xl-row text-xl-left">
                  <div class="unit-left">
                    <div class="box-icon-classic-icon"><img
          className="imge"
          src={TV}
          alt="First slide"
        /></div>
                  </div>
                  <div class="unit-body">
                    <h5 class="box-icon-classic-title"><a href="#">CABLE TV</a></h5>
                    <p class="box-icon-classic-text">Our unique matching system lets you find just the tour you want for your next holiday.</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-sm-6 col-lg-4">
              <article class="box-icon-classic">
                <div class="unit box-icon-classic-body flex-column flex-md-row text-md-left flex-lg-column text-lg-center flex-xl-row text-xl-left">
                  <div class="unit-left">
                    <div class="box-icon-classic-icon">
                    <img
          className="imgewifi"
          src={Internet}
          alt="First slide"
        />
                    </div>
                  </div>
                  <div class="unit-body">
                    <h5 class="box-icon-classic-title"><a href="#">INTERNET</a></h5>
                    <p class="box-icon-classic-text">We offer a wide variety of personally picked tours with destinations all over the globe.</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-sm-6 col-lg-4">
              <article class="box-icon-classic">
                <div class="unit box-icon-classic-body flex-column flex-md-row text-md-left flex-lg-column text-lg-center flex-xl-row text-xl-left">
                  <div class="unit-left">
                    <div class="box-icon-classic-icon ">
                    <img
                    className="imgewhead"
                    src={Headphone}
                    alt="First slide"
                    />

                    </div>
                  </div>
                  <div class="unit-body">
                    <h5 class="box-icon-classic-title"><a href="#">24/7 Support</a></h5>
                    <p class="box-icon-classic-text">You can always get support for Technical Issue you have from our staff 24/7.</p>
                  </div>
                </div>
              </article>
            </div>
          
           
          </div>
        </div>
      </div>
    );
}

export default Services;
