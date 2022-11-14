/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

//personal API
const baseURL = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
const apiKey =  '3515ca333b4be859b4ca7c4e4fbb7b2&units=imperial';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',actionEvent)

/* Function called by event listener */
function actionEvent(e) {
    const zip = document.getElementById('zip').value;
    const myFeeling = document.getElementById('feelings');
    getWeathter(baseURL,zip,apiKey)

    .then(function(theData){
        console.log(theData);
        goToData('/addData',{theDate:newDate, temperature:theData.list[0].main.temperature, theFeeling:feelings})
        updateUI();
    }) 
};

/* Function to GET Web API Data*/
const getWeathter = async (baseURL,zip,key)=> {
    const response = await fetch(baseURL+zip+key)
    try {
        const theData = await response.json();
        return theData;
    } catch(error) {
        console.log('error',error);
    }
};

/* Function to POST data */
const goToData = async (url = '', theData = {})=> {
    console.log(theData);
    const response = await fetch(url, {
        method:'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const myData = await response.json();
        console.log(myData);
        return myData;
    } catch (error) {
        console.log('error',error);
    }
};

/* Function to GET Project Data */
const updateUI = async ()=> {
    const request = await fatch('/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = `The date is: ${allData.theData}`;
        document.getElementById('temp').innerHTML = `Temperature: ${allData.temperature}`;
        document.getElementById('content').innerHTML = `I feel: ${allData.theFeeling}`;

    } catch(error) {
        console.log('error',error);
    }
};