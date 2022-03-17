/*
name        : getTrainingsBetweenDates
type:       : get
description : return specific Trainings from database between two date's 
parameters  : dateFrom: date(isoString) , dateTo: date(isoString)
callback    : trainings[]
*/

// DB Controller
let db = require("../controller/database.js");

async function call(dateFrom, dateTo)
{
    try 
    {
        dateFrom = new Date(dateFrom).toISOString();
        dateTo = new Date(dateTo).toISOString();
        const events = await db.query(`SELECT * from events where date BETWEEN '${dateFrom}' AND '${dateTo}'`);
        const training_ids = events.map(ev => {return ev.training_id});
        const trainings = await db.query(`SELECT * from trainings where training_id in (${training_ids})`);
        return trainings
    } 
    catch (error) 
    {
        console.log(error);
        return {message: error.message}
    }
}

module.exports = {
    call
};
  