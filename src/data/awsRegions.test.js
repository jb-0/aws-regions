import {regions, countries} from './awsRegions';

describe('AWS Region static data validation', () => {
  it('each country code in the countries object exists in the regions object', () => {
    const countryCodesNotPresent = [];

    Object.entries(countries).map(([key, value]) => {
      if (!regions[key]) countryCodesNotPresent.push(key)
    });

    expect(countryCodesNotPresent).toEqual([])
  })
});