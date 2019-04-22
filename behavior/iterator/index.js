// The Iterator pattern allows clients to effectively loop over a collection of objects

// A common programming task is to traverse and manipulate a collection of objects. These collections may be stored as an array or perhaps something more complex, such as a tree or graph structure. In addition, you may need to access the items in the collection in a certain order, such as, front to back, back to front, depth first (as in tree searches), skip evenly numbered objects, etc.

// The Iterator design pattern solves this problem by separating the collection of objects from the traversal of these objects by implementing a specialized iterator.

// Today, many languages have Iterators built-in by supporting 'for-each'-type constructs and IEnumerable and IEnumerator interfaces. However, JavaScript only supports basic looping in the form of for, for-in, while, and do while statements.

// The Iterator pattern allows JavaScript developers to design looping constructs that are far more flexible and sophisticated.


// Diagram
// Diagram JavaScript Iterator Design Pattern

// Participants
// The objects participating in this pattern are:

// Client -- In sample code: the run() function
// references and invokes Iterator with collection of objects
// Iterator -- In sample code: Iterator
// implements iterator interface with methods first(), next(), etc
// keeps track of current position when traversing collection
// Items -- In sample code: Items
// individual objects of the collection being traversed

// Sample code in JavaScript
// The Iterator object maintains a reference to the collection and the current position. It also implements the 'standard' Iterator interface with methods like: first, next, hasNext, reset, and each.

// Two looping methods are used: a built-in for loop and a newly created each method. The for loop uses the first, hasNext, and next methods to control the iteration. The each method does internally exactly the same (i.e. runs a for loop), but to the client the syntax has been greatly simplified.

// The log function is a helper which collects and displays results.

var Iterator = function(items) {
    this.index = 0;
    this.items = items;
}
 
Iterator.prototype = {
    first: function() {
        this.reset();
        return this.next();
    },
    next: function() {
        return this.items[this.index++];
    },
    hasNext: function() {
        return this.index <= this.items.length;
    },
    reset: function() {
        this.index = 0;
    },
    each: function(callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
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
    var items = ["one", 2, "circle", true, "Applepie"];
    var iter = new Iterator(items);
 
    // using for loop
 
    for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
        log.add(item);
    }
    log.add("");
 
    // using Iterator's each method
 
    iter.each(function(item) {
        log.add(item);
    });
 
    log.show();
}
run()