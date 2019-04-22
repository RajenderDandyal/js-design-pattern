const coach = require('../../constructor_design_pattern/factory/withClass/coach');

// without inheriting we simply modify the base object properties,
class Hobby {
    constructor(baseObj){
        this.name = baseObj.name + "ender dandyal";
        this.profession = "Sr."+baseObj.profession.toUpperCase();
        this.salary = '$'+baseObj.salary;
    }
}

let updatedCoach = new Hobby(new coach('raj', 'developer', '250000'), "cricket")

console.log(updatedCoach.name,updatedCoach.profession, updatedCoach.salary)


