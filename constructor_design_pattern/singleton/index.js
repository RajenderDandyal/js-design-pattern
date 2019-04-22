// singleton doesn't allow us to creat new instance of same use/property more-than once
// ex if a user has already bought a course then ,.. show .. got to course 
// otherwise show buy course

let singleton = (()=>{
    let obj;
    let createCourse =()=>{
        obj = new Object('javaScript')
        return obj
    };

    if(!obj){
        return createCourse()
    }
    return obj

})()

let buyFirstTime = singleton;
let buySecondTime = singleton;

if(buyFirstTime === buySecondTime){
    console.log('Go to course',JSON.stringify(buyFirstTime))
}else{
    console.log('buy course')
}