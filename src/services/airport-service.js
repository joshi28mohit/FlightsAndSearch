const { AirportRepository } = require('../repository/index');

class AirportService
{
    constructor(){
        this.airportRepository = new AirportRepository();
    }

    async addAirport(data){
        try {
            const airport = await this.airportRepository.addAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw(error);
        }
    }

    async deleteAirport(Aid){
        try {
            const response = await this.airportRepository.deleteAirport(Aid);
            return response;
        } catch (error) {
            console.log("Something went wrong at the service layerr");
            throw(error);            
        }
    }

    async getAirport(Aid){
        try {
            console.log(Aid);
            const airport = await this.airportRepository.getAirport(Aid);
            return airport;
        } catch (error) {
            console.log("Something went wrong at the service layerr");
            throw(error);
        }
    }

    async updateAirport(Aid,data){
        try {
            console.log(data);
            const airport = await this.airportRepository.updateAirport(Aid,data);
            return airport;

        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw(error);
        }
    }

    async updateAddress(Aid,data){
        try {
            const address = await this.airportRepository.updateAddress(Aid,data);
            return address;
        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw(error);
        }
    }
}

module.exports = AirportService;