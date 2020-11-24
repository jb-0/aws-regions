import React, { useState } from 'react';
import Map from '../map/Map';
import RegionIPList from '../regions/RegionIpList'
import './MapPage.css';

function MapPage() {
  const [clickedCountry, setClickedCountry] = useState();
  const [clickedRegion, setClickedRegion] = useState();

  return (
    <div className="map-page-container">
      <Map
        clickedCountry={clickedCountry}
        setClickedCountry={setClickedCountry}
        clickedRegion={clickedRegion}
        setClickedRegion={setClickedRegion}
      />
      {clickedRegion && (
        <RegionIPList
          region={clickedRegion}
        />
      )}
    </div>
  );
}

export default MapPage;
