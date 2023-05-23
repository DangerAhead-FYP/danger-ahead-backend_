const mongoose = require("mongoose");

const AccidentsSchema = new mongoose.Schema({
    id: String,

    x: {
        type: Number,
        require: true,
    },
    y: {
        type: Number,
        require: true,
    },
    title: {
        type: String,
        default: "accidents happened",
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    eventDate: {
        type: String,
    },
    eventTime: {
        type: String,
    },
    NumberOfInjured: {
        type: Number,
    },
    LevelOfAccident: {
        type: String,
    },
    SuggestionData: [
        {
            MeasuresToPrevent: String,
            Cause: String
        }
    ],
    RoadData: [
        {
            StreetsLight: String,
            TrafficLights: String,
            TrafficOfficer: String,
            RoadCondition: String
        }
    ]
});

const Cat = mongoose.model("Cat", {
    title: String,
    desc: String,
    x: Number,
    y: Number,
    NumberOfInjured: Number,
    NumberOfDeaths: Number,
    LevelOfAccidents: String,
    StreetsLight: String,
    TrafficLights: String,
    TrafficOfficer: String,
    RoadCondition: String,
    MeasuresToPrevent: String,
    Cause: String,
});
const kitty = new Cat(
    {
        title: "Title of the ",
        desc: "String",
        x: 26,
        y: 26,
        NumberOfInjured: 1,
        NumberOfDeaths: 0,
        LevelOfAccidents: "Severe",
        StreetsLight: "YES",
        TrafficLights: "NO",
        TrafficOfficer: "NO",
        RoadCondition: "Poor",
        MeasuresToPrevent: "we can talk about that",
        Cause: "bad roads",

    }
);


kitty.save().then(() => console.log('meow'));



const Accident = mongoose.model("FYP", AccidentsSchema);

module.exports = { Accident, Cat };