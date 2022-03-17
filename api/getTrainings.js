/*
 name        : getTrainings
 type:       : get
 description : return all Trainings from database 
 parameters  :
 callback    : trainings[]
*/

// DB Controller
const db = require("../controller/database.js");

async function call()
{
    try 
    {
        return await db.query(`SELECT * from trainings`);
    } 
    catch (error) 
    {
        return {message: error.message}
    }
}

module.exports = {
    call
};
  