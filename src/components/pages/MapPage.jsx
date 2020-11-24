import React, { useState } from 'react';
import Map from '../map/Map';
import './MapPage.css'

function MapPage() {
  const [clickedCountry, setClickedCountry] = useState('Select a Country');

  return (
    <div className="map-page-container">
      <Map clickedCountry={clickedCountry} setClickedCountry={setClickedCountry} />
    </div>
  );
}

export default MapPage;
