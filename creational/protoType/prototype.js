let ObjConstructor = function (name, lastName) {
    this.name = name
    this.lastName = lastName
}
ObjConstructor.prototype.fullName = function () {
    return this.name +" " +this.lastName
}
let person = new ObjConstructor("raj", "dandyal")
console.log(person.name)
console.log(person.lastName)
console.log(person.fullName())