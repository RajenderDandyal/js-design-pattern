// Definition
// Ensure a class has only one instance and provide a global point of access to it.

// Frequency of use (in JavaScript):high

// Summary
// The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.

// Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.

// Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions. The Module pattern (see our JavaScript + jQuery Design Pattern Framework) is JavaScript's manifestation of the Singleton pattern.

// Several other patterns, such as, Factory, Prototype, and Façade are frequently implemented as Singletons when only one instance is needed.


// Diagram
// Diagram JavaScript Singleton  Design Pattern

// Participants
// The objects participating in this pattern are:

// Singleton -- In sample code: Singleton
// defines getInstance() which returns the unique instance.
// responsible for creating and managing the instance object.

// Sample code in JavaScript
// The Singleton object is implemented as an immediate anonymous function. The function executes immediately by wrapping it in brackets followed by two additional brackets. It is called anonymous because it doesn't have a name.

// The getInstance method is Singleton's gatekeeper. It returns the one and only instance of the object while maintaining a private reference to it which is not accessible to the outside world.

// The getInstance method demonstates another design pattern called Lazy Load. Lazy Load checks if an instance has already been created; if not, it creates one and stores it for future reference. All subsequent calls will receive the stored instance. Lazy loading is a CPU and memory saving technique by creating objects only when absolutely necessary.

// Singleton is a manifestation of a common JavaScript pattern: the Module pattern. Module is the basis to all popular JavaScript libraries and frameworks (jQuery, Backbone, Ember, etc.). To learn how to benefit from Module, Lazy Load and many other JavaScript patterns in your own projects, check out our unique JavaScript + jQuery Design Pattern Framework.

var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
 
    console.log("Same instance? " + (instance1 === instance2));  
}
run()