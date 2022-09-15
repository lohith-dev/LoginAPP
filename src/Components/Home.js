import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import star_logo from './images/star_logo.png';

export default class extends Component {
  render() {
    return (
 <div>
  <div class="background-white add_material_shadow visible-lg visible-md">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a class="navbar-brand" href="#"><img src={star_logo} alt="Girl in a jacket" width="250" height="65"></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link ms-2 active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-3" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-3" href="#">Tariff &amp; Plans</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-3 cont" href="#"><i class="fa fa-phone icon"></i>Contact Us</a>
        </li>
        <li class="nav-item">
        <a class="nav-link ms-3" href="#">Log In</a>
        </li>
      </ul>
      <form class="d-flex nav-end">
      
      <button class="btn btn-outline-danger mt-2 connectionbtn " type="submit">New Connection</button>
        
      </form>
    </div>
  </div>
</nav>
  </div>


      </div>
    )
  }
}
