const person = require('./person');

class Coach extends person{
    constructor(name, profession, salary){
        super(name)
        this.profession = profession;
        this.salary = salary;
    }
    toString(){
        return JSON.stringify(this)
    }
}
module.exports = Coach