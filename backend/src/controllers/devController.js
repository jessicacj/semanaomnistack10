const axios = require("axios");
const dev = require("../models/dev");
const parseStringAsArray = require('../utils/parseStringAsArray'); 
module.exports = {

    async index (request, response) {
       const listar = await dev.find();

       return response.json(listar);
    },

    async store (request, response) {
        const { github_user, tecnologias, latitude, longitude } = request.body;
        
        let developer = await dev.findOne( { github_user });

        if (!developer) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_user}`);
    
        const { name = login, avatar_url, bio} = apiResponse.data;
        
        const tecnologiasArray = parseStringAsArray(tecnologias);
        
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
    
     developer = await dev.create({
            github_user,
            name,
            avatar_url,
            bio,
            tecnologias: tecnologiasArray,
            location,
        })
        };
        
        return response.json(developer);
    }
};