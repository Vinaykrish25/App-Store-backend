const express = require('express');
const appDataModel = require('../model/appModel');
const app = express();
app.use(express.json());


exports.getAllApps = async (req,res) => {
    if(req.query){
        const queryObject = {...req.query}
        var query = await appDataModel.find(queryObject)
    }
    else{
        var query = await appDataModel.find();
    }
    res.json(query)
}