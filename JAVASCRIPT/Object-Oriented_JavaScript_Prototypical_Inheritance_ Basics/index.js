// function person(name, age) {

//     return {
//         name: name,
//         age: age,

//         printName: function () {
//             console.log(this.name)
//         }


//     }
// }

// let p1 = person("karan",24)
// console.log(p1)


// function Employee(name,age,salary){
//     let obj =person(name,age);

//     obj.salary=salary;

//     obj.printSalary = function(){
//         console.log(this.salary)
//     }
//     return obj
// }


// let e1 =  Employee("Ravi",23,40000)
// console.log(e1)


// PROTOTYPE AND INHERITANCE

// let obj = new Object()
// console.log(obj)

// let array = new Array()
// console.log(array)

// PROTOTYPICAL CHANING

// 1.method
// let obj1 ={
//     name:"karan",
//     age:22,
//     printName:function(){
//         console.log("Hi....")
//     }
// }
// console.log(obj1)

// let obj2 = Object.create(obj1)
// console.log(obj2)

// 2.method Object.setPrototypeof()

// let son ={
//     hair:"curlry"
// }
// let father = {
//     height:"taller"
// }
// Object.setPrototypeOf(son,father)

// let grandfather={
//     skintone:"Brown"
// }
// Object.setPrototypeOf(father,grandfather)
// console.log(son)






























