import React, { useEffect, useState } from 'react';
import getAwsIpRanges from '../../data/getAwsIpRanges';
import './RegionIpList.css';

function RegionIpList(props) {
  const [regionIpData, setRegionIpData] = useState();

  useEffect(() => {
    async function setData() {
      setRegionIpData(await getAwsIpRanges('eu-west-1'));
    }

    setData();
  }, []);

  return (
    <div className="region-ip-list-container">
      <table className="region-ip-list-table">
        <thead>
          <tr>
            <th>ip_prefix</th>
            <th>region</th>
            <th>service</th>
            <th>network_border_group</th>
          </tr>
        </thead>
        <tbody>
          {regionIpData && (
            <React.Fragment>
              {regionIpData.map((ip) => {
                return (
                  <tr>
                    <td>{ip.ip_prefix}</td>
                    <td>{ip.region}</td>
                    <td>{ip.service}</td>
                    <td>{ip.network_border_group}</td>
                  </tr>
                );
              })}
            </React.Fragment>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RegionIpList;
