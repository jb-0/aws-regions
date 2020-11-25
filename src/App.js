// import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import MapPage from './components/pages/MapPage';
import RegionList from './components/regions/RegionList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/aws-regions/" exact component={MapPage} />
          <Route path="/aws-regions/map" exact component={MapPage} />
          <Route path="/aws-regions/list" exact component={RegionList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
