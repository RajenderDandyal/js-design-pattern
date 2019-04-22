// Factory always have sub small factories or sub classes
// factory gives the option to return one sub class only
// factory prevent the modification of constructor of sub classes .. by not exposing them
let Factory = function(){
    this.getItem = function (itemType) {
        if (itemType === "first"){
            return require('./first.js')()
        }
        if (itemType === "second"){
            return require('./second.js')()
        }
        if (itemType === "third"){
            return require('./third.js')()
        }

        return require('./default.js')()
    }
};
let factory = new Factory();
console.log(factory.getItem('first'));
console.log(factory.getItem('second'));
console.log(factory.getItem('third'));
console.log(factory.getItem('default'));