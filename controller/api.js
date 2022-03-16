
const getEventsOfTraining = require("../api/getEventsOfTraining");
const getTrainings = require("../api/getTrainings.js");
const getTrainingsBetweenDates = require("../api/getTrainingsBetweenDates.js");
const postBooking = require("../api/postBooking.js");
const putEvent = require("../api/putEvent.js");
const putTraining = require("../api/putTraining.js");

module.exports = {
    getEventsOfTraining_module: getEventsOfTraining,
    getTrainings_module: getTrainings,
    getTrainingsBetweenDates_module: getTrainingsBetweenDates,
    postBooking_module: postBooking,
    putEvent_module: putEvent,
    putTraining_module: putTraining
};
  