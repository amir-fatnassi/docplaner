import React from 'react';

import './App.css';
import image from './im1.png';
import imagee from './im2.png';






const Services=() =>{
   
   return <div id="services" class="py-5 bg-white">
               <div class="container ">
                      <div class="row">
      
                     <div class="col col-lg-6 my-4">
                            <div class="service-card service-card-patients  rounded ">
                            <div class="service-card-for text-white px-5 py-3 " >
                                   For patients
                            </div> 
                            <h2 class="service-card-title text-white text-center ">
                                   Find a doctor, book a visit and
                                   solve any health-related doubt
                            </h2>
                            
                           <div class="col-lg-3 ">
                            <div class="service-card-content ">
                                   <select class="service-card-select  bg-white m-3  p-2 rounded "name="" id="">
                                        <option value="">Choose a country</option>
                                        <option value="">Tunisie</option>
                                        <option value="">France</option>
                                        <option value="">Spain</option>
                                   </select> 
                            </div>
                            <div class="col-lg-3">
                                   <img class="service-card-img  position-relative mb-2" src={image} alt=""/></div>                       
                            </div>
                            </div>
                            </div>                  
                   <div class="col col-lg-6 col-md-12 my-4">
              <div class="service-card service-card-doctors bg-primary rounded">
              <div class="service-card-for text-white px-5 py-3" >For doctors</div>
              <h2 class="service-card-title text-white text-center"> Save time managing visits and cut no-shows by half</h2>
              <div class="service-card-content">
                         <img class="service-card-imgg position-relative py-5   "src={imagee} alt=""/>   
              </div>
              </div>
                </div>
                </div>
            </div>
       </div>

}

export default Services;