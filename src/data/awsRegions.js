const regions = {
  'us': [
    {name: 'us-east-1', niceName: 'N Virginia'},
    {name: 'us-east-2', niceName: 'Ohio'},
    {name: 'us-west-1', niceName: 'Northern California'},
    {name: 'us-west-2', niceName: 'Oregon'},
    {name: 'us-gov-east-1', niceName: 'AWS GovCloud (US-East)'},
    {name: 'us-gov-west-1', niceName: 'AWS GovCloud (US-East)'}],
  'za': 
    [{name: 'af-south-1', niceName: 'Cape Town'}],
  'hk': 
    [{name: 'ap-east-1', niceName: 'Hong Kong'}],
  'in': 
    [{name: 'ap-south-1', niceName: 'Mumbai'}],
  'jp':
    [{name: 'ap-northeast-3', niceName: 'Osaka-Local', 'ap-northeast-1': 'Tokyo' }],
  'kr': [{name: 'ap-northeast-2', niceName: 'Seoul'}],
  'sg': [{name: 'ap-southeast-1', niceName: 'Singapore'}],
  'au': [{name: 'ap-southeast-2', niceName: 'Sydney'}],
  'ca': [{name: 'ca-central-1', niceName: 'Canada'}],
  'de': [{name: 'eu-central-1', niceName: 'Frankfurt'}],
  'ie': [{name: 'eu-west-1', niceName: 'Ireland'}],
  'gb': [{name: 'eu-west-2', niceName: 'London'}],
  'it': [{name: 'eu-south-1', niceName: 'Milan'}],
  'fr': [{name: 'eu-west-3', niceName: 'Paris'}],
  'se': [{name: 'eu-north-1', niceName: 'Stockholm'}],
  'bh': [{name: 'me-south-1', niceName: 'Bahrain'}],
  'br': [{name: 'sa-east-1', niceName: 'Sao Paulo'}],
};

const countries = 
{
  'us': 'United States of America',
  'za': 'South Africa',
  'hk': 'Hong Kong',
  'in': 'India',
  'jp': 'Japan',
  'kr': 'South Korea',
  'sg': 'Singapore',
  'au': 'Australia',
  'ca': 'Canada',
  'de': 'Germany',
  'ie': 'Ireland',
  'gb': 'United Kingdom',
  'it': 'Italy',
  'fr': 'France',
  'se': 'Sweden',
  'bh': 'Bahrain',
  'br': 'Brazil',
};

export {regions, countries};