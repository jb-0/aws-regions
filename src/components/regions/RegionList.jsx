import React from 'react';
import regions from '../../data/awsRegions';

function RegionList() {
  Object.entries(regions).forEach(([key, val]) => {});

  return (
    <div className="region-list">
      {Object.entries(regions).map(([key, value]) => {
        return value.map((region) => {
          return <h1>{region.niceName}</h1>;
        });
      })}
    </div>
  );
}

export default RegionList;
