// Problem 1: factory function iPhone1

// Write a factory function iPhone1 to create iPhone objects in bulk quantity.

// Define an iPhone1 function that takes the following inputs:
// ASIN
// color
// display
// camera
// The object it creates has the following properties:
// ASIN
// color
// display
// camera
// The object also has the following methods:
// dial(): Returns "tring.. tring..."
// sendMessage(): Returns "Sending message..."
// cameraClick(): Returns "Camera clicked"
// iPhone1 should return an object.

// SOLVING

// function iPhone1(ASIN,color,display,camera){

//     return {
//         ASIN,
//         color,
//         display,
//         camera,
//         dial(){
//             return "tring.. tring ..."
//         },
//         sendMessage(){
//             return "sending message...."
//         },
//         cameraClick(){
//             return "Camera clicked"
//         }
//     };
// }

//  const iphoneObject= [
//     iPhone1("B07XYV7599", "red", "6.1 inch", "12 MP"),
//     iPhone1("B07XYV7599", "black", "6.1 inch", "12 MP"),
//     iPhone1("B07XYV7599", "white", "6 inch", "1 MP"),
// ];
//  console.log(iphoneObject[0].dial())
//  console.log(iphoneObject[1].sendMessage())
//  console.log(iphoneObject[2].cameraClick())


// Problem 2: factory function iPhone2

// Write a factory function iPhone2 to create iPhone objects in bulk quantity.

// Define an iPhone2 function that takes the following inputs:
// ASIN
// color
// display
// camera
// bluetooth
// The object it creates has the following properties:
// ASIN
// color
// display
// camera
// bluetooth
// The object also has the following methods:
// dial(): Returns "tring.. tring..."
// sendMessage(): Returns "Sending message..."
// cameraClick(): Returns "Camera clicked"
// connectBluetooth(): Returns "Bluetooth connected successfully..."
// iPhone2 should return an object.

// SOLVING

// function iPhone2(ASIN, color, display, camera, bluetooth) {
//     return {
//         ASIN,
//         color,
//         display,
//         camera,
//         bluetooth,
//         dial() {
//             return "tring.. tring ..."
//         },
//         sendMessage() {
//             return "sending message...."
//         },
//         cameraClick() {
//             return "Camera clicked"
//         },
//         connectBluetooth(){
//             return "yes"
//         }
//     }
// }
// const iphoneObject= [
//         iPhone2("B07XY7599", "red", "6.1 inch", "12 MP"),
//         iPhone2("B07XYV599", "black", "6.1 inch", "12 MP"),
//         iPhone2("B0XYV7599", "white", "6 inch", "1 MP"),
//         iPhone2("B7XYV7599", "purple", "5.1 inch", "12 MP"),
//     ];
//      console.log(iphoneObject[0].dial())
//      console.log(iphoneObject[1].sendMessage())
//      console.log(iphoneObject[2].cameraClick())
//      console.log(iphoneObject[3].connectBluetooth())