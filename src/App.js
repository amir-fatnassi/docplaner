import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './nav';
import Skills from './sounav';
import Introduction from './IntroductionText';
import Services from './service';
import Company from './company';
import Card from './card';
import ItemText from './item-text';
import Items from './item';
import image from './warsaw.png';
import Footer from './footer';
import rome from './rome.png';
import barcelone from './barcelona.png';
import curitiba from './curitiba.png';
import istanbul from './istanbul.png';
import mexico from './mexico.png';
let TheItem=[
 {image:rome, name:'rome'},
 {image:barcelone, name:'barcelone'},
 {image:istanbul, name:'istanbul'},
 {image:curitiba, name:'curitiba'},
 {image:mexico, name:'mexico'},
 {image:image, name:'warsaw'}]
function App() {
  return (
    <div className="App">
      <Nav/>
      <Skills />
      <Introduction/>
      <Services/>
      <Company/>
      <Card/>
      <ItemText/>
      <div className="organisation py-5">
      <Items itemslist={TheItem}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
