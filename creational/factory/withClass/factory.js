const coach = require('./coach');
const student = require('./student');

let Factory = (type, name, age, profession, salary, stream )=>{
    if(type === "coach"){
        return new coach(name,profession,salary)
    }
    if(type === "student"){
        return new student(name, stream,age)
    }
}
module.exports = Factory