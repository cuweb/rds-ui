![Cypress workflow](https://github.com/cuweb/rds-beta/actions/workflows/main.yml/badge.svg)

# Raven Design System

RDS, Carleton University’s design system, is a living digital organism uniting campus wide teams around a common visual language.

## Requirements

-   [NodeJS](https://nodejs.org/en/)
-   [Node Version Manager](https://github.com/nvm-sh/nvm)
-   [Yarn](https://yarnpkg.com/)

## On First Setup

### Clone this repo

```bash 
git clone git@github.com:cuweb/rds-beta.git
```

You can define the directory name as well: 

```bash
git clone git@github.com:cuweb/rds-beta.git --branch develop DIRECTORY_NAME

# Change directory 
cd DIRECTORY_NAME 
```

`cd DIRECTORY_NAME`

### Check your nvm version
```bash
nvm i
```

### Set project's npm version
```bash
nvm use
```

### Install project
```bash
yarn install
```


## After Setup

One you have completed the initial setup above, moving forward to start the development environent you simply need to go to the project directory and run

```bash 
nvm use && yarn dev
```

## Features

-   [Storybook](https://storybook.js.org)
-   [NextJS](https://nextjs.org/)
-   [Cypress](https://www.cypress.io)
-   [Adobe React Aria](https://react-spectrum.adobe.com/react-aria/)
-   [AirBnb ESLint/Prettier suppoer](https://dev.to/bigyank/a-quick-guide-to-setup-eslint-with-airbnb-and-prettier-3di2)

## CLI Commands

`yarn run --non-interactive` lists all posible CLI commands

## Troubleshoting

### Storybook port is in use

```bash
sudo lsof -i:6006
```

then

```
kill -9 <PID>
```

## References

-   [Creating a React component library](https://prateeksurana.me/blog/react-component-library-using-storybook-6/)
-   [ESLint](https://javascript.plainenglish.io/setting-eslint-and-prettier-on-a-react-typescript-project-2021-22993565edf9)
