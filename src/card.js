import React from 'react';
import image from './logo.png';
import './App.css';
import flag from './flag.png';
import Visits from './visits.png';

import FeatureCard from './itemcard'

// import ItemsCard from './itemcard';

let TheItemCard=[
  {image:flag, name:'Leader in 10 countries', paragraphe:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
  {image:image, name:'Leader in 10 countries',paragraphe:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
  {image:flag, name:'Leader in 10 countries',paragraphe:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
  {image:flag, name:'Leader in 10 countries',paragraphe:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
  ,
  ]
  
const ServiceCard = (props) =>
<div className='service-card' style={{background: props.service.background}}>
  <p className='category'>{props.service.category}</p>
  <h1 className='title'>{props.service.title}</h1>
  <img className='screenshot' src={props.service.image}/>
</div>





const Card=() =>{
   
   return  <section id="card" >   
   <div class="container-fluid background-img">
     
     <div class="row">
         
         <div class="col-lg-6  "> 
                        <h1 class="display-6  ">
                             <strong>The world's 
                               biggest healthcare platform</strong>
                        </h1>
                       <p class="text-muted  py-3">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
          
        </div>


        <div class="col-lg-6 organisationn  ">
        
        {/* <ItemsCard itemscardlist={TheItemCard}/> */}
        <div>
    <div className="features organisationn   " >
      
  
      <FeatureCard
        title={<span>Leader in <br />8 countries</span>}
        icon="https://www.docplanner.com/img/flag.png"
        description="Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile" />
    
    
      <FeatureCard
        title="Leader in 10 countries"
        icon="https://www.docplanner.com/img/visits.png"
        description="booked last month" />
        
      <FeatureCard
        title="2 million active doctors"
        icon="https://www.docplanner.com/img/doctors.png"
        description="booked last month" />
        
      <FeatureCard
        title="600 000 appointments"
        icon="https://www.docplanner.com/img/visits.png"
        description="booked last month" />
     
        </div>
        
        
        
       
    </div>
    
  </div>      
         </div>

      
     
    </div>
   
        </section>
}

export default Card;



