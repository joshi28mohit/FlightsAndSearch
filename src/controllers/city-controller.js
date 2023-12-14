const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully Created a City',
            err: {}
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a City',
            err: error
        })
    }
}

//DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully Deleted a City',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to Delete a City',
            err: error
        })
    }
}

// GET-> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully found the City',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to Get the City',
            err: error
        })
    }
}

//Patch -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully Updated the City',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to Update the City',
            err: error
        })
    }
}

const getAll = async (req,res) => {
    try {
        const cities = await cityService.getAllCities(req.query); 
        return res.status(200).json({
            data:cities,
            success: true,
            message: 'Successfully fetched all the Cities',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to Fetch the Cities',
            err: error
        })
    }
}

module.exports = {
    create,
    update,
    destroy,
    get,
    getAll
}