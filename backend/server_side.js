let express = require('express'); 
let app = express();
let port = 3000;

let reserved = [];
let emailIDList = [];

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Accept, Content-Type, Authorization, X-Requested-With");

    next();
});

// Reservations 

app.post('/reservation', (req, res) => {
    let reservation = JSON.parse(req.query['data']);
    let server_response = reserveTable(reservation)
    res.send(server_response);
})

//function to Reserve a Table
//precondition : input is an object
//postcondition : returns 'Reservation Confirmed' if table is available otherwise 'Reservation Unavailable'

function reserveTable(reservation){
    let isBookingAvailable = checkBookingAvailability(reservation);
    if (isBookingAvailable) {
        reserved.push(reservation);
    }
    return isBookingAvailable ? 'Reservation Confirmed' : 'Reservation Unavailable';
}

//function to check availability
//precondition : input is an object
//postcondition : returns true if reservation booking date and time are available else false

function checkBookingAvailability(reservation){
    if (reserved.length != 0){
        for (let i = 0; i < reserved.length; i++){ 
            if (reserved[i].bookingDate == reservation.bookingDate && reserved[i].time == reservation.time){
                return false;
            }
        }
    }
    return true;
}

// Subscriptions

app.post('/subscribe', (req, res) => {
    let sub = JSON.parse(req.query['data']);
    console.log('your email has been subbed', sub);
    subscribed(sub);
    console.log(emailIDList);
    res.send('email sub worked');
})

//function to add new emails to subscription lists
//precondition : input is an email ID
//postcondition : returns true if email ID isn't a part of the list already else false

function subscribed(email){
    for (let i = 0; i < emailIDList.length; i++){
        if (emailIDList[i] == email){
            return false
        }
    }
    emailIDList.push(email);
    return true
}

app.listen(port, () => {})

module.exports = { reserveTable, subscribed};