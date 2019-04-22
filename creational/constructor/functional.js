// by convention name starts with capital letter
// connot use arrow function as constructor as they dont have this keyword , 
// then this reffer to outer function or class or object
let ObjConstructor = function (name, lastName) {
    this.name = name
    this.lastName = lastName

    this.fullName = function () {
        return this.name +" " +this.lastName
    }
}
let person = new ObjConstructor("raj", "dandyal")
console.log(person.name)
console.log(person.lastName)
console.log(person.fullName())