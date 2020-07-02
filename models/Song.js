const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
    artist: String,
    song: String,
    album: String

});

const Song = mongoose.model("Song", SongSchema);

module.exports = Song;
