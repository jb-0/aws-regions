import React from 'react';
import { regions, countries } from '../../data/awsRegions';
import './RegionList.css';

function RegionList() {
  return (
    <div className="region-list-grid">
      {Object.entries(regions).map(([key, value]) => {
        return (
          <div className={`card-style country-grid-item ${key}`}>
            <h2>{countries[key]}</h2>
            {value.map((region) => {
              return <p>{`${region.niceName} - ${region.name} `}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default RegionList;
