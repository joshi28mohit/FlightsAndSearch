// This will be helpful to export all the repositories using one file only. This will reduce the complexities.

module.exports = {
    CityRepository: require('./city-repository'),
    AirportRepository: require('./airport-repository'),
    FlightRepository: require('./flight-repository'),
    AirplaneRepository: require('./airplane-repository'),
    CrudRepository: require('./crud-repository')
}