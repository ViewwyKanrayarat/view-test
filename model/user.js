const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userModel = new Schema({
    userID: { type: String, default: "" },
    username: { type: String, default: "" },
    password: { type: String, default: "" },
    firstname: { type: String, default: "" },
    lastname: { type: String, default: "" },
    birthdate: { type: String, default: "" },
    programing_skill: { type: Array, default: [] },
},{ collection: 'users', versionKey: false, timestamps: { createdAt: "created_date", updatedAt: "updated_date" }});
const userData = mongoose.model("users", userModel);
module.exports = userData