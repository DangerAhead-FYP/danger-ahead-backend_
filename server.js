const express = require("express")
const cors = require("cors")
const accidents = require("./routes/accidents")
const app = express();
const PORT = 5000
app.use(cors())
app.use(express.json())
app.use("/", accidents)
app.listen(PORT, console.log(`Server Listening on ${PORT}`))