const person = require('./person');


class Student extends person{
    constructor(name, stream, age) {
        super(name)
        this.stream = stream;
        this.age = age;
    }
    toString(){
        return JSON.stringify(this)
    }
}
module.exports = Student;