//class can have a constructor method accessor or property
// classes are new js ES6 way of writing functional constructor
class Person {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
    fullName(){
        return this.name + " " + this.lastName
    }
}
let user1 = new Person("raj", 'dandyal')
console.log(user1.name)
console.log(user1.lastName)
console.log(user1.fullName())


