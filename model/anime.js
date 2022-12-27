const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const animeModel = new Schema({
    anime_ID: { type: String, default: "" },
    src: { type: String, default: "" },
    title: { type: String, default: "",unique:true},
    title_th: { type: String, default: "" },
    trailer: { type: String, default: "" },
},{ collection: 'animes', versionKey: false, timestamps: { createdAt: "created_date", updatedAt: "updated_date" }});
const animeData = mongoose.model("animes", animeModel);
module.exports = animeData