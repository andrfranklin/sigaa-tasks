'use strict'

import express from 'express';

//import routes
import { routes } from './src/controller/index.js';

// App config
const App = express();

// base error function
function error(status, message) {
    let err = new Error(message);
    err.status = status;
    return err;
}

App.use(routes);

const Port = 3000;
App.listen(Port, () => {
    console.log(`The API is running on port ${Port}`);
});

export { App };