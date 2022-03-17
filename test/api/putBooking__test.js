// Help: https://www.chaijs.com/api/bdd/
// Help: https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
// Help: https://www.tabnine.com/code/javascript/modules/chai-http

let chai = require('chai');
let expect  = chai.expect;
// let should = chai.should();
// let request = require("request");

let chaiHttp = require('chai-http');
chai.use(chaiHttp);
const fileSettings = require("../../server.conf.json");
const url = `http://localhost:${fileSettings.server.port}`;

// This is just for organisation and reporting
describe('putBooking', function() 
{
    // This is the name of the test
    it('should insert a new booking', function(done) 
    {
        chai.request(url).put("/putBooking/1")
        .end(function (err, res) 
        {
            console.log(res.body);
            // expect(res).to.have.status(200)
            expect(res.body).to.have.property('message').that.does.include("successful");
            done();
        });
      
    });
  
});