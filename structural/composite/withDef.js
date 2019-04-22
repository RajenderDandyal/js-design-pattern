// Composite

// Definition
// Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

// Frequency of use (in JavaScript):high

// Summary
// The Composite pattern allows the creation of objects with properties that are primitive items or a collection of objects. Each item in the collection can hold other collections themselves, creating deeply nested structures.

// A tree control is a perfect example of a Composite pattern. The nodes of the tree either contain an individual object (leaf node) or a group of objects (a subtree of nodes).

// All nodes in the Composite pattern share a common set of properties and methods which supports individual objects as well as object collections. This common interface greatly facilitates the design and construction of recursive algorithms that iterate over each object in the Composite collection.


// Diagram
// Diagram JavaScript Composite  Design Pattern

// Participants
// The objects participating in this pattern are:

// Component -- In sample code: Node
// declares the interface for objects in the composition
// Leaf -- In sample code: Node
// represents leaf objects in the composition. A leaf has no children
// Composite -- In sample code: Node
// represents branches (or subtrees) in the composition
// maintains a collection of child components

// Sample code in JavaScript
// In our example a tree structure is created from Node objects. Each node has a name and 4 methods: add, remove, getChild, and hasChildren. The methods are added to Node's prototype. This reduces the memory requirements as these methods are now shared by all nodes. Node is fully recursive and there is no need for separate Component or Leaf objects.

// A small Composite tree is built by adding nodes to parent nodes. Once complete we invoke traverse which iterates over each node in the tree and displays its name and depth (by showing indentation).

// The log function is a helper which collects and displays results.

var Node = function (name) {
    this.children = [];
    this.name = name;
}
 
Node.prototype = {
    add: function (child) {
        this.children.push(child);
    },
 
    remove: function (child) {
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    },
 
    getChild: function (i) {
        return this.children[i];
    },
 
    hasChildren: function () {
        return this.children.length > 0;
    }
}
 
// recursively traverse a (sub)tree
 
function traverse(indent, node) {
    log.add(Array(indent++).join("--") + node.name);
 
    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}
 
// logging helper
 
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();
 
function run() {
    var tree = new Node("root");
    var left = new Node("left")
    var right = new Node("right");
    var leftleft = new Node("leftleft");
    var leftright = new Node("leftright");
    var rightleft = new Node("rightleft");
    var rightright = new Node("rightright");
 
    tree.add(left);
    tree.add(right);
    tree.remove(right);  // note: remove
    tree.add(right);
 
    left.add(leftleft);
    left.add(leftright);
 
    right.add(rightleft);
    right.add(rightright);
 
    traverse(1, tree);
 
    log.show();
}
run()