const express = require("express")
const router = express.Router();
const { getAccidentsData } = require("../controller/accident.controller")
router.route("/accidents").get(getAccidentsData)
const mongoose = require("mongoose");

module.exports = router