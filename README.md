# CRM from Lead to Prospect

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Capital Technologies

- React
- Redux e Redux-Saga (using ducks pattern)
- styled-components
- json-server

## Architecture

```
|- api
|-- db.json
|- src
|-- components
|-- constants
|-- pages
|-- services
|-- store
|--- ducks
|-- tokens
|-- types
|-- utils
```

## Running the project

1. First of all, install the dependencies using `yarn` or `npm install `(consider use the latest LTS version of node)
2. Open a terminal and run `[yarn or npm run] server`, this will raise at `localhost:3001` the fake api using json-server :D
3. Open another terminal and run `[yarn or npm run] start`, this will open in the application at `localhost:3000` :D
4. If never gone wrong, everything is right and now you can punch the "validate leads" button, over the leads list, and magically, the prospects will be discovered :B
5. To test every little part of the project, just run `[yarn or npm run] test` :D
