const express = require("express");
const bodyParser = require("body-parser");
const CityRepository = require('./repository/city-repository')
const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const sequelize = require('sequelize');

const db = require('./models/index');
const {City, Airport, Airplane} = require('./models/index')

const setupAndStartServer = async () => {
    //create the express object
    const app = express();

    // Setting the middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', ApiRoutes);
    app.listen(PORT, async () => {
        console.log(`Server Started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({aler:true});
        }
    });
}

setupAndStartServer();