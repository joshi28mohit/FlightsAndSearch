const {FlightService} = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber, 
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success:true,
            err:{},
            message: 'Successfully Created a flight'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a Flight',
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success:true,
            err:{},
            message: 'Successfully fetched the flights'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the Flights',
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            err:{},
            message: 'Successfully fetched the flight'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the Flight',
            err: error
        });
    }
}

module.exports = {
create,
getAll,
get
}