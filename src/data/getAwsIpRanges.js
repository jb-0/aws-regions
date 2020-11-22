async function getAwsIpRanges(region) {
  const res = await fetch('https://ip-ranges.amazonaws.com/ip-ranges.json');
  const data = await res.json();


  return filterByRegion(data, region);
}

function filterByRegion(data, region) {
  return data.prefixes.filter(prefix => prefix.region === region);
}

export default getAwsIpRanges;