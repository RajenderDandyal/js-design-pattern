class User {
    constructor(builder){
        this.name = builder.name || 'guest';
        this.age = builder.age || 0;
        this.admin = builder.admin || false;
        this.owner = builder.owner || false;
        this.salary = builder.salary || 0;
        this.designation = builder.designation || 'guest';
    }
    toString(){
        return console.log(JSON.stringify(this))
    }
}

module.exports = User;