async function getAwsIpRanges(region) {
  const res = await fetch('https://ip-ranges.amazonaws.com/ip-ranges.json');
  const data = await res.json();

  // Get the v4 and v6 IPs for the specified region
  let ipv4 = filterByRegion(data, region, 'ipv4');
  let ipv6 = filterByRegion(data, region, 'ipv6');

  // Add a type identifier to each ip
  ipv4 = addType(ipv4, 'ipv4');
  ipv6 = addType(ipv6, 'ipv6');

  // Combine ip lists and return them with a row number prefix
  return addRowNo([...ipv4, ...ipv6]);
}

function filterByRegion(data, region, type) {
  if (type === 'ipv4')
    return data.prefixes.filter((prefix) => prefix.region === region);
  if (type === 'ipv6')
    return data.ipv6_prefixes.filter((prefix) => prefix.region === region);
}

function addType(data, type) {
  const dataWithType = data.map((prefix) => ({ ...prefix, type: type }));

  return dataWithType;
}

function addRowNo(data) {
  let count = 0;
  const dataWithRowNo = data.map((prefix) => {
    count++;
    return { no: count, ...prefix };
  });

  return dataWithRowNo;
}

export default getAwsIpRanges;
