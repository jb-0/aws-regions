// import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/common/Navbar'
import Map from './components/map/Map'
import RegionIpList from './components/regions/RegionIpList';


function App() {
  return (
    <div>
      <Navbar />
      <Map />
      <RegionIpList />
    </div>
  );
}

export default App;
