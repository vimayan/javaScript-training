
/*function test(o) {
    var i = 5; // i is defined throughout function
    if (o == 5) {
    var j = 0; // j is defined everywhere, not just block
    for(var k=0;k < 10;k++) {
        console.log(i) // k is defined everywhere, not just loop
  // if(k<10) {console.log(k);}
 // print numbers 0 through 9
    }
   // return
   
 
 //console.log(k); // k is still defined: prints 10
    }
    console.log(k);return('end');
}
   //let b = test(5);
  console.log(test(5))  //console.log(j); // j is defined, but may not be initialized*/
/*
//let alert = 10
//alert ()
let points = [1,2,3  ];
points.dist = function() { // Define a method to compute distance between points
 var p1 = this[0]; // First element of array we're invoked on
 var p2 = this[1]; // Second element of the "this" object
 var a = p2-p1; // Difference in X coordinates
 var b = p2-p1; // Difference in Y coordinates
 return Math.sqrt(a*a + // The Pythagorean theorem
 b*b); // Math.sqrt() computes the square root
}
points.dist()*/

//console.log(points.dist()) ;
/*let sum=function (n,m){  // defining the function
    return n*m             //solving the function
}
let b = sum(4,5)           // assign value to the parameter and pass the value to the function
console.log(b);*/          // calling the funtion via varible b

/*function greet(){
    console.log("helloworld")
}
greet()*/


/*function greet(user){
   // return 'hello'+ user 
   return 'hello ${user}'
}
let user = 'naveen'
//let str = greet(user)
console.log(greet(user))*/
/*
var x=0;
let scope = "global scope"; // A global variable
function checkscope() {
 let scope = "local scope";
 ++x; 
 // A local variable
 console.log(x);
 function nested() {
   for(let i=0 ; i<5;++i){ var scope = ++x;} // A nested scope of local variables
 return scope; // Return the value in scope here
 }
 //console.log(scope)
 return nested();
}
/*{
let v = 5;
var i = 3;

}*/
/*console.log(x);
console.log(checkscope()) // => "nested scope"
*/
/*










//FUNCTION USING DEFFERENT CONSTRUCTOR FOR NEW PARAMETRS//
function Robert(name,fuck,rak){
   this.shi = name;
   this.suc= fuck;
   this.luc = rak
}
let son = new Robert('ass','shit');
let daughter  = new Robert ("bitch","dick");


console.log(daughter);


Robert.prototype.que = 'trial'
console.log(daughter.que);
VM450:10 trial
undefined
Robert.prototype.isPrototypeOf(son)
true
son.__proto__
{que: 'trial', constructor: ƒ}que: "trial"constructor: ƒ Robert(name,fuck,rak)arguments: nullcaller: nulllength: 3name: "Robert"prototype: {que: 'trial', constructor: ƒ}[[FunctionLocation]]: VM450:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2][[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
Robert.prototype
{que: 'trial', constructor: ƒ}que: "trial"constructor: ƒ Robert(name,fuck,rak)arguments: nullcaller: nulllength: 3name: "Robert"prototype: {que: 'trial', constructor: ƒ}[[FunctionLocation]]: VM450:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2][[Prototype]]: Object
Robert.prototype.constructor
ƒ Robert(name,fuck,rak){
   this.shi = name;
   this.suc= fuck;
   this.luc = rak
}

*/






/*
function Peakchu (name,type){
  this.name = name;
  this.type  = type;
  this.running = this.over = false;
}

Peakchu.prototype.speak = "peaka peaka";


var pokemon = new Peakchu( 'peakachu' , 'electric');
pokemon.over = true
console.log(pokemon.over);
//console.log('speak' in pokemon);
//console.log(pokemon.hasOwnProperty('speak'));
//console.log(Peakchu.prototype.isPrototypeOf(pokemon))
*/


/*
let z = [5,6,,10, , 111];
console.log(z)
let q = Array(10);
console.log(q)

*/



/*
function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
     return x * x * x;
  }
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f,numbers);
  console.log(cube) */

 /*if( "café" === "caf\u00e9"){
     console.log('fuck you bitch')
 }*/


