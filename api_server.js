// Create APP 
const settings = require("./server.conf.json");
let express = require("express");
let bodyParser = require("body-parser");
const app = express();

// Cross Origin
const cors = require("cors");

// DB Controller
let db = require("./controller/database.js");

// Start Server
startApiServer();
startRestInterfaces();

async function startApiServer()
{
    app.listen(settings.server.port, () => {
        console.log(`API Server running on port ${settings.server.port}`)
    })
}

function startRestInterfaces()
{
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
}