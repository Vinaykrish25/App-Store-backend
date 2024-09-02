const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
    name: String,
    url: String,
    category: String,
    image: String
},
{collection: "appStore"}
)

const appDataModel = mongoose.model('', appSchema);

module.exports = appDataModel;