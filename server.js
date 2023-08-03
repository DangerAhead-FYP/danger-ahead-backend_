const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose")
const accidents = require("./routes/accidents");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use("/", accidents);
app.listen(PORT, console.log(`Server Listening on ${PORT}`));

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://admin:alok123@alokkumax.xqprkhm.mongodb.net/Accidents?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,

        useUnifiedTopology: true,
    }
);



