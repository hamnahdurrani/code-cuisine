const assert = require('assert');
const myFunctions = require('../server_side');

describe('Testing the server side functions', function() {

    it('should return a reservation confirmation for valid reservation',function(){
        assert.equal(myFunctions.reserveTable({numPeople: '4', bookingDate: '2024-04-20', time: '02:12'}),'Reservation Confirmed');
    });

    it('should return reservation unavailable message for an invalid function', function(){
        myFunctions.reserveTable({ numPeople: '4', bookingDate: '2024-04-20', time: '02:12' });
        assert.equal(myFunctions.reserveTable({ numPeople: '4', bookingDate: '2024-04-20', time: '02:12' }),'Reservation Unavailable');
    });

    it('should add email ID to email ID list',function(){
        assert.equal(myFunctions.subscribed('emerald@3.com'),true);
    })

    it('should not add email ID to email ID list if it already exists',function(){
        myFunctions.subscribed('emerald@3.com');
        assert.equal(myFunctions.subscribed('emerald@3.com'),false);
    })

});