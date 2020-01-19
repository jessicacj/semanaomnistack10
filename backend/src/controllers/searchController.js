const dev = require("../models/dev");
const parseStringAsArray = require('../utils/parseStringAsArray'); 

module.exports = {
    async index(request, response){
        const { latitude, longitude, tecnologias } = request.query;

        const tecnologiasArray = parseStringAsArray(tecnologias);

        const devs = await dev.find({
            // Filtro por tecnologias
            tecnologias: {
                $in: tecnologiasArray,
            },
            // Filtro de geolocalização: raio de 10km
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        }); 

    return response.json({ devs });
    }
}