# AWS Regions

This repo contains a [React site](https://jb-0.github.io/aws-regions/) that can be used to quickly
get a list of AWS IPs in a tabluar format for a given region. This site presents user's with a map 
and allows them to select an AWS region, on selecting a region the user is presented with a 
comprehensive list of IPs for the chosen region. This site leverages AWS's publicly available IP 
JSON file. Tests created using Jest and React Testing Library.

## Requirements
You will need to have Node.js installed to run this project, please visit the node site for install
instructions: https://nodejs.org/en/download/

## Installation
Once you have NPM installed you can run the following shell commands to install this project:
```
git clone https://github.com/jb-0/aws-regions.git
cd aws-regions
npm install
```

## Running the application
To run the app you can execute the following command in the project root directory:
```
npm start
```

Using your preferred web browser you can navigate to localhost:3000 to view and use the app.

## Testing the application
To test the app you can execute the following command in the project root directory:
```
npm test
```

## Building the application
To build the app for production you can execute the following command in the project root directory:
```
npm run build
```