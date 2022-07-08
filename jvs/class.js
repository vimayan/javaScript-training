
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    racoon = {
job : 'setting',
trial: 'getting'
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100
  




  class Arw {
    constructor(ark){
      this.juice = ark
    
    }
    racoon = {
      job : 'setting',
      trial: 'getting'
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





  /*
// This is a factory function that returns a new range object.
function Range(from, to) {
  // Use the inherit() function to create an object that inherits from the
  // prototype object defined below. The prototype object is stored as
  // a property of this function, and defines the shared methods (behavior)
  // for all range objects.
  var r = Object.create(Range); 
  // Store the start and end points (state) of this new range object.
  // These are noninherited properties that are unique to this object.
  r.from = from;
  r.to = to;
  Range.hi = 3;
  let m = Range.isPrototypeOf(r)
console.log(m)
  // Finally return the new object
  return r;
 }
let r = new Range(1,5)
 // This prototype object defines methods inherited by all range objects.
 Range.methods = {
  // Return true if x is in the range, false otherwise

  // This method works for textual and Date ranges as well as numeric.
  includes: function(x) { return this.from <= x && x <= this.to; }(),
  // Invoke f once for each integer in the range.
  // This method works only for numeric ranges.
  foreach: function(f) {
  for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  // Return a string representation of the range
  toString: function() { return "(" + this.from + "..." + this.to + ")"; }
 };
 // Here are example uses of a range object.
 //var r = range(1,5); // Create a range object
 console.log(Range.toString()); // => true: 2 is in the range
 r.methods.foreach(console.log); // Prints 1 2 3
 console.log(r); // Prints (1...3)
 //console.log(r.includes(2))
 */

 

/*
 // range.js: A class representing a range of values. 
// This is a factory function that returns a new range object.
function range(from, to) {
  // Use the inherit() function to create an object that inherits from the
  // prototype object defined below. The prototype object is stored as
  // a property of this function, and defines the shared methods (behavior)
  // for all range objects.
  var r = Object.create(range.hi); 
  // Store the start and end points (state) of this new range object.
  // These are noninherited properties that are unique to this object.
  r.from = from;
  r.to = to;
  // Finally return the new object
  return r;
 }
 // This prototype object defines methods inherited by all range objects.
 range.hi = {
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes: function(x) { return this.from <= x && x <= this.to; },
  // Invoke f once for each integer in the range.
  // This method works only for numeric ranges.
  foreach: function(f) {
  for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  // Return a string representation of the range
  toString: function() { return "(" + this.from + "..." + this.to + ")"; }
 };
 // Here are example uses of a range object.
 var r = range(1,10); // Create a range object
 r.includes(5); // => true: 2 is in the range
 r.foreach(console.log); // Prints 1 2 3
 console.log(r); // Prints (1...3)


console.log ( Object.getOwnPropertyNames(r)) // returns true if r inherits from Range.prototype
 */



/*
 function Range(from, to) {
  // Store the start and end points (state) of this new range object.
  // These are noninherited properties that are unique to this object.
  this.from = from;
  this.to = to;
  
 }
 // All Range objects inherit from this object.
 // Note that the property name must be "prototype" for this to work.
 Range.prototype = {
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes: function(x) { return this.from <= x && x <= this.to; },
  // Invoke f once for each integer in the range.
  // This method works only for numeric ranges.
  foreach: function(f) {
  for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  // Return a string representation of the range
  toString: function() { return "(" + this.from + "..." + this.to + ")"; }
 };
 // Here are example uses of a range object
 var r = new Range(1,3); // Create a range object
 r.includes(2); // => true: 2 is in the range
 r.foreach(console.log); // Prints 1 2 3
 console.log(r); // Prints (1...3)
 
console.log(r)
console.log(Object.getPrototypeOf(Range()))

// CLASS name in above is RANGE, no.of class is different object created by the
//new costructor, instance are the ARGUMENTS, instance method is this.identifier=PARAMETER
//

// wont be a Range prototype unless constructor invocation creates object
*/


// Invoke the function f this many times, passing the iteration number
// For example, to print "hello" 3 times:
// var n = 3;
/*let n = {};
 n.times(function(n) { console.log(n + " hello"); });
Number.prototype.times = function(f, context) {
 var n = Number(this);
 for(var i = 0; i < n; i++) f.call(context, i);
};
*/


/*
function defineClass(constructor, // A function that sets instance properties
 methods, // Instance methods: copied to prototype
 statics) // Class properties: copied to constructor
{
if (methods)
 {
   function extend(constructor, methods){
   for(var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    console.log(source)
    //for(var prop in source) {constructor[prop] = source[prop]};
  }
  */
 /*if (statics) extend(constructor, statics);*/
 /*return constructor;
}
}}
// This is a simple variant of our Range class
var SimpleRange =
 defineClass(function(f,t) { return this.f = f; this.t = t; },
 {
 includes: function(x) { return this.f <= x && x <= this.t;},
 toString: function() { return this.f + "..." + this.t; }
 },
 { upto: function(t) { return new SimpleRange(0, t); } });


  /*function extend(a,b) {
   for(var i = 1; i < arguments.length; i++) {
   var source = arguments[i];
   for(var prop in source) o[prop] = source[prop];
   }*/

   /*let f = 5;
   let t = 10;
   let x = 5;
   console.log (SimpleRange(f,t,x))
*/
/*
   function typeAndValue(x) {
    if (x == null) return ""; // Null and undefined don't have constructors
    switch(x.constructor) {
    case Number: return "Number: " + x; // Works for primitive types
    case String: return "String: '" + x + "'";
    case Date: return "Date: " + x; // And for built-in types
    case RegExp: return "Regexp: " + x;
    case Complex: return "Complex: " + x; // And for user-defined types
    }
   }


 console.log(typeAndValue(5))
 */
/*
 function Set() { // This is the constructor
  this.values = {}; // The properties of this object hold the set
  this.n = 0; // How many values are in the set
  this.add.apply(this, arguments); // All arguments are values to add
 }
 // Add each of the arguments to the set.
 Set.prototype.add = function() {
  for(var i = 0; i < arguments.length; i++) { // For each argument
  var val = arguments[i]; // The value to add to the set
  var str = Set._v2s(val); // Transform it to a string
  if (!this.values.hasOwnProperty(str)) { // If not already in the set
  this.values[str] = val; // Map string to value
  this.n++; // Increase set size
  }
  }
  return this; // Support chained method calls
 };
 // Remove each of the arguments from the set.
 Set.prototype.remove = function() {
  for(var i = 0; i < arguments.length; i++) { // For each argument
  var str = Set._v2s(arguments[i]); // Map to a string
  if (this.values.hasOwnProperty(str)) { // If it is in the set
  delete this.values[str]; // Delete it
  this.n--; // Decrease set size
  }
  }
  return this; // For method chaining
 };
 // Return true if the set contains value; false otherwise.
 Set.prototype.contains = function(value) {
  return this.values.hasOwnProperty(Set._v2s(value));
 };
 // Return the size of the set.
 Set.prototype.size = function() { return this.n; };
 // Call function f on the specified context for each element of the set.
 Set.prototype.foreach = function(f, context) {
  for(var s in this.values) // For each string in the set
  if (this.values.hasOwnProperty(s)) // Ignore inherited properties
  f.call(context, this.values[s]); // Call f on the value
 };
 // This internal function maps any JavaScript value to a unique string.
 Set._v2s = function(val) {
  switch(val) {
  case undefined: return 'u'; // Special primitive
  case null: return 'n'; // values get single-letter
  case true: return 't'; // codes.
  case false: return 'f';
  default: switch(typeof val) {
  case 'number': return '#' + val; // Numbers get # prefix.
  case 'string': return '"' + val; // Strings get " prefix.
  default: return '@' + objectId(val); // Objs and funcs get @
  }
  }
  // For any object, return a string. This function will return a different
  // string for different objects, and will always return the same string
  // if called multiple times for the same object. To do this it creates a
  // property on o. In ES5 the property would be nonenumerable and read-only.

  function objectId(o) {
  var prop = "|**objectid**|"; // Private property name for storing ids
  if (!o.hasOwnProperty(prop)) // If the object has no id
  o[prop] = Set._v2s.next++; // Assign it the next available
  return o[prop]; // Return the id
  }
 };
 Set._v2s.next = 100; // Start assigning object ids at this valu

 */