//var scope = "global";
/*function f() {
 console.log(scope); // Prints "undefined", not "global"
 var scope = "local"; // Variable initialized here, but defined everywhere
 console.log(scope); // Prints "local"
}
f()
console.log(scope);*/


/*
var o = {x:154,
  y:{z:3}}; // An example object
var a = [o,4,[5,6]]; // An example array that contains the object
o.x // => 1: property x of expression o
o.y.z // => 3: property z of expression o.y
o["x"] // => 1: property x of object o  
a[1] // => 4: element at index 1 of expression a
console.log(a[2][1]) // => 6: element at index 1 of expression a[2]
console.log(a[0].x) // => 1: property x of expression a[0]
*/

//ANONYMOUS FUNCTION
/*let b = (a,b) => a+b;
console.log(b(5,6))
console.log(typeof b)*/

//constructor invocation context differ from method invocation,  When a function is invoked on or through an object, that object is the invocation
//context or this value for the function



//METHOD INVOCATION (  in invocation stndard method like tostring(), 
//if the object property has been by the same fucntion name then it won't 
// takes proto type value but the property expression value instead )

/*Constructor functions do not normally use the return keyword. They typically initialize
the new object and then return implicitly when they reach the end of their body. In this
case, the new object is the value of the constructor invocation expression. If, however,
a constructor explicitly used the return statement to return an object, then that object
becomes the value of the invocation expression. If the constructor uses return with no
value, or if it returns a primitive value, that return value is ignored and the new object
is used as the value of the invocation.*/




/*var calculator = { // An object literal
  operand1: 1,
  operand2: 1,
  add: function() {
  // Note the use of the this keyword to refer to this object.
   this.result = this.operand1 + this.operand2;
   return this.result;
  }
 };
 calculator.add() // A method invocation to compute 1+1.
 console.log(calculator)*/
 //calculator.result // => 2


 /*o["m"](x,y); // Another way to write o.m(x,y).
 a[0](z) // Also a method invocation (assuming a[0] is a function).
 customer.surname.toUpperCase(); // Invoke method on customer.surname
f().m(); // Invoke method m() on return value of f()
*/

/*rect.setSize(width, height);
setRectSize(rect, width, height);*/

// THIS keyword  

//If a nested function is invoked as a method, its
//this value is the object it was invoked on. If a nested function is invoked as a function
//then its this value will be either the global object (non-strict mode) or undefined (strict
//mode)




/*var o = { // An object o.
  m: function() { // Method m of the object.
  var self = this; // Save the this value in a variable.
  console.log(this === o); // Prints "true": this is the object o.
  f(); // Now call the helper function f().
  function f() { // A nested function f
  console.log(this === o); // "false": this is global or undefined
  console.log(self === o); // "true": self is the outer this value.
  }
  }
 };
 o.m(); 
 
/*
let o = [4,3,5,7,1];
 // Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o,  a) {
  if (a === undefined) a = []; // If undefined, use a new array
  for(var property in o) a.push(property);
  return a;
 }
 // This function can be invoked with 1 or 2 arguments:
 var a = getPropertyNames(o); // Get o's properties into a new array
console.log(getPropertyNames(p,a)); // append p's properties to that array
*/


//function max(/* ... */) {
  /*var max = Number.NEGATIVE_INFINITY;
  arguments[4] = 200000;
  // Loop through the arguments, looking for, and remembering, the biggest.
  for(var i = 0; i < arguments.length; i++)
  if (arguments[i] > max) max = arguments[i];
  // Return the biggest
  console.log(max)
  return arguments; 
 }
 var largest = max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6); 
console.log(largest);*/
/*
//Functions can also be assigned to object properties rather than variables. When you
//do this, they’re called methods:
var o = {square: function(x) { return x*x; }}; // An object literal
var y = o.square(16); // y equals 256
//Functions don’t even require names at all, as when they’re assigned to array elements:
var a = [function(x) { return x*x; }, 20]; // An array literal
a[0](a[1]); // => 400
*/

