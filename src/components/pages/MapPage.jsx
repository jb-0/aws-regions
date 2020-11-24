import React, { useState } from 'react';
import Map from '../map/Map';

function MapView() {
  const [clickedCountry, setClickedCountry] = useState('Select a Country');

  return (
    <div className="map-view-container">
      <Map clickedCountry={clickedCountry} setClickedCountry={setClickedCountry} />
    </div>
  );
}

export default MapView;
