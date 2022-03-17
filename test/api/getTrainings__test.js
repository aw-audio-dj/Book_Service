
var expect  = require("chai").expect;
const { json } = require("body-parser");
var request = require("request");
// FileSettings
const fileSettings = require("../../server.conf.json");
// DB Controller
// const db = require("../../controller/database.js");
// Api controller
// const api = require("../../controller/api.js");

const url = `http://localhost:${fileSettings.server.port}/getTrainings`;

// This is just for organisation and reporting
describe('getTrainings', function() 
{

    // This is the name of the test
    it('should load all trainings from Database', function(done) 
    {
        request(url, function(error, response, body) {
            // response.body = response.body+"1"
            console.log("statusCode: ",response.statusCode);
            console.log("body: ",response.body, "typeof: ",typeof response.body)
            
            // expect(response.statusCode).to.equal(200);
            // done();
            try 
            {
                response.body = JSON.parse(response.body);
                expect(response.body).to.not.have.property('message');
                done();
                // if(!response.body.hasOwnProperty("message"))
                // {
                //     done();
                // }
                // else
                // {
                //     done(new Error(response.body.message));
                // }
            } 
            catch (error) 
            {
                done(new Error(error.message+"\nresponse.body: "+ JSON.stringify(response.body)));
            }         
            
        });
      
    });
  
});