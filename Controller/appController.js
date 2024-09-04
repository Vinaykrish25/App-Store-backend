const express = require('express');
const appDataModel = require('../model/appModel');
const app = express();
app.use(express.json());


exports.getAllApps = async (req,res) => {
    try{
        if(req.query){
            const queryObject = {...req.query}
            var query = await appDataModel.find(queryObject)
        }
        else{
            var query = await appDataModel.fin();
        }
        res.status(200).json(query)
    }catch(err){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
   
}