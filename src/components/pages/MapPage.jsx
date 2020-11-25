import React, { useState } from 'react';
import Map from '../map/Map';
import RegionIPList from '../regions/RegionIpList';
import './MapPage.css';

function MapPage() {
  const [clickedCountry, setClickedCountry] = useState();
  const [clickedRegion, setClickedRegion] = useState();

  return (
    <div className="map-page-container">
      <p className="map-intro-para">
        Countries with at least one AWS region are highlighted in blue, click a
        highlighted country to see list of AWS regions. Clicking a region will
        return a list of IPs.
      </p>
      <Map
        clickedCountry={clickedCountry}
        setClickedCountry={setClickedCountry}
        clickedRegion={clickedRegion}
        setClickedRegion={setClickedRegion}
      />
      {clickedRegion && <RegionIPList region={clickedRegion} />}
    </div>
  );
}

export default MapPage;
