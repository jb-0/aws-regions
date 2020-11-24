// import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/common/Navbar'
import MapPage from './components/pages/MapPage'
import RegionIpList from './components/regions/RegionIpList';


function App() {
  return (
    <div>
      <Navbar />
      <MapPage />
      <RegionIpList />
    </div>
  );
}

export default App;
