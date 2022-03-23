
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let expect  = require("chai").expect;
let request = require("request");
const fileSettings = require("../../server.conf.json");
// const url = `http://localhost:${fileSettings.server.port}/getTrainings`;
let api_server = require("../../api_server.js");;
let requester
// This is just for organisation and reporting
describe('getTrainings', function() 
{
    // beforeEach( () => {
    //     api_server = require("../../api_server.js");
    //  } ),
    // afterEach( ( done ) => {    
    //     delete require.cache[require.resolve( '../../api_server.js' )]
    //     done();
    //  } ),
  
    // This is the name of the test
    it('should load all trainings from Database', function(done) 
    {
        requester = chai.request(api_server.app).get("/trainings")
        .end(function (err, res) 
        {
            console.log(res.body);
            // expect(res).to.have.status(200)
            expect(res.body).to.not.have.property('message');            
            done();
        })   
        // .then(() => api_server.app.delete())    
    });  
});