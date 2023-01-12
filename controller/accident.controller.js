const data = require("../model/data")

const getAccidentsData = async (req, res) => {
    try {
        console.log(data)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports = { getAccidentsData }