/*
name        : getBookings
type:       : get
description : return Bookings
parameters  : event_id: number
callback    : bookings[]
*/

// DB Controller
let db = require("../controller/database.js");

async function call(event_id)
{   let where = "";
    try 
    {
        if(event_id && !isNaN(event_id))
        {
            where = ` where event_id = ${event_id}`
        }
        let bookings = await db.query(`SELECT * from bookings${where}`)
        return bookings;
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
  