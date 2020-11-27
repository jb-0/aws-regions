import React, { useEffect, useRef, useState } from 'react';
import Map from '../map/Map';
import RegionList from '../regions/RegionList';
import RegionIPList from '../regions/RegionIpList';
import './MainPage.css';

function MainPage(props) {
  const [clickedCountry, setClickedCountry] = useState();
  const [clickedRegion, setClickedRegion] = useState();
  const regionIpListRef = useRef();

  useEffect(() => {
    if (clickedRegion)
      regionIpListRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [clickedRegion]);

  const mapView = (
    <div className="map-container">
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
    </div>
  );

  const listView = (
    <div className="list-container">
      <p className="list-intro-para">
        Countries and their AWS regions are displayed below. Clicking a region
        will return a list of IPs.
      </p>
      <RegionList
        setClickedCountry={setClickedCountry}
        setClickedRegion={setClickedRegion}
      />
    </div>
  );

  return (
    <div className="main-page-container">
      {/* Depending on the view prop passed by the router, render the corresponding view */}
      {props.view === "map" ? mapView : listView}

      {/* When a region is selected a list of IPs should be rendered */}
      {clickedRegion && (
        <div>
          <h1>{`${clickedCountry.name} - ${clickedRegion}`}</h1>
          <RegionIPList
            regionIpListRef={regionIpListRef}
            region={clickedRegion}
          />
        </div>
      )}
    </div>
  );
}

export default MainPage;
