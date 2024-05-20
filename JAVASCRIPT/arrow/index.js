// <------ SIMPLE ARROW FUNCTION ---------->

// var sayname = (name) => {
//     console.log("hi",name)
//     return "hello"
// }
// console.log(sayname("pavan"))

// <------ SINGLE VALUE RETRUN USING  ARROW FUNCTION ---------->

//  var printdata = () => (5>4)             // IN THIS WE NOT USE CURLY BRACKET ONLY IN SINGLE RETRUN VALUE
//  console.log(printdata())

// <----- CONVERT FUNCTION INTO ARROW FUNCTION ------>
// QUESTION


// <-SOLUTION->   FOR USING ARROW FUNCTION FOR SINGLE RETRUN VALUE
// var say = () => "hi"
// console.log(say()) 

//   <-OR->
//    var say = () => {
//     console.log("hi")
//    }
//    say()

// <--------......------>
//  function user (name,age){
//     console.log(name,age)
//     return name ,age

//  }
//  user("karan",24)


// <-------------CREATING ABOVE FUNCTION  AND DECLARE WITH OBJECT DATA-TYPE --------------->
// function user (name,age){
//         let obj ={
//             name:name,
//             age:age,
//         }
//         console.log(obj)

//      }
//      user("karan",24)


//  <--------- OBJECT SHORTHAND--------------->
// OBJECT SHORTHAND ==>> When my key of object  and parameter of function both are declare with same name ,then we will assign by using theirs key name that is called  "object shorthand".
//  for examples =====>

// function user (name,age){
//     let obj ={
//         name,
//         age,
//     }
//     console.log(obj)

//  }
//  user("karan",24)

//   <------- DEFAULT PARAMETER --------->

//   function user (name,age){                        (name,age =0)
//     console.log(name,age)
//  }
//  user("karan")                                      user("karan",24)


//    <---------REST OPPERATOR--------> =>It will change the argument value in array and we will all the data-types in this 

//   function user (map1,map2,...arr){
//     console.log(map1, map2,arr)
//   }
//   user(1,2,3,4)

//    <--------SPREAD OPPERATOR-------->
//   ----IN FUNCTION----
//    function user(arr){
//         console.log(...arr)
//    }
//    user([1,2,3,4])

//  <---- ADDING TWO ARRAY BY USING SPREAD OPERATOR---->
//  let arr1=[1,2,3]
//  let arr2=[4,5,6]
//  let arr3=[...arr1,...arr2]
//  console.log(arr3)

// <-----MAINUPLATE THE ARRAY BY USING SPREAD OPREATOR--------->

//  let arr1=[1,2,3]
//  let arr2=[...arr1,4,5,6]          //IN (AAR2) 4 , 5 ,6 MAINUPUKATE THE ARRAY 
//  console.log(arr2)

// <--------- USING SPREAD OPERATOR IN OBJECT ------->

//   let obj1 = {name:"karan"}
//   let obj2  ={age:20}
//   let obj3 = {...obj1,...obj2}
//   console.log(obj3)

// <-------- DESTRUCTURING --------->
// Destructuring Assignment is a JavaScript expression that allows to unpack values from arrays, or properties from objects,
// into distinct variables data can be extracted from arrays, objects, nested objects and assigning to variables

// <--------- BASIC SYNTAX FOR DESTRUCTURING IN ARRAY --------->

//   let arr=[1,2,3,4]
//   let [a,b,c,d]=arr;
//   console.log(a,b,c,d)


// <------- DESTRUCTURING ARRAY OF OBJECT ------->

//   let input_type =[
//     {text :'1' ,'data-id':1},
//     {text :'2' ,'data_id':2},
//     {text :'3' ,'data-id':3},
//     {text :'4' ,'data-id':4},
//     {text :'5' ,'data-id':5},
//     {text :'6' ,'data-id':6},
//   ];

//   let[a,b,c,d,e,f] = input_type

//   console.log(a,b,c,d,e,f.text)