/*
// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can 
// do this assignment before the function declaration.
uniqueInteger.counter = 1;
// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
 return uniqueInteger.counter++; // Increment and return counter property
}
console.log(uniqueInteger());
console.log(uniqueInteger())*/





/*function counter() {
  var n = 0;
  return {
  count: function() { return n++; },
  reset: function() { n = 0; }
  };
 }
 var c = counter(), d = counter(); // Create two counters
 c.count() // => 0
 d.count() // => 0: they count independently
 c.reset() // reset() and count() methods share state
 c.count() // => 0: because we reset c
 d.count() // => 1: d was not reset*/


/*
 // This function returns a function that always returns v
function constfunc(v) { return function() { return v; }; }
// Create an array of constant functions:
var funcs = [];
var i;
for( i = 0; i < 10; i++) funcs[i] = constfunc(i);
// The function at array element 5 returns the value 5.
funcs[5]() // => 5
console.log(funcs[5]())*/

// Return an array of functions that return the values 0-9
/*function Constfuncs() {
  var funcs = [];
  for(var i = 0; i < 10; i++) 
  funcs[i] = function() { return i; };
  return funcs;
 }*/
 /*var funcs = constfuncs();
 console.log(funcs[5]()) // What does this return?
 console.log(constfuncs.valueOf())*/

 //var funcs = new Constfuncs;
 //console.log(funcs[5]())
 
/*****ARGUMENT CONTROLLER *******/

// This function uses arguments.callee, so it won't work in strict mode.
/*function check(args) {
  var actual = args.length; // The actual number of arguments
  var expected = args.callee.length; // The expected number of arguments
  if (actual !== expected) // Throw an exception if they differ.
  throw Error("Expected " + expected + "args; got " + actual);
 }
 function f(x, y, z) {
  check(arguments); // Check that the actual # of args matches expected #.
  return x + y + z; // Now do the rest of the function normally.
 }
console.log(f('5','4','6')) */


/*function f(x, y, z) {
  check(arguments); // Check that the actual # of args matches expected #.
  return x + y + z; // Now do the rest of the function normally.
 }
console.log(f('5','4','6')) */


/*let o = {
  a: 6,
  b: 5
}

function f(){
  return a*b
}

console.log(f.call(o))*/

/*
var factorial = function(x) {
  if (x <= 1) return 1;
  return x * arguments.callee(x-1);// the calle represents the current
  // running param or no.of defined param 
 };
console.log(factorial(3))
*/

/*
// bind()
//function f(y) { return this.x + y; } // This function needs to be bound
var o = { x : 1 }; // An object we'll bind to
//var g = f.bind(o); // Calling g(x) invokes o.f(x)
//g(2) // => 3

function f(y,z) { return this.x + y + z }; // Another function that adds
var g = f.bind(o, 2); // Bind this and y
console.log(g(3)) // => 6: this.x is bound to 1, y is bound to 2 and z is 3
*/

// Return a function that expects an array argument and applies f to
// each element, returning the array of return values.
// Contrast this with the map() function from earlier.
/*function mapper(f) {
  return function(a) { return map(a, f); };
 }
 var increment = function(x) { return x+1; };
 var incrementer = mapper(increment);
console.log(incrementer([1,2,3,4]))*/


/*
// Return a memoized version of f.
// It only works if arguments to f all have distinct string representations.
function memoize(f) {
  var cache = {}; // Value cache stored in the closure.
  return function() {
  // Create a string version of the arguments to use as a cache key.
  var key = arguments.length + Array.prototype.join.call(arguments);
 
  if (key in cache) return cache[key];
 else console.log(cache[key] = f.apply(this, arguments));
 return key
  }; 
 }
 
// Return the Greatest Common Divisor of two integers, using the Euclidian
// algorithm: http://en.wikipedia.org/wiki/Euclidean_algorithm
function gcd(a,b) { // Type checking for a and b has been omitted
  let i = 0;
  var t; // Temporary variable for swapping values
  if (a < b) t=b, b=a, a=t; // Ensure that a >= b
  while(b != 0) {t=b;
    i++;
    //console.log('b'+'='+ t)
    //console.log(i);
     b = a%b;
     //console.log('t'+'=' + t)
      a=t
    }; // This is Euclid's algorithm for GCD
  return a;
 }
 var gcdmemo = memoize(gcd);
 console.log(gcdmemo(85, 187)) // => 17
// console.log(gcd(50, 183))
*/

