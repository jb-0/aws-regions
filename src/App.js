// import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import MainPage from './components/pages/MainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/aws-regions/"
            exact
            render={(props) => <MainPage {...props} view="map" />}
          />
          <Route
            path="/aws-regions/map"
            exact
            render={(props) => <MainPage {...props} view="map" />}
          />
          <Route
            path="/aws-regions/list"
            exact
            render={(props) => <MainPage {...props} view="list" />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
