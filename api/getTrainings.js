/*
 name        : getTrainings
 type:       : get
 description : return all Trainings from database 
 parameters  :
 callback    : trainings[]
*/

// DB Controller
let db = require("../controller/database.js");

async function call()
{
    try 
    {
        return await db.query(`SELECT * from trainings`);
    } 
    catch (error) 
    {
        console.log(error);
        return {message: "get trainings failed"}

    }
}

module.exports = {
    call
};
  