// <------- DESTRUCTURING OF OBJECT ------->
// IMPORTANT NOTE: ONE BIG DIFFERECNCE BETWEEN "DESTRUCTURING OF ARRAY" AND "DESTRUCTURING OF OBJECT".
// "IN ARRAY WE D WITH THEIR ORDER [MAPPING VALUE]" AND "IN OBJECT WE DESTRUCTURING WITH THEIR ITS KEY VALUE".

//    let user = {
//     firstName : "vivek",
//     lastName : "karan",
//     age : 38,
//     posts :[
//         {title:'Post 1',comments:10},
//         {title:'Post 1',comments:10},
//     ]
//    }
// <-------- DESTRUCTURING AND GET OUTPUT (COMMENTS:10) --------->
//    let {posts} = user;
//    let [a,b] = posts;
//    let {title,comments} =a;
//    console.log(comments)   

//        <----- OR ------>   
//     <----- DESTRUCTURE IN SINGLE LINE----->

//    let {posts:[a,{comments}]}=user
//    console.log(a.comments)

// <----EXAMPLES  OF NESTED OBJECT----->
// const user = {
//      id :339,
//      name:"jhon",
//      age: 32,
//      subjects:['html' , 'js' , 'css'],
//      education:{
//         degree:{
//             name:'BCA',
//             age:26,
//         }
//      }

// }
//       let {education:{degree:{name}}} = user;
//           console.log(name)


//   <<-----------------         PROBLEM   STATMENT       ------------------>>


//  Q.1. Combining Arrays: Define a function combiningArrays that takes two arrays, 'fruits' and 'vegetables', as parameters. 
//   Create a new array 'groceries' by combining both arrays using the spread operator. 
//   Return the 'groceries' array.

//  const fruits = ["apple", "banana", "orange"];
//   const vegetables = ["carrot", "broccoli", "spinach"];
//   console.log(combiningArrays(fruits, vegetabl));es // Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]

//  SOLUTION
//   const fruits = ["apple", "banana", "orange"];
//   const vegetables = ["carrot", "broccoli", "spinach"];

//   let combiningArray = (fruits,vegetables) => {
//      let groceries = [...fruits,...vegetables];
//      return groceries;
//   }
//   console.log(combiningArray(fruits,vegetables))

// <---------------------       ------------------->

// Q.2. Cloning Objects: Define a function cloningObjects that takes an object 'person' with properties 'name', 'age', and 'address' as a parameter.
//   Create a new object 'personCopy' by cloning the 'person' object using the spread operator.
//   Return the 'personCopy' object.

//Example Invocation:
// const person = { name: "John", age: 30, address: "123 Main St" };
// console.log(cloningObjects(person)); // Output: { name: "John", age: 30, address: "123 Main St" }

// SOLUTION
// let cloningObjects = (person) => {
//     let personcopy ={...person};
//     return personcopy;
// }
// console.log(cloningObjects(person))

// Q.3.Merging Objects: Define a function mergingObjects that takes two objects, 'student' and 'course', as parameters. 
// Create a new object 'studentWithCourse' by merging the properties of both objects using the spread operator.
// Return the 'studentWithCourse' object.
//Example Invocation:

// const student = { name: "Alice", age: 20 };
// const course = { courseName: "Math", teacher: "Mr. Smith" };
// console.log(mergingObjects(student, course)); // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }

// SOLUTION
// const student = { name: "Alice", age: 20 };
// const course = { courseName: "Math", teacher: "Mr. Smith" };

// let mergingObjects = () => {
//     let studentWithCourse = {...student,...course}
//     return studentWithCourse
// }
// console.log(mergingObjects(student, course))


// <-------------------          ---------------->

// Q.4.Combining Nested Arrays: Define a function combiningNestedArrays that takes two arrays, 'array1' and 'array2', as parameters.
// Create a new array 'combinedArray' by combining the nested arrays from 'array1' and 'array2' using the spread operator.
// Return the 'combinedArray' array.
//Example Invocation:

// const array1 = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const array2 = [
//   [7, 8],
//   [9, 10],
//   [11, 12],
// ];
//  // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]

// let combiningNestedArrays = () => {
//     let combinedArray = [...array1,...array2]
//     return combinedArray;
// }
// console.log(combiningNestedArrays(array1, array2))

