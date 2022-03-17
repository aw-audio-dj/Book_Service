/*
name        : putEvent
type:       : put
contentType : application/json
description : insert or update a Event
parameters  : event_id: number, date?: string, training_id?: number, maxAttendees?: number
callback    : message: string
*/

// DB Controller
let db = require("../controller/database.js");

async function call(event_id = null, date = null, training_id = null)
{
    let callback = {message: "insert or update event failed"};
    try 
    {
        if(date != null && training_id != null )
        {
            let event = await db.query(`SELECT * from events where event_id = ${event_id}`);
            if(Object.keys(event).length > 0 && event_id != null)
            {
                // update
                await db.query(`update events set date = '${date}', training_id = ${training_id} where event_id = ${event_id}` )
                callback.message = "update event successful";
            }
            else
            {
                // insert
                await db.query(`insert into events (date, training_id) values ('${date}' , ${training_id})`)
                callback.message = "insert event successful"
            }
        }
        else
        {
            callback.message = "insert or update event failed - insufficient parameters";
        }
        
    } 
    catch (error) 
    {
        console.log(error);
        callback.message = error.message;
    }
    finally
    {
        return callback;
    }
}

module.exports = {
    call
};
  