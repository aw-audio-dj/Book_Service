
const getEventsOfTraining = require("../api/getEventsOfTraining");
const getTrainings = require("../api/getTrainings.js");
const getTrainingsBetweenDates = require("../api/getTrainingsBetweenDates.js");
const putBooking = require("../api/putBooking.js");
const putEvent = require("../api/putEvent.js");
const putTraining = require("../api/putTraining.js");

module.exports = {
    getEventsOfTraining,
    getTrainings,
    getTrainingsBetweenDates,
    putBooking,
    putEvent,
    putTraining
};
  