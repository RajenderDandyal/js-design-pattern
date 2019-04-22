// Composite pattern
// Group of items or trees
// Tree structures of objects
// Class hierarchies with primitive and obj
// Any level of complexity

//item(leaves)
//const FirstObject = new Item('one item');
//const SecondObject = new Item('Second Item');
//const ThirdObject = new Item('third item');

// sub-tree
//const GroupOfObjects = new TreeItems('Group', [FirstObject, SecondObject]);
//tree
//const Tree = new TreeItems('Tree', [GroupOfObjects, ThirdObject]);

const Course = require('./Course');
const CourseGroup = require('./CourseGroup');

// web
const js = new Course('js', 10);
const css = new Course('css', 8);
const html = new Course('html', 7);

// design
const photoshop = new Course('photoshop', 12);
const zeplin = new Course('zeplin', 11);

// backend
const mongodb = new Course('mongodb', 12);
const nodejs = new Course('nodejs', 16);
const mongoose = new Course('mongoose', 15);

//web group
const webGroup = new CourseGroup('web dev',[js,css,html]);
webGroup.print();
webGroup.totalPrice();

// design group
const designGroup = new CourseGroup('design Ui/Ux', [photoshop, zeplin]);
designGroup.print();
designGroup.totalPrice();
// backend group
const backendGroup = new CourseGroup('backend dev', [mongodb, nodejs, mongoose]);
backendGroup.print();
backendGroup.totalPrice();

const fullStackGroup = new CourseGroup('fullStack', [webGroup, designGroup, backendGroup]);
fullStackGroup.print();
fullStackGroup.totalPrice();




