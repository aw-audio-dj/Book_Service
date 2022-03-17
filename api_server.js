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
    // It enables us to transform body types from our request object (e.g. json, urlencoded):
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}) );

    app.get('/getTrainings', async (req, res) => {
        res.send(await api.getTrainings.call());
    })

    app.get('/getTrainingsBetweenDates/:dateFrom/:dateTo', async (req, res) => {
        res.send(await api.getTrainingsBetweenDates.call(req.params.dateFrom, req.params.dateTo));
    })

    // just for testing
    app.get('/getTrainingsBetweenDates2', async (req, res) => {
        res.send(await api.getTrainingsBetweenDates.call(req.body.dateFrom, req.body.dateTo));
    })


    app.get('/getEventsOfTraining/:training_id', async (req, res) => {
        res.send(await api.getEventsOfTraining.call(req.params.training_id));
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