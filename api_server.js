// Create APP 
const path = require("path");
const settings = require("./server.conf.json");
let express = require("express");
let bodyParser = require("body-parser");
const app = express();

// Cross Origin
const cors = require("cors");

// DB Controller
const db = require("./controller/database.js");

// Api controller
let api = require("./controller/api.js");
// Start Server
startApiServer();
startRestInterfaces();

async function startApiServer()
{
    app.listen(settings.server.port, () => {
        console.log(`API Server running on port ${settings.server.port}`)
    })
}

async function startRestInterfaces()
{
    const corsOptions = {
        methods: ["GET","POST","DELETE","UPDATE","PUT","PATCH"],
        origin: "*"
    };
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}) );

    app.get('/getTrainings', async (req, res) => {
        res.send(await api.getTrainings.call());
    })

    app.get('/getTrainingsBetweenDates', async (req, res) => {
        res.send(await api.getTrainingsBetweenDates.call());
    })

    app.get('/getEventsOfTraining', async (req, res) => {
        res.send(await api.getEventsOfTraining.call());
    })

    app.put('/putTraining', async (req, res) => {
        res.send(await api.putTraining.call());
    })

    app.put('/putEvent', async (req, res) => {
        res.send(await api.putEvent.call());
    })

    app.post('/postBooking', async (req, res) => {
        res.send(await api.postBooking.call());
    })
    
}