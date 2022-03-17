/*
name        : postBooking
type:       : post
contentType : application/json
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
        await db.query(`INSERT into bookings (event_id, timestamp) VALUES (${event_id} , '${new Date().toISOString()}')`);
        return {message: "insert booking successful"}
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
  