// <------------------        ----------------------->

// Q.5.Employee Information: Define a function employeeInformation that takes an array of employee objects, 'employees', as a parameter. 
// Extract the name and department of the second employee in the array and assign them to variables 'secondEmployeeName' and 'secondEmployeeDepartment'.
//  Return an object with 'secondEmployeeName' and 'secondEmployeeDepartment'.
// //Example Invocation:

//SOLUTION
// const employees = [
// { name: "John Doe", age: 30, department: "HR", salary: 50000 },
// { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
// { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
// ];

// // console.log(employeeInformation(employees)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }

//  let employeeInformation = () => {
//     let secondEmployeeName = employees[1].name;
//     let secondEmployeeDepartment= employees[1].department;
//     return{secondEmployeeName ,secondEmployeeDepartment}
//  }
//  console.log(employeeInformation(employees))

// <-------------      ----------------->

// Q.6.Average Salary: Define a function averageSalary that takes an array of employee objects, 'employees', as a parameter.
//  Calculate the average salary of all employees using destructuring and a for-of-loop.
//   Return the average salary.
//  //Example Invocation:

// SOLUTION
//    const employees = [
//    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
//    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
//    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
//     ];

//     let averageSalary = (employees) =>{
//         let sum =0;
//         for(let employe of employees){
//             sum+=employe.salary
//         }
//         return sum/employees.length;
//     } 
//   console.log(averageSalary(employees)); // Output: 60000

//  <---------       ----------->

// Q.7.Third Employee Info: Define a function thirdEmployeeInfo that takes an array of employee objects, 'employees', as a parameter. 
// Extract the name, age, and salary of the third employee and assign them to variables 'thirdEmployeeName', 'thirdEmployeeAge', and 'thirdEmployeeSalary'. 
// Calculate a bonus of 10% on the salary. Return a string in the format "Employee: , Age: , Salary: , Bonus: ".
//Example Invocation:

//    const employees = [
//     { name: "John Doe", age: 30, department: "HR", salary: 50000 },
//     { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
//     { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
//     ];

//     // console.log(thirdEmployeeInfo(employees)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"

//     let thirdEmployeeInfo =(employees) => {
//         let thirdEmployeeName= employees[2].name;
//         let thirdEmployeeAge = employees[2].age;
//         let thirdEmployeeSalary= employees[2].salary;
//         let calculatedbonous =  thirdEmployeeSalary/10;
//         return `Employee:${thirdEmployeeName},Age:${thirdEmployeeAge},Salary:${thirdEmployeeSalary},Bonous:${calculatedbonous}`
//     }
//     console.log(thirdEmployeeInfo(employees))

// <------------------------                   ---------------------->

// Destructuring for finding the highest salary.
// Destructuring for swapping values.
// Problem Statements
// Q.8.Highest Paid: Define a function highestPaid that takes an array of employee objects, 'employees', as a parameter.
// Use destructuring to find the employee with the highest salary. Return the employee object with the highest salary.
// Example Invocation:

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

// // // console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

// let highestPaid = (employees) => {
//     let max = 0;
//     let employe;

//     for (let i = 0; i < employees.length; i++) {
//         let {salary} = employees[i]
//         if (salary > max) {
//             max = salary;
//             employe = employees[i]
//         }
//     }
//     return employe;
// }

// console.log(highestPaid(employees));

// <---------- ----------->

// Q.9.Destructuring to Swap: Define a function destructuringToSwap that takes an array of employee objects, 'employees', as a parameter.
// Use destructuring to swap the values of the first and last employees in the array. Return the modified 'employees' array.
// Example Invocation:

// const employees = [
//   { name: "John Doe", age: 30, department: "HR", salary: 50000 },
//   { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
//   { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
// ];

// // console.log(destructuringToSwap(employees)); // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]
   
//   let destructuringToSwap = (employees) => {
    
//     let [first,,last] = employees
//     employees[0] = last
//     employees[employees.length-1] = first
//     return employees

//   }

//   console.log(destructuringToSwap(employees))