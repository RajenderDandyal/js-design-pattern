class Course{
    constructor(name, price) {
        this.price = price;
        this.name = name;
    }
    print(){
        return console.log(this.name)
    }
    totalPrice(){
        return +this.price;
    }
}
module.exports = Course;