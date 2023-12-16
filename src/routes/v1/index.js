const express = require('express');
// const {CityController,AirportController,FlightController} = require('../../controllers/index');

const {FlightMiddleware} = require('../../middlewares/index');

const  CityController = require('../../controllers/city-controller');
const  AirportController = require('../../controllers/airport-controller');
const  FlightController = require('../../controllers/flight-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

router.post('/airport', AirportController.create);
router.delete('/airport/:id', AirportController.destroy);
router.get('/airport/:id', AirportController.get);
router.patch('/airport/:id', AirportController.update);
router.patch('/airport/addressupdate/:id', AirportController.addupdate);

router.post('/flights',
            FlightMiddleware.validateCreateFlight,
            FlightController.create);
router.get('/flights',FlightController.getAll);

module.exports = router;