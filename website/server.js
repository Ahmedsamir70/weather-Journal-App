
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require ('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require ('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;

//spin up the server and callback
const server = app.listen(port,()=>{
    console.log('server running');
    console.log(`running on localhost:${port}`);
});

//the route and the callback function
app.get('/all',sendTheData);

function sendTheData (request,response) {
    response.send(projectData)
    projectData = [];
}

//the ROUTE
app.post('/add',addTheDataToServer);

function addTheDataToServer (request,response) {
    console.log(request.body);
    theNewEntery = {
        theDate: request.body.theDate,
        temperature: request.body.temperature,
        theFeeling: request.body.theFeeling
    }
    projectData=theNewEntery;
}