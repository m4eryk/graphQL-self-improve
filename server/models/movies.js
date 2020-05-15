const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    title: String,
    genre: String,
    directorId: String,
    img: String,
});

module.exports = mongoose.model('Movie', movieSchema);
