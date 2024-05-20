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
// // Expected output: Array ["ant", "bison

// 7.INDEXOF() METHOD =