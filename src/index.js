const express = require("express");
const bodyParser = require("body-parser");
const CityRepository = require('./repository/city-repository')
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {
    //create the express object
    const app = express();

    // Setting the middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, async () => {
        console.log(`Server Started at ${PORT}`);
    })
}

setupAndStartServer();