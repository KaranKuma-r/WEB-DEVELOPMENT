// Implement a constructor function iPhone3 to create iPhone objects with the following properties and methods:

// Properties: ASIN, color, display, camera, bluetooth
// Methods:
// dial(): Returns "tring.. tring..."
// sendMessage(): Returns "Sending message..."
// cameraClick(): Returns "Camera clicked"
// connectBluetooth(): Returns "Bluetooth connected successfully..."
// The iPhone3 constructor function should take parameters for ASIN, color, display, camera, and bluetooth.

// Use the .call() method to initialize the properties of the created objects.

// Ensure that the object created by the constructor function contains the specified properties and methods.

// Problem Statement
// Implement a constructor function iPhone3 that fulfills the requirements mentioned above. Use the .call() method to initialize the properties of the created objects. Ensure that the created objects have the specified properties and methods.

// SOLVING

function iPhone3(ASIN,color,display,camera,bluetooth){
     
    this.ASIN=ASIN;
    this.color =color;
    this.display=display;
    this.camera=camera;
    this.bluetooth= bluetooth;

    this.dial= function(){
        return "tring.. tring..";
    };
    this.sendMessage= function(){
        return "sending message .." ;
    };
    this.cameraClick= function(){
        return "Camera Clicked";
    };
    this.connectBluetooth = function(){
        return "Bluetooth connected successfully...";
    };
}
let iphone3 = {};
iPhone3.call(iphone3, "B09X67JBQV", "grey", 7.8, "2.0 MP", "Bluetooth 5.1");

console.log(iphone3.ASIN); 
console.log(iphone3.color);
console.log(iphone3.display); 
console.log(iphone3.camera);
console.log(iphone3.bluetooth); 

console.log(iphone3.dial());   
console.log(iphone3.sendMessage()); 
console.log(iphone3.cameraClick()); 
console.log(iphone3.connectBluetooth());





