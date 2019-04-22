// Chain of Responsibility

// Definition
// Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.

// Frequency of use (in JavaScript):medium

// Summary
// The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request. This pattern is essentially a linear search for an object that can handle a particular request.

// An example of a chain-of-responsibility is event-bubbling in which an event propagates through a series of nested controls one of which may choose to handle the event.

// The Chain of Responsiblity patterns is related to the Chaining Pattern which is frequently used in JavaScript (jQuery makes extensive use of this pattern).

// To learn more about the Chaining patterns and its benefits see our JavaScript + jQuery Design Pattern Framework.


// Diagram
// Diagram JavaScript Chain of Responsibility Design Pattern

// Participants
// The objects participating in this pattern are:
// Client -- In sample code: Request
// initiates the request to a chain of handler objects
// Handler -- In sample code: Request.get() method
// defines an interface for handling the requests
// implements the successor link (returning 'this')

// Sample code in JavaScript
// This example differs slightly from the classic Chain of Responsibility pattern in that not one, but all handlers participate in handling the request.

// The code demonstrates an elegant solution to a money dispensing machine problem. Say, a customer requires $247 from an ATM machine. What is the combination of bank notes ($100, $50, $20, $10, $5, $1) that satisfies that request?

// A Request is created with the amount requested. Next, a series of get calls are chained together, each one handling a particular denomination. Each handler determines the number of bank notes dispensed and substracts this amount from the remaining amount. The request object is passed through the chain by returning this in the get method.

// The log function is a helper which collects and displays results.

 
var Request = function(amount) {
    this.amount = amount;
    log.add("Requested: $" + amount + "\n");
}
 
Request.prototype = {
    get: function(bill) {
        var count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        log.add("Dispense " + count + " $" + bill + " bills");
        return this;
    }
}
 
// log helper 
 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    }
})();
 
function run() {
    var request = new Request(378);
 
    request.get(100).get(50).get(20).get(10).get(5).get(1);
 
    log.show();
}
run()