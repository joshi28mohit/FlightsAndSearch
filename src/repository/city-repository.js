const {City} = require('../models/index');


class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({
                name
            });
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async deleteCity({cityId}){
        try{
            City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async updateCity(cityId, data){
        try {
            const city = await City.update(data,{
                where:{
                    id:cityId
                }
            })
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }


    async getCity(cityId){                    
        try{
            // const city = await City.findOne({           //As city id is a primary key, so we can use findByPk(fin by primary key) to directly get the details
            // where: {
            //     id: cityId
            // }
            const city = await City.findByPk(cityId);
            return city;
        } catch(error){
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }


}

module.exports = CityRepository;