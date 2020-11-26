import React from 'react';
import {regions, countries} from '../../data/awsRegions';
import './RegionList.css'

function RegionList() {
  Object.entries(regions).forEach(([key, val]) => {});

  return (
    <div className="region-list">
      {Object.entries(regions).map(([key, value]) => {
        return value.map((region) => {
          return <h2>{region.niceName}</h2>;
        });
      })}
    </div>
  );
}

export default RegionList;
