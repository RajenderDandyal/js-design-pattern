class CourseGroup{
    constructor(title, composite=[]){
        this.title = title;
        this.composite = composite;
    }
    print(){
        console.log(`***${this.title}***`)
        this.composite.forEach(course=>{
            course.print()
        })
    }
    totalPrice(){
        console.log(`***${this.title}***`)
        let totalPrice = 0;
        this.composite.forEach(course=>{
            totalPrice += +course.totalPrice()
        })
        console.log("totalPrice", +totalPrice)
        return +totalPrice;     
    }
}
module.exports = CourseGroup;