import { fetchAwsIpRanges, filterByRegion, addType, addRowNo } from './getAwsIpRanges';

describe('AWS data fetching and transformation', () => {
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
  })
})