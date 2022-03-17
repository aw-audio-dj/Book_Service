/*
name        : putBooking
type:       : put
description : insert a new booking 
parameters  : event_id: number
callback    : message: string
*/

// DB Controller
let db = require("../controller/database.js");

async function call(event_id)
{
    try 
    {
        let bookings = await db.query(`SELECT count(*) as bookings from bookings where event_id = ${event_id}`);
        bookings = bookings[0]['bookings'];
        let maxAttendees = await db.query(`SELECT maxAttendees from events where event_id = ${event_id}`);
        maxAttendees = maxAttendees[0]['maxAttendees'];
        if(!isNaN(bookings) && !isNaN(maxAttendees) && bookings < maxAttendees)
        {
            await db.query(`INSERT into bookings (event_id, timestamp) VALUES (${event_id} , '${new Date().toISOString()}')`);
            return {message: "insert booking successful"}
        }
        else
        {
            return {message: "booking unsuccessful"}
        }
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
  