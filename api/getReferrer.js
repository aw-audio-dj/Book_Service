/*
name        : getEventsOfTraining
type:       : get
description : return Events of a specific training
parameters  : training_id: number
callback    : events[]
*/

// DB Controller
let db = require("../controller/database.js");

async function call(referrer_id)
{   let where = "";
    try 
    {
        if(referrer_id && !isNaN(referrer_id))
        {
            where = ` where referrer_id = ${referrer_id}`
        }
        let referrer = await db.query(`SELECT * from referrer${where}`)
        return referrer;
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
  