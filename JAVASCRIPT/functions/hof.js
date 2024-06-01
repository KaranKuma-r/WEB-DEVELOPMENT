// <---------------- ------------------->

// callback function and hof
//    THE FUNCTION WHICH IS PASS IN THE HOF AS ARGUMENTS  IS CALLED (CALLBACK FUNCTION)

// function breakfast(food, time, check) {   // THIS BREAKFAST IS A HOF BECAUSE ANOTHER FUNCTION AS ARGUMENT AND PARAMETER THAT IT`S SELF
//    if (check()) {
//       console.log(`i am eating breakfast ${food} at ${time}`)
//    }
//    else {
//       console.log(`brush first`)
//    }
// }
// function check() {      // THIS CHECK FUNCTION IS CALLBACKFUNCTION BECAUSE IT IS PASS IN THE ANOTHER FUNCTION.
//    return true;
// }
// breakfast("idly", 8, check)


// <-----------  FOREACH HOF       ------------ >
// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// for (let i = 0; i < sweets.length; i++){
//   console.log(sweets[i])
// }

// FOREACH BY ANYNOMUS FUNCTION
// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// sweets.forEach(function(elements,indexValue,WholesweetsArray){
//     console.log(elements,indexValue,WholesweetsArray)
// });


// FOR EACH BY ARROW FUNCTION
// let shapes =[
//    {sides: 1,color:`red`},
//    {sides: 2,color:`orange`},
//    {sides: 3,color:`blue`},
//    {sides: 4,color:`green`},
// ]
//  shapes.forEach(({color}) =>{
//        console.log(color)
// })



// <-----------  MAP HOF   = IT ALWAYS RETURN A NEW ARRAY    ------------ >

// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// sweets.map(function(element){
//     console.log(element)
// })

// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// let newSweets=sweets.map(function(element){
//     return element
// })
//   console.log(newSweets)

// let arr = [1,2,3,4,4,5];
// let newData = arr.map((element)=>{
//    return element**2
// })
// console.log(newData)

// <----------------- FILTER HOF ------------->

//  var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
//  let filterData = sweets.filter((element,i)=>{
//       return element.length  > 8
//    })
//    console.log(filterData,sweets)


// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// let filterData = sweets.filter((element,i)=>{
//      return element == "kova"
//   })
//   console.log(filterData)

// ODD AND EVEN using FILTER METHOD

// let arr = [1, 2, 3, 4, 5];
// let newData = arr.filter((element) => {
//    return element % 2 == 0
// })
// console.log(newData)
 
// let shapes =[
//    {sides: 1,color:`red`},
//    {sides: 2,color:`orange`},
//    {sides: 3,color:`blue`},
//    {sides: 4,color:`green`},
// ]
//  let data=shapes.filter((ele) =>{
//        return ele.color === "green"
// })

// console.log(data)


// <-------------- REDUCE HOF -------------->
 
// ADDING

// let arr = [1, 2, 3, 4, 5];
// let newData = arr.reduce((acc,curr) => {
//    return acc + curr
// },2)
// console.log(newData)

// MULTIPLY

// let arr = [1, 2, 3, 4, 5];
// let newData = arr.reduce((acc,curr) => {
//    return acc *curr
// },1)
// console.log(newData)

//  FREQUENCY IN JS

// let arr = [1,2,1,3,3,3,4,5,4,2]
// let obj={}
// for(let i =0;i<arr.length;i++){
//    if(obj[arr[i]]===undefined){
//       obj[arr[i]]=1
//    }
//    else{
   // obj[arr[i]]++
// }
// }
// console.log(obj)


// FREQUENCY BY REDUCE HOF

// const numbers = [1, 2, 3, 1, 2, 4, 1];

// const frequency = numbers.reduce((acc, curr) => {
//   if (acc[curr]) {
//     acc[curr]++;
//   } else {
//     acc[curr] = 1;
//   }
//   return acc;
// }, {});

// console.log(frequency); // Output: {1: 3, 2: 2, 3: 1, 4: 1}

// <---------- SORT HOF ------------>
// The sort() method will sort the elements alphabetically because no comparison function is provided

// let arr = [1, 2, 3, 5, 4];
// let newData = arr.sort((a,b) => {
//    return a-b
// })

//  console.log(newData)


//  let shapes =[
//       {sides: 1,color:`red`},
//       {sides: 2,color:`orange`},
//       {sides: 6,color:`blue`},
//       {sides: 5,color:`green`},
//    ]
//     shapes.sort((a,b)=>{
//       return a.sides - b.sides
//     })
//     console.log(shapes)


// CHANING

// let arr = [1, 2, 3, 4,5];
// let filter=arr.filter((ele)=>ele%2===0).map((ele)=>ele*2).reduce((acc,curr)=>acc+curr,0)
// console.log(filter)