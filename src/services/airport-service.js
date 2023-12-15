const {AirportRepository} = require('../repository/index');

class AirportService
{
    constructor(){
        this.AirportRepository = new AirportRepository();
    }

    async addAirport(data){
        try {
            const airport = await this.AirportRepository.addAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw(error);
        }
    }

    async deleteAirport(Aid){
        try {
            const response = await this.AirportRepository.deleteAirport(Aid);
            return response;
        } catch (error) {
            console.log("Something went wrong at the service layerr");
            throw(error);            
        }
    }

    async getAirport(Aid){
        try {
            const airport = await this.AirportRepository.getAirport(Aid);
            return airport;
        } catch (error) {
            console.log("Something went wrong at the service layerr");
            throw(error);
        }
    }

    async updateAirport(Aid,data){
        try {
            const airport = await this.AirportRepository.updateAirport(Aid,data);
            return airport;

        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw(error);
        }
    }

    async updateAddress(Aid,data){
        try {
            const address = await this.AirportRepository.updateAddress(Aid,data);
            return address;
        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw(error);
        }
    }
}

module.exports = AirportService;