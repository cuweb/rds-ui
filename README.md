![Cypress workflow](https://github.com/cuweb/rds-beta/actions/workflows/main.yml/badge.svg)

# Raven Design System

RDS, Carleton University’s design system, is a living digital organism uniting campus wide teams around a common visual language.

## Features

- [Storybook](https://storybook.js.org)
- [NextJS](https://nextjs.org/)
- [Cypress](https://www.cypress.io)
- [Adobe React Aria](https://react-spectrum.adobe.com/react-aria/)
- [AirBnb ESLint/Prettier suppoer](https://dev.to/bigyank/a-quick-guide-to-setup-eslint-with-airbnb-and-prettier-3di2)


## Installation 

`yarn instal` or `npm install`

## Development

### Start 

`yarn dev` or `npm run dev`

### Build 

`yarn build` or `npm run build`

### Test 

`yarn test` or `npm run test`

### CI Test

`yarn test:ci` or `npm run test:ci`

## Docs 
 
### Development

`yarn docs` or `npm run docs`

### Build

`yarn docs:build` or `npm run docs:build`


## Troubleshoting 

### Storybook port is in use

`sudo lsof -i:6006`

then

`kill -9 <PID>`


## TODO

- Adobe React ARIA
