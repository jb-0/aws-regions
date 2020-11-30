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

  it('addType returns the supplied object with an additional key named type', () => {
    const typeTestReturn = addType(testData.prefixes, 'ipv4')
    const sampleTypeTest = typeTestReturn[0];

    // Expect the following keys to exist
    expect(sampleTypeTest.ip_prefix).toBeTruthy();
    expect(sampleTypeTest.region).toBeTruthy();
    expect(sampleTypeTest.service).toBeTruthy();
    expect(sampleTypeTest.network_border_group).toBeTruthy();

    // Expect the additional key type to exist with a value of 'ipv4'
    expect(sampleTypeTest.type).toBe('ipv4');
  });

  it('addRowNo returns the supplied object with a row number', () => {
    const rowNoTestReturn = addRowNo(testData.prefixes)

    // Expect the first element to have a row number of 1, second to have 2 and third to have 3
    expect(rowNoTestReturn[0].no).toBe(1);
    expect(rowNoTestReturn[1].no).toBe(2);
    expect(rowNoTestReturn[2].no).toBe(3);
  })
});