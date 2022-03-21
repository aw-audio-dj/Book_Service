/*
// name        : event
// type:       : put
// contentType : application/json
// description : insert or update a Event
// parameters  : arguments: {event_id?: number, date?: string, training_id?: number}
// callback    : message: string
*/

// DB Controller
let db = require("../controller/database.js");

async function call( arguments = null )
{
    let callback = {message: "insert or update event failed"};
    try 
    {
        if(arguments.date != null && arguments.training_id != null )
        {
            if(arguments.event_id && arguments.event_id != null)
            {
                let event = await db.query(`SELECT * from events where event_id = ${arguments.event_id}`);
                if(Object.keys(event).length > 0)
                {
                    // update
                    await db.query(`update events set date = '${arguments.date}', training_id = ${arguments.training_id} where event_id = ${arguments.event_id}` )
                    callback.message = "update event successful";
                }
            }            
            else
            {
                // insert
                await db.query(`insert into events (date, training_id) values ('${arguments.date}' , ${arguments.training_id})`)
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
  