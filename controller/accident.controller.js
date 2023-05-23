// const data = require("../model/data")
const mongoose = require("mongoose");
const { Accident, Cat } = require("../model/model")
const getAccidentsData = async (req, res) => {
    try {
        const accidents = await Cat.find({})
        // console.log(data)
        res.json(accidents)
    } catch (error) {
        console.log(error)
    }
}
module.exports = { getAccidentsData }