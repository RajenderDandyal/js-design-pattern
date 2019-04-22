// perfect ex of builder patern is mongoose
// User.find().where().populate().exec()

// to make constructor more readable 
//instead of User.update({somthng},true, false, 0, 'a string');
// as this makes it less understanding
// so we use builder pattern as mentioned above

const User = require('./User');

class CreateUser {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    isAdmin(boolean){
        this.admin = boolean; 
        return this;
        // return this means .. simply return this object 
        //so that next method can be called on this
    }
    isOwner(boolean){
        this.owner = boolean;
        console.log(this)
        return this;
    }
    hisSalary(salary){
        this.salary = salary;
        return this;
    }
    hisDesignation(designation){
        this.designation = designation || 'guest';
        return this 
    }
    build(){
        return new User(this)// this means this class as an object
    }
}
module.exports = CreateUser;