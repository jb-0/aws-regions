import React, { useEffect, useState } from 'react';
import getAwsIpRanges from '../../data/getAwsIpRanges';

function RegionIpList(props) {
  const [regionIpData, setRegionIpData] = useState();

  useEffect(() => {
    async function setData() {
      setRegionIpData(await getAwsIpRanges('eu-west-1'));
    }
    
    setData()
  }, []);

  return <div>{regionIpData && <div>{regionIpData.map((ip) => ip.region)}</div>}</div>;
};

export default RegionIpList;