/*
var scope = "global scope"; // A global variable
function checkscope() {
 var scope = "local scope"; // A local variable
 function f() { return scope; } // Return the value in scope here
 return f;
}
console.log(checkscope()) // What does this return?
*/





/*

// Define an extend function that copies the properties of its second and 
// subsequent arguments onto its first argument.
// We work around an IE bug here: in many versions of IE, the for/in loop
// won't enumerate an enumerable property of o if the prototype of o has 
// a nonenumerable property by the same name. This means that properties
// like toString are not handled correctly unless we explicitly check for them.
var extend = (function() { // Assign the return value of this function 
  // First check for the presence of the bug before patching it.

  for(var p in {toString:null}) {
  // If we get here, then the for/in loop works correctly and we return
  // a simple version of the extend() function
  return function extend(o) {
 
  for(var i = 1; i < arguments.length; i++) {
  var source = arguments[i];
  for(var prop in source) o[prop] = source[prop];
  }
  return o;
  };
  }
  // If we get here, it means that the for/in loop did not enumerate
  // the toString property of the test object. So return a version
  // of the extend() function that explicitly tests for the nonenumerable
  // properties of Object.prototype.
  return function patched_extend(o) {
  for(var i = 1; i < arguments.length; i++) {
  var source = arguments[i];
  // Copy all the enumerable properties
  for(var prop in source) o[prop] = source[prop];
  // And now check the special-case properties
  for(var j = 0; j < protoprops.length; j++) {
  prop = protoprops[j];
  if (source.hasOwnProperty(prop)) o[prop] = source[prop];
  }
  }
  return o;
  };
  // This is the list of special-case properties we check for
  
 }());
 var protoprops = ["toString", "valueOf", "constructor", "hasOwnProperty",
  "isPrototypeOf", "propertyIsEnumerable","toLocaleString"];

 var o = { x: 1 }
/*o.x !== undefined; // true: o has a property x
6.4 Testing Properties | 125
Core JavaScript
o.y !== undefined; // false: o doesn't have a property y
o.toString !== undefined; // true: o inherits a toString property

console.log()
*/




/*function f(a,b){
  return a*b
}
let a = 5;
let b = 6;
console.log(f())*/



/*
function patched_extend(a,b,c,d,) {
  let o = [];
  for(var i = 0; i < arguments.length; i++) {
  var source = arguments[i];;
  //console.log(source)
  // Copy all the enumerable properties
  for(var prop indexOf source) o[prop] = source[prop];
  // And now check the special-case properties
 // console.log(o)
  for(var j = 0; j < protoprops.length; j++) {
  prop = protoprops[j];
  if (source.hasOwnProperty(prop)) o[prop] = source[prop];
  //console.log(o)
  }
  }
 return o;
  };

   let a = {};
  let b = [];
  let d = 5;
  let c = 'hello'
 
    //var z = 'str';
  var protoprops = ["toString", "valueOf", "constructor", "hasOwnProperty",
  "isPrototypeOf", "propertyIsEnumerable","toLocaleString"];
  console.log(patched_extend(a,b,c,d))

*/
/*
 // function dark (f,t) {  this.f = f; this.t = t; };
 function factorial(n) { // A function to compute factorials
  if (n <= 1) return n;
  else return n*factorial(n-1);
 }
 document.write("<table>"); // Begin an HTML table
 document.write("<tr><th>n</th><th>n!</th></tr>"); // Output table header
 for(var i = 1; i <= 10; i++) { // Output 10 rows
  document.write("<tr><td>" + i + "</td><td>" + factorial(i) + "</td></tr>");
 }
 document.write("</table>"); // End the table
 document.write("Generated at " + new Date()); // Output a timestamp

 let b = factorial()
 console.log(b) */

