import React from 'react';
import { regions, countries } from '../../data/awsRegions';
import './RegionList.css';
import { v4 as uuidv4 } from 'uuid';

function RegionList(props) {
  function onClick(event) {
    const countryCode = event.currentTarget.parentNode.classList[2];
    const countryName = countries[countryCode];

    props.setClickedRegion(event.target.id);
    props.setClickedCountry({
      name: countryName,
      code: countryCode,
    });
  }

  return (
    <div className="region-list-grid">
      {Object.entries(regions).map(([key, value]) => {
        return (
          <div className={`card-style country-grid-item ${key}`}>
            <h2>{countries[key]}</h2>
            {value.map((region) => {
              return (
                <button
                  key={uuidv4()}
                  id={region.name}
                  onClick={onClick}
                  className="popup"
                >
                  {region.name}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default RegionList;
