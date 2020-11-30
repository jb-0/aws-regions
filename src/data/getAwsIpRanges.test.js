import {
  fetchAwsIpRanges,
  filterByRegion,
  addType,
  addRowNo,
} from './getAwsIpRanges';

describe('AWS data fetching and transformation', () => {
  const testData = {
    syncToken: '1606711878',
    createDate: '2020-11-30-04-51-18',
    prefixes: [
      {
        ip_prefix: '3.5.140.0/22',
        region: 'ap-northeast-2',
        service: 'AMAZON',
        network_border_group: 'ap-northeast-2',
      },
      {
        ip_prefix: '35.180.0.0/16',
        region: 'eu-west-3',
        service: 'AMAZON',
        network_border_group: 'eu-west-3',
      },
      {
        ip_prefix: '52.93.178.234/32',
        region: 'us-west-1',
        service: 'AMAZON',
        network_border_group: 'us-west-1',
      },
    ],
    ipv6_prefixes: [
      {
        ipv6_prefix: '2600:1f01:4850::/47',
        region: 'us-east-1',
        service: 'AMAZON',
        network_border_group: 'us-east-1',
      },
      {
        ipv6_prefix: '2600:1f01:48a0::/47',
        region: 'us-west-1',
        service: 'AMAZON',
        network_border_group: 'us-west-1',
      },
      {
        ipv6_prefix: '2600:1f1f:8000::/36',
        region: 'us-east-1',
        service: 'AMAZON',
        network_border_group: 'us-east-1-wl1-atl-wlz-1',
      },
    ],
  };

  let awsIps;
  // Get fetch the AWS data so we only have send a request to Amazon once
  beforeAll(async () => {
    awsIps = await fetchAwsIpRanges();
  });

  it('fetchAwsIpRanges returns data in expected format', async () => {
    // Expect the following keys to exist
    expect(awsIps.syncToken).toBeTruthy();
    expect(awsIps.createDate).toBeTruthy();
    expect(awsIps.prefixes).toBeTruthy();
    expect(awsIps.ipv6_prefixes).toBeTruthy();

    // Expect ip's to exist in arrays
    expect(awsIps.prefixes.length).toBeGreaterThan(0);
    expect(awsIps.ipv6_prefixes.length).toBeGreaterThan(0);
  });

  it('filterByRegion returns only ipv4 addresses with the supplied region', () => {
    const ipv4 = filterByRegion(testData, 'eu-west-3', 'ipv4');
    const ipAddress = ipv4[0].ip_prefix;
    
    // Per the test data only one item should be returned
    expect(ipv4.length).toBe(1);

    // ipv4 address do not include a colon, so confirm that there are none present
    expect(ipAddress.includes(':')).toBeFalsy();
  });

  it('filterByRegion returns only ipv6 addresses with the supplied region', () => {
    const ipv6 = filterByRegion(testData, 'us-west-1', 'ipv6');
    const ipAddress = ipv6[0].ipv6_prefix;
    
    // Per the test data only one item should be returned
    expect(ipv6.length).toBe(1);

    // ipv4 address do not include a colon, so confirm that there are none present
    expect(ipAddress.includes(':')).toBeTruthy();
  });
});
