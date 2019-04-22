// The Mortgage object is the Facade in the sample code. 
//It presents a simple interface to the client with only a single method: applyFor. 
//Eut underneath this simple API lies considerable complexity.

// The applicant's name is passed into the Mortgage constructor function. 
//Then the applyFor method is called with the requested loan amount. Internally, 
//this method uses services from 3 separate subsystems that are complex and 
//possibly take some time to process; they are Bank, Credit, and Background.

// Based on several criteria (bank statements, credit reports, and criminal background) 
//the applicant is either accepted or denied for the requested loan.
var Mortgage = function(name) {
    this.name = name;
}
 
Mortgage.prototype = {
 
    applyFor: function(amount) {
        // access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
               " for a " + amount + " mortgage";
    }
}
 
var Bank = function() {
    this.verify = function(name, amount) {
        // complex logic ...
        return true;
    }
}
 
var Credit = function() {
    this.get = function(name) {
        // complex logic ...
        return true;
    }
}
 
var Background = function() {
    this.check = function(name) {
        // complex logic ...
        return true;
    }
}
 
function run() {
    var mortgage = new Mortgage("Rajender Dandyal");
    var result = mortgage.applyFor("$100,000");
 
    console.log(result);
}

run();