/*
 //function urlArgs() {
  var args = {}; // Start with an empty object
  //var query = location.search.substring(1); // Get query string, minus '?'
  let query ="v=abP2q8eEXWg&list=PLTo9PCskHpbG3SnSU00mAWMPThQeKvG2I1";
  var pairs = query.split("&"); // Split at ampersands
  console.log(pairs)
 for(var i = 0; i < pairs.length; i++) { // For each fragment
  var pos = pairs[i].indexOf('='); // Look for "name=value"
 if (pos == -1) continue; // If not found, skip it
  var name = pairs[i].substring(0,pos); // Extract the name
  var value = pairs[i].substring(pos+1); // Extract the value
 // value = decodeURIComponent(value); // Decode the value
  args[name] = value; // Store as a property
  }
  console.log(args); // Return the parsed arguments
 */
 

/*
 
let r;
var over;
over = 4;
console.log(over)
r=over=5;
    console.log(over)

*/
/*
// CALL APPLY BIND

var name = {
  firstName: 'villavan',
  lastName: 'vimal',
 
}

var name2 = {
  firstName: 'vimayan',
  lastName: 'fool'
}

let fullName = function (){return this.firstName +' '+this.lastName};
let trial = fullName.call(name);
console.log(trial);
let trial2 = fullName.apply(name2);
console.log(trial2);
let fullName1 = function (hometown){return this.firstName +' '+this.lastName +' '+ hometown;};

let trial3 = fullName1.bind(name);
console.log(trial3('gkpuram'))
*/


   /*CALL*/
/*
   var a = {"0":"a", "1":"b", "2":"c", length:3}; // An array-like object
   let b =Array.prototype.join.call(a, "+"); // => "a+b+c";

*/


/*
// this wont work
function _paddle(c){
  let x = c;
  var paddle;   
  if(x === 1){

      return ( comp={
          x:150,
          y:150,
      width:18,
      height:80,
      })}
else {
  return (player={
       x:150,
       y:150,
  width:18,
  height:80,})
  }
}
_paddle(1).x= 50;
console.log(_paddle(1).player);
console.log(_paddle(1));

*/
/*

function Paddle(c){
  let x = c;

  x === 1 ? this.x = 150 : this.x = 1250;
  this.y = 700;
  this.width = 18;
  this.height = 80;
    
}
let k = 0;
let i = new Paddle(k);
Paddle.prototype.z = 50;
console.log(i.z);
*/
/*
var Direction = {
  Up:1,
  Down:2,
}

var _paddle = {  
  new: function (side) {  
       return {  
            width: 18,  
            height: 70,  
            x: side === 'left' ? 150 :  - 150,
            speed: 10,
            move:Direction.Up,
           trial: false,
       };  
  }  
}; 

var p  = _paddle.new.call(this,"left");
var c  = _paddle.new.call(this,"right");
p.speed = 20;
p.running = true
p.move = Direction.Down;
console.log(p)
console.log(c)

*/

/*

var player = function() {
  return (jaw = {
      x:150,
      y:140,
 width:18,
 height:80,
 speed:10,}
   )
}

player.y = 60;
console.log(player.y)
console.log(player())
*/

/*
let checkThis = {
  raw : function(){
    this.job = 80;
    return (this.job);
  },
  job:50,
  trial:function(){
    return this.raw();
  },

}

console.log(checkThis.trial());
console.log(checkThis);
*/
/*
let checkThis = {
  raw : 5+5,
  job:{like:this.trial},
  trial:function(){
    return this.raw;
  },

}

//console.log(checkThis.trial);
console.log(checkThis);
*/
/*let checkThis = {
  raw : 5+5,
  job:50,
  trial:function(){
    return 4+5;
  }(),

}

//console.log(checkThis.trial);
console.log(checkThis); */


class Arw {
constructor(ark){
  this.juice = ark

}

printfunction(){
  setTimeout(function(){console.log (this.juice)},1000)
}


printarrow(){
  setTimeout(() =>console.log (this.juice),1000)
}
}
let arw = new Arw ('mango');
console.log(arw);
arw.printarrow()
arw.printfunction()
