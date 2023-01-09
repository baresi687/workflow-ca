# Workflow - Course Assignment

## Goal

To improve the quality of an existing `project` by establishing useful workflows that make the development process more efficient.

## Brief

Take an existing JavaScript project that has:

-   API calls to `CRUD` an item
-   API call to `authenticate` a user

## Requirements

-   Integrate the `Prettier` package and add a script call `format` for it in the package.json file
-   Integrate the `HUSKY` package and make sure that it works and run the pre-hooks before any commit
-   Integrate the `ESLint` package and add a script called `lint` for it in the package.json file
-   Integrate the `JEST` package and add a script called `test` for it in the package.json file

## Requirements for `Prettier`

#### Rules:

-   Tab Width should be `4 spaces`
-   Quotes should be `single quotes`

## Requirements for `HUSKY`

-   Make sure that you have `pretty-quick` installed
-   Use a working version for `husky`

## Requirements for `ESLINT`

-   Use `airbnb` eslint styleguide as your default styleguide in the config
-   Add a `lint` script to lint all your code and `lint-fix` script to automatically fix the project lint issues to your package.json

## Requirements for `JEST : unit tests`

-   The `logInUser` function returns a valid token when provided with valid credentials
-   The `logoutUser` function clears the token from browser storage
-   The `createPost` function creates a new item on the API (You need to check if the item is created from the API response)

## Requirements for `end-to-end tests`

-   The `login` form validates user inputs correctly based on API restrictions
-   The `create` item form validates user inputs correctly based on API restrictions
-   The `logout` button logs the user out when clicked

## How to run the current project

-   Clone the project

-   `npm install` to install node modules.

-   `npm run build` to build the project.

-   `npm run preview` to run in Production mode.

## Contact

[My LinkedIn page](https://www.linkedin.com/in/hreinn-gylfason-b9a48521a/)
