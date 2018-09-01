# Website for TEDxIWU
This site is hosted at http://www.tedxiwu.com

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Code formatting
This repo uses prettier eslint and the airbnb eslint package. Code may be formatted with `npm run format -- --write`

More commands for code formatting may be found at [prettier-eslint-cli](https://github.com/prettier/prettier-eslint-cli) on github.

## Deployment

This website is hosted using github pages. The hosted files are in the gh-pages branch. The site can be published with `npm run deploy`

## Updating to New Releases

Create React App is divided into two packages:

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-scripts`, [open the changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-scripts` painlessly.
