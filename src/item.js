import React from 'react';

import './App.css';

 function Items(props){
     const itemslist=props.itemslist

     let itemshtml=[]
             itemshtml= itemslist.map((itm,i)=>
             <div className="card my-2">
                 <div key={i} className="itm " style={{padding:'15px'}}>
                <img src={itm.image}/>
                <div className="horizentale ">
                <p> {itm.name}</p>
                <button type="button" class="btn btn-primary d-inline my-2">Primary</button>
                </div>
                </div> 
                </div>
               )
    return itemshtml
 }






export default Items;
