const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
    name: {
    type: String,
    require: [true, "App name should not be empty"],
    minLength: [5, "The length of the name should atleast 5"],
    maxLength: [30, "The length of the name should almost 30"],
},
    url: {
    type: String,
    unique: true,
    require: [true, "url should not be empty"],
    minLength: [10, "The length should atleast 10"],
},
    category: {
    type: String,
    require: [true, "category should not be empty"],
    minLength: [10, "The category length should atleast 10"],
    maxLength: [20, "The category length should atmost 20"],
},
    image: {
    type: String,
    require: [true, "image usl should not be empty"],
    unique: true
}
},
{collection: "appStore"}
)

const appDataModel = mongoose.model('', appSchema);

module.exports = appDataModel;