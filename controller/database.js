/**
 *  @Database
 *  @author       Arne Winter
 *  @requires
 */
const sqlite3 = require("sqlite3").verbose();
const serverSettings = require("../server.conf.json");
let db_path = `${process.cwd()}/database/${serverSettings.db.db_name}.sqlite`;

console.log(process.cwd())
const dbConnection = new sqlite3.Database(db_path, sqlite3.OPEN_READWRITE,(err) => 
{
    if (err) 
    {
        console.error(err.message, " no connection to "+db_path+ " Database.");
    }
    console.log(`Connected to ${db_path} Database.`);
}); 



let query = function(query )
{
    return new Promise(function(resolve, reject)
    {
        let data = [];        
        dbConnection.all(query, [], (err, rows) => 
        {
            if (err) 
            {
                console.log(query);
                reject(new Error(err));
            }
            data = rows;
            resolve(data);
        });
    });
};

module.exports = {
    dbConnection,      
    query,
};
  