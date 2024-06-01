                                               // <----------------- ARRAY METHODS ------------>
// ARRAY CONTAION DIFFERENT DATA TYPES 
// let arr=[1,"34",{},[3,4],null]
// console.log(typeof arr)

// <----------Homogeneous data structures AND Heterogeneous data structure ----------->
// Homogeneous data structures are where each item is of the same data type.
// In memory this would an array of data items. On mass storage this would be file where every record is the same in format.
// Heterogeneous data structure is where the different elements of the structure are a different data type and size.

// <---------------      ---------------------->

//. Booleans are returned as-is.
//.undefined turns into false.
//.null turns into false.
//.0, -0, and NaN turn into false; other numbers turn into true.
//. 0n turns into false; other BigInts turn into true.
// .The empty string "" turns into false; other strings turn into true.
//. Symbols turn into true.
//. All objects become true.

    //  <--------      ------------------>
    
    // Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):

        // if (true)
        // if ({})
        // if ([])
        // if (42)
        // if ("0")
        // if ("false")
        // if (new Date())
        // if (-42)
        // if (12n)
        // if (3.14)
        // if (-3.14)
        // if (Infinity)
        // if (-Infinity)
        

// <---------------      ---------------------->

// In array the different elements of the structure are a different data type and size.
//  it will give the typeof aaray is "OBJECT"

// EXAMPLE
// let arr=[1,"34",{},[3,4],null]
// console.log(typeof arr)

// WHEN WE CHECK THE TYPE OF ARRAY WE JUST USE ONE METHOD IS (Array.isArray()) .IT WILL GIVEN IN [BOOLEAN] VALUE.
// EXAMPLE
// let arr=[1,"34",{},[3,4],null]
// let t ={name:"rahul"}
// let p = null;
// console.log(Array.isArray(arr))
// console.log(typeof (arr),typeof(p))

                                      // <----------------- ARRAY BULITS METHODS STARTS------------>

    //   1.PUSH METHOD=  IT IS USED TO ADD THE ELEMENT END OF THE ARRAY     arr.push("value pass")                         
    // EXAMPLE
    // let arr=[1,2,3,4,5]

    // arr.push(6)
    // console.log(arr)

  // 2.UNSHIFT METHOD= ADD THE VALUE IN BEGIING OF THE ARRAY  arr.unshift("valuepass")
 // EXAMPLE
  //  let arr=[1,2,3,4,5]

  //   arr.unshift(0)
  //   console.log(arr)

  // 3.POP METHOD = IT USED TO DELETE THE ElEMENT AT THE LAST INDEX OF THE ARRAY   arr.pop ("NO value pass")
  // EXAMPLE
  //a. let arr=[1,2,3,4,5]

  //   arr.pop()
  //   console.log(arr)

  //b. let arr=[1,2,3,4,5]

  //   let t=arr.pop()
  //   console.log(arr,t)  // IN THUIS (T WILL BE RETURN THE VALUE OF LAST ELEMNT OF INDEX WHICH WE HAVE POP THE ELEMENT)



  // 4.SHIFT METHOD=IT USED TO DELETE THE ElEMENT AT THE FIRST INDEX OF THE ARRAY   arr.shift("no value pass")
    // EXAMPLE
    // let arr=[1,2,3,4,5]

    // arr.shift()
    // console.log(arr)

    // 5.CONCAT METHOD = IT USED TO MERGE THE ARRAY TWO OR MORE THAN TWO ARRAY.  arr.concat("pass the variable which we want to merge")
    // EXAMPLE

    // let arr=[1,2,3]
    // let b =[4,5,6]
    // let c=[7,8,9]
    // let d=arr.concat(b,c)
    // console.log(d)

    // 6. SLICE METHOD = IT IS USED CREATED NEW ARRAY AND TO COPY OF THE ARRAY . slice("no pass value and pass index value the value is remove from beginning to end value-1 will be removed") 
    //  EXAMPLE

    // let arr=[1,2,3,4,5]

    // let arr1=arr.slice(2)
    // console.log(arr1,arr.slice(3))
    //single parameter () pass index value the value is remove from beginning to end value-1 will be removed") output=(arr1=[3,4,5] arr=([4,5]))
     
  //  <-------------- SYNTAX ------------>
  // slice()
  // slice(start)
  // slice(start, end)


  // Negative index counts back from the end of the array 
  // let arr=[1,2,3,4,5]

  // let arr1=arr.slice(1,-1)
  // console.log(arr1,arr.slice(2,-1))
  //OUTPUT= [2,3,4] , [3,4]

// <----------- EXAMPLES --------------->

//   const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  
//   // <----INDEX VALUE=[ 0   , 1     ,   2     ,   3   ,     4    ];  ]


// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-4));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison, 'camel', 'duck', 'elephant'];

// 7.INDEXOF() METHOD = The indexOf() method returns the first index at which a given element can be found in an array, or -1 if it is not present. It's like finding the position of a specific item in a grocery list.
// EXAMPLE 
// let fruits = ['apple', 'banana', 'orange'];
// let indexOfBanana = fruits.indexOf('orange');
// console.log(indexOfBanana); // Output: 2

// 8. includes method =The includes() method checks if an array includes a certain element and returns true or false. It's like checking if a specific ingredient exists in a recipe.
//  EXAMPLE 
// let fruits = ['apple', 'banana', 'orange'];
// console.log(fruits.includes('apple')); // Output: true

// 9. JOIN METHODS =The join() method joins all elements of an array into a string, using a specified separator. It's like creating a comma-separated list from a list of items.[AND ITS LIKE A SPREAD OPERATOR BUT IN SPREAD WE CANT COMMA,AND SYMBOL LIST FROM BUT HERE WE CAN DO]
// EXAMPLLE
// let a =[1,2,3,4]
// console.log(a.join('-'))

// 10.REVERSE METHOD=The reverse() method reverses the order of the elements in an array. It's like flipping a deck of cards.
// EXAMPLLE
// let a =[1,2,3,4]
// console.log(a.reverse('-'))


// <--------------- IMPORTANT NOTES FOR PALLINDROMES----------------->
// EXAMPLES
// let a=[1,2,3,4,5]
// b =a.reverse();
// console.log(a.join(""),b.join(""))
// console.log(a==b)

// when we use revserse it modify the original aaray that should we first do before reverse create copy of the array by using slice method.
// let str="karan"
// let a =str.split("")
// console.log(a)
// let b=a.slice()
// console.log(b)
// b.reverse()
// console.log(a,b)
// console.log(a==b)

// 11.SPLICE METHOD=The splice() method changes the contents of an array by removing, replacing, or adding elements. It takes three parameters: the start index, the number of elements to remove, and optional elements to add. It's like modifying a specific portion of an array.

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

// let fruits = ['apple', 'banana', 'orange', 'grape'];
// fruits.splice(2);
// console.log(fruits);

//IMPAORTANT:
// let arr=[11,12,3,4,5,6]
// let t =arr.splice(0,2,100)
// arr=[...arr,...t]
// console.log(arr)

// push add the last==unshift add at the first == splice add any where in the array element

// 
let str =["radar", "hello", "madam", "world", "level"]
let store;
for(let i =0;i<str.length-1;i++){
  if(str.reverse()==str){
   store++
  }
}console.log(store)





