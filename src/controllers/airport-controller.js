const { AirportService } = require('../services/index')

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.addAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Successfully Created a Airport',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a Airport',
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully Deleted a Airport',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to Delete a Airport',
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const response = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a Airport',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch a Airport',
            err: error
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await airportService.updateAirport(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated a Airport',
            err: {}
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the Airport',
            err: error
        })
    }
}

const addupdate = async (req, res) => {
    try {
        const address = await airportService.updateAirport(req.param.id,req.body);
        return res.status(200).json({
            data: address,
            success: true,
            message: 'Successfully updated the address of the Airport',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to Update the address of the Airport',
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    addupdate
}