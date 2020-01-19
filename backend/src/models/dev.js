const mongoose = require("mongoose");
const pointSchema = require('./utils/pointSchema');
const devSchema = new mongoose.Schema({
    name: String,
    github_user: String,
    bio: String,
    avatar_url: String,
    tecnologias: [String],
    location: {
        type: pointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('dev', devSchema);