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

    app.get('/trainings', async (req, res) => {
        res.send(await api.getTrainings.call());
    })

    // just for testing alternative date submit
    app.get('/trainingsBetweenDates2/:dateFrom/:dateTo', async (req, res) => {
        res.send(await api.getTrainingsBetweenDates.call(req.params.dateFrom, req.params.dateTo));
    })
    
    app.get('/trainingsBetweenDates', async (req, res) => {
        res.send(await api.getTrainingsBetweenDates.call(req.body.dateFrom, req.body.dateTo));
    })

    app.get('/eventsOfTraining/:training_id', async (req, res) => {
        res.send(await api.getEventsOfTraining.call(req.params.training_id));
    })

    app.put('/training', async (req, res) => {
        res.send(await api.putTraining.call(req.body));
    })

    app.put('/event', async (req, res) => {
        res.send(await api.putEvent.call(req.body.arguments));
    })

    app.put('/booking/:event_id', async (req, res) => {
        res.send(await api.putBooking.call(req.params.event_id));
    })

    app.get('/referrer/:referrer_id', async (req, res) => {
        res.send(await api.getReferrer.call(req.params.referrer_id));
    })

    app.get('/bookings/:event_id', async (req, res) => {
        res.send(await api.getBookings.call(req.params.event_id));
    })

}

module.exports = {
    app
}