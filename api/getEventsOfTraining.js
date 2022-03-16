/*
name        : getEventsOfTraining
type:       : get
description : return Events of a specific training
parameters  : training_id: number
callback    : events[]
*/

// DB Controller
let db = require("../controller/database.js");

async function call(training_id)
{
    try 
    {
        let events = await db.query(`SELECT * from events where training_id = ${training_id}`)
        return events;
    } 
    catch (error) 
    {
        console.log(error);
        return {message: "get events failed"}

    }
}

module.exports = {
    call
};
  