import {regions, countries} from './awsRegions';

describe('AWS Region static data validation', () => {
  it('each country code in the countries object exists in the regions object', () => {
    const countryCodesNotPresent = [];

    // Iterate countries object and for each country code (key) check if it does not exist in
    // regions, if it does not exist then add it to an array of country codes not present
    Object.entries(countries).map(([key, value]) => {
      if (!regions[key]) countryCodesNotPresent.push(key)
    });

    // We expect all country codes to be present, therefore expect an empty array to be returned
    expect(countryCodesNotPresent).toEqual([])
  })

  it('each country code in the regions object exists in the country object', () => {
    const countryCodesNotPresent = [];

    // Iterate regions object and for each country code (key) check if it does not exist in
    // countries, if it does not exist then add it to an array of country codes not present
    Object.entries(regions).map(([key, value]) => {
      if (!countries[key]) countryCodesNotPresent.push(key)
    });

    // We expect all country codes to be present, therefore expect an empty array to be returned
    expect(countryCodesNotPresent).toEqual([])
  })

  it('each regions entry has at least one region', () => {
    const countryCodesWithNoRegions = [];

    // Iterate regions object and for any country code that has no associated regions add it to an
    // array
    Object.entries(regions).map(([key, value]) => {
      if (value.length < 1) countryCodesWithNoRegions.push(key)
    });

    // We expect all country codes to have at least one region, therefore expect an empty array to 
    // be returned
    expect(countryCodesWithNoRegions).toEqual([])
  })
});