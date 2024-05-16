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
       

    // <-SOLUTION->   FOR USING ARROW FUNCTION FOR SINGLE RETRUNH VALUE
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
    // OBJECT SHORTHAND ==>> When my key and variable both are declare with same name ,then we will assign by using theirs key name that is called  "object shorthand".
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






















    