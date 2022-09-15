import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./Sepcalities.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { fahd } from '@fortawesome/free-solid-svg-icons';
import { FaHDFill  } from 'react-icons/fa';
import { BsFillBadgeHdFill } from "react-icons/bs";

function Speciaities() {

    return (
      
        <div class="container service">
          <h3 className='head'>Our Services</h3>
          <div class="row">
            
              
            <div class="container2 row row-cols-lg-3 row-cols-sm-1">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                     <div className='eye'>
                       <FontAwesomeIcon size="4x"icon={faEye} />
                     </div>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="" target="_blank">Optical Fiber Network</a>
                    </h3>
                    <p>We offer cable Tv and Broadband Internet through Optical Fiber cables (where available), which provides uninterrupted  services.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                    <div className='Hd-icon'>
                        <BsFillBadgeHdFill size="5em"/>
                     </div>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="" target="_blank">HD Channels</a>
                    </h3>
                    <p>HD Set-top boxes are available for your favorite HD channels. Affordable HD packages are available. See channel lists for pricing. </p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <i class="fa fa-github-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="https://github.com/atom888" target="_blank">IPTV Services</a>
                    </h3>
                    <p> Make your standard TV smart, using our Android Set-top boxes. Watch your favorite channels, enjoy youtube and install your favorite applications through Play Store on your TV.</p>
                </div>
            </div>
        </div>
    </div>
          
           
          </div>
        
        </div>
       
     
    )
  
}

export default Speciaities;