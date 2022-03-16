/*
name        : getTrainingsBetweenDates
type:       : get
description : return specific Trainings from database between two date's 
parameters  : dateFrom: date , dateTo: date
callback    : trainings[]
*/

// DB Controller
let db = require("../controller/database.js");

async function call(dateFrom, dateTo)
{
    try 
    {
        const events = await db.query(`SELECT * from events where date BETWEEN ${dateFrom} AND ${dateTo}`);
        const training_ids = events.map(ev => {return ev.training_id});
        const trainings = await db.query(`SELECT * from trainings where training_id in ${training_ids}`);
        return trainings
    } 
    catch (error) 
    {
        console.log(error);
        return {message: "get Bookings between two dates failed"}
    }
}

module.exports = {
    call
};
  