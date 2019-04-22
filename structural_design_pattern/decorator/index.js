const coach = require('../../constructor_design_pattern/factory/withClass/coach');

// without inheriting we simply modify the base object properties,
class updatedCoach {
    constructor(baseObj){
        this.name = baseObj.name + "ender dandyal";
        this.profession = "Sr."+baseObj.profession.toUpperCase();
        this.salary = '$'+baseObj.salary;
    }
}

let Coach = new updatedCoach(new coach('raj', 'developer', '250000'))

console.log(Coach.name, Coach.profession, Coach.salary)


