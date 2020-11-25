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
          <Route path="/" exact component={MapPage} />
          <Route path="/map" exact component={MapPage} />
          <Route path="/list" exact component={RegionList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
