
var o = new Object(); // Create an object
Object.prototype.isPrototypeOf(o) // true: o is an object
Function.prototype.isPrototypeOf(o.toString); // true: toString is a function
Array.prototype.isPrototypeOf([1,2,3]); // true: [1,2,3] is an array
// Here is a way to perform a similar test
(o.constructor == Object); // true: o was created with Object() constructor
(o.toString.constructor == Function); // true: o.toString is a function
// Prototype objects themselves have prototypes. The following call
// returns true, showing that function objects inherit properties
// from Function.prototype and also from Object.prototype.
Object.prototype.isPrototypeOf(Function.prototype);


var o = { x: 1 }
"x" in o; // true: o has an own property "x"
"y" in o; // false: o doesn't have a property "y"
"toString" in o; // true: o inherits a toString property


var o = { x: 1 }
o.hasOwnProperty("x"); // true: o has an own property x
o.hasOwnProperty("y"); // false: o doesn't have a property y
o.hasOwnProperty("toString"); // false: toString is an inherited property








// PROTOTYPE


/*let proto = function(g){
 console.log(this.g + 'world')   // defining the proto object 
}

function Greeting (rem){          // defining the base object with parameter
this.greetings = rem
return this.greetings
}

Greeting.prototype = proto;
let g = new Greeting('fuck');
proto(g);
console.log(g)*/

/*let proto = {
 greet: function (){
     console.log(this.greetings + "world")
 },
 look : 5,
 //duck: console.log(this.greetings + "vimal")
}

function Greeting(ram){
 this.greetings = ram
}

Greeting.prototype = proto ;

let r = new Greeting ("hello");
console.log(r.greet())
//console.log(Greeting.greetings)


let o = Object.create(proto);
o.greetings = "hi";
o.greet();
console.log(o)
var q = {
 greetings: "just"
}

Object.setPrototypeOf(q,proto)
//q.greet()*/

/*function maker(dil,coot,puf){
this.dil = dil;
this.jig = coot;
this.fog = puf;
return this.dil
} 

let q = maker("rak","kooon","dog")
console.log(q)

var myoldobject = {
 rook: 85,
 king : 1,
 queen: 100

}

var mynewobject = Object(myoldobject);
console.log(mynewobject.rook)*/

// OBJECTS INHERITS
/*var unitcircle = { r:1 }; // An object to inherit from
var c = Object.create(unitcircle); // c inherits the property r
c.x = 1; c.y = 1; // c defines two properties of its own
c.r = 2; // c overrides its own property as the value of r
console.log(unitcircle.r) // => 1: the prototype object is not affected*/


/*var unitcircle = { r:1 }; // An object to inherit from
var c = Object(unitcircle); // c inherits the property r
c.x = 1; c.y = 1; // c defines two properties of its own
c.r = 2; // c overrides its inherited property
console.log(c) // => 1: the prototype object is not affected
console.log(unitcircle)
console.log(unitcircle.r)*/