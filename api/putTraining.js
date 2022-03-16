/*
name        : putTraining
type:       : put
description : insert or update a Training
parameters  : training_id?: number, name?: string, description?: string, referrer_id?: number, price?: number 
callback    : message: string
*/

// DB Controller
const db = require("../controller/database.js");
const helperFunctions = require("../helpers/helperFunctions.js");

async function call(training_id = null, name = null, description = null, referrer_id = null, price = null)
{
    let message = "insert or update training failed";
    try 
    {
        if(training_id != null && !isNaN(training_id) )
        {
            let training = await db.query(`SELECT * from trainings where training_id = ${training_id}`);
            if(Object.keys(training).length > 0 && name != null && description != null && referrer_id != null && price != null)
            {
                // update
                await db.query(`update trainings set name = '${helperFunctions.makeTextSQLsaveLight(name)}', description = '${helperFunctions.makeTextSQLsaveLight(description)}', referrer_id = ${referrer_id} , price = ${price} where training_id = ${training_id}` )
                message = "update training successful";
            }
            else
            {
                // insert
                await db.query(`insert into trainings (name, description, referrer_id, price) values ('${helperFunctions.makeTextSQLsaveLight(name)}' , '${helperFunctions.makeTextSQLsaveLight(description)}' , ${referrer_id} , ${price})`)
                message = "insert training successful";
            }
        }
        else
        {
            message = "insert or update event training - insufficient parameters";
        }
    } 
    catch (error) 
    {
        console.log(error);
    }
    finally
    {
        return message;
    }
}

module.exports = {
    call
};
  