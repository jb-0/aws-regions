// import { useEffect, useState } from 'react';
import './App.css';
import RegionIpList from './components/regions/RegionIpList';
import Map from './components/map/Map'

function App() {
  return (
    <div>
      <Map />
      <RegionIpList />
    </div>
  );
}

export default App;
