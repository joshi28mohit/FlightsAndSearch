//This file will have a class that will be used to perform the CRUD operations in city table.
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

    async deleteCity(cityId){
        try{
            await City.destroy({
                where: {
                    id:cityId
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
            // The below approach will also work but will not return updated object
            // If we are using Pg then return:true can be used else not 
            // const city = await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // })
            // for getting the updated data in mysql, we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
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