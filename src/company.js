import React from 'react';
import image from './logo.png';
import image1 from './visits.png';
import './App.css';


const Company=() =>{
    return  <div id="introduction-company" class="py-2 bg-white">
                  <div class="container">
                      <div class="row azer">
 
                        <div class="col-lg-4 col-md-12 py-2 ">
                            <h1 class=" display-6"> 
                                we are a global 
                                company with 
                                local culture
                            </h1>
                        </div>
                    
                        <div class="col-lg-4 col-md-12 d-flex justify-content-center colr ">
                            <img src={image} alt="logo" class="img  "/>
                            <p class="text1 py-3 ">Docplanner</p>
                            <p class="text2 py-3">Group</p>      
                            <img src={image} alt="logo" class="img  "/>
                            <p class="text1 py-3 ">Docplanner</p>
                            <p class="text2 py-3">Group</p>
                    </div>
                    <div class="col-lg-4 col-md-12 d-flex justify-content-center   colr ">
                            <img src={image} alt="logo" class="img  "/>
                            <p class="text1 py-3 ">Docplanner</p>
                            <p class="text2 py-3">Group</p>
                            <img src={image} alt="logo" class="img "/>
                            <p class="text1 py-3 ">Docplanner</p>
                            <p class="text2 py-3">Group</p>
                    </div>       
        </div>
        </div>
    </div>               
}

export default Company;