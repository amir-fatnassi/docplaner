import React from 'react';
import './App.css';
const FeatureCard = ({icon, title, description}) =>
  <div className="feature-card ">
    <img src={icon} />
    <h2 className="feature-card-title">{title}</h2>
    <p className="feature-card-description">
      {description}
    </p>
  </div>
export default FeatureCard;