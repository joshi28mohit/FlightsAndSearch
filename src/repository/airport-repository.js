const { Airport } = require('../models/index');

class AirportRepository {
    async addAirport(data){
        try {
            const airport = await Airport.create(data);
            return airport;
        } catch (error) {
            console.log("Error in the repository layer");
            throw(error);
        }
    }

    async deleteAirport(Aid){
        try {
            await Airport.destroy({
                where: {
                    id: Aid
                }
            })
            return true;
        } catch (error) {
            console.log("Error in the repository layer");
            throw(error);            
        }
    }

    async getAirport(Aid){
        try {
            const airport = await Airport.findByPk(Aid);
            return airport;
        } catch (error) {
            console.log("Error in the repository layer");
            throw(error);
        }
    }

    async updateAirport(Aid,data){
        try {
            const airport = await Airport.findByPk(Aid);
            airport.name = data.name;
            await airport.save();
            return airport;

        } catch (error) {
            console.log("Error in the repository layer");
            throw(error);
        }
    }

    async updateAddress(Aid,data){
        try {
            const airport = await Airport.findByPk(Aid);
            airport.address = data.address;
            await airport.save();
            return airport;
            
        } catch (error) {
            console.log("Error in the repository layer");
            throw(error);
        }
    }

}

module.exports = AirportRepository;