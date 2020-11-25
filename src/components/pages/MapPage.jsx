import React, { useState } from 'react';
import Map from '../map/Map';
import RegionIPList from '../regions/RegionIpList';
import './MapPage.css';
import regions from '../../data/awsRegions';

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
      {clickedRegion && (
        <div>
          <h1>{`${clickedCountry.name} - ${clickedRegion}`}</h1>
          <RegionIPList region={clickedRegion} />
        </div>
      )}
    </div>
  );
}

export default MapPage;
