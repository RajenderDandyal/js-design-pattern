// perfect ex of builder patern is mongoose
// User.find().where().populate().exec()

// to make constructor more readable 
//instead of User.update({somthng},true, false, 0, 'a string');
// as this makes it less understanding
// so we use builder pattern as mentioned above

// so instead of 
//const user1  =  new User('raj', 28, true, false, 123456, 'sde2')

const CreateUser = require('./createUser');

let user1 = new CreateUser('raj', 28).isAdmin(true).isOwner(true).hisSalary(123456).hisDesignation("SDE2").build();
let user2 = new CreateUser('preet', 28).isAdmin(false).isOwner(false).hisSalary(156).hisDesignation("SDE1").build();

user1.toString()
user2.toString()
