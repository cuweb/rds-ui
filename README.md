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

`yarn instal`

## Development

### Start 

`yarn dev`

### Build 

`yarn build`

### Test 

`yarn test`

### CI Test

`yarn test:ci`

## Docs 
 
### Development

`yarn docs`

### Build

`yarn docs:build`


## Troubleshoting 

### Storybook port is in use

`sudo lsof -i:6006`

then

`kill -9 <PID>`


## TODO

- Adobe React ARIA


## References
- [Creating a React component library](https://prateeksurana.me/blog/react-component-library-using-storybook-6/)
- [ESLint](https://javascript.plainenglish.io/setting-eslint-and-prettier-on-a-react-typescript-project-2021-22993565edf9)
