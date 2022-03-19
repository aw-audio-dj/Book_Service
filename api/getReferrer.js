/*
name        : getReferrer
type:       : get
description : return referrer(s)
parameters  : referrer_id: number
callback    : referrer[]
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
  