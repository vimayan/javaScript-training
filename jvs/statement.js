
   
/*function greet(x){
    switch(typeof x) {
        case "number": // Convert the number to a hexadecimal integer
        return x.toString(2);
        case 'string': // Return the string enclosed in quotes
        return '"' + x + '"';
        default: // Convert any other type in the usual way
        return String(x);
}}
let x = 15;
let str = greet(x);
console.log(str)*/

/*var o = {x:1, y:3, z:2};
//var a = 'q'; 
var i = 0;
for( b in o ){
  console.log(o[b])
  //a.push(i)

}*/
//console.log(o[b])
/*console.log(o)*/
//console.log(a[1].o)

/*let u = 10;
let i = u;
do{
    //var i = u
    console.log(i);
    i-=1;
}while(i>0);
*/

/*
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);}

*/
  
/*function g(x) {
  var o = -5;
  // If the input argument is invalid, throw an exception!
  if (x < 0) throw new Error("x must not be negative");
  // Otherwise, compute a value and return normally
  for(var f = 1; x > 1; f *= x, x--); */
 /* return f;
 }
//let x = -5;
//let b = factorial(x);
console.log(g(-5))*/




/*var geval = eval; // Using another name does a global eval
var x = "global", y = "global"; // Two global variables
function f() { // This function does a local eval
 var x = "local"; // Define a local variable
 eval("x += 'changed';"); // Direct eval sets local variable
 return x; // Return changed local variable
}
function g() { // This function does a global eval
 var y = "local"; // A local variable
 geval("y += 'changed';"); // Indirect eval sets global variable
 return y; // Return unchanged local variable
}
console.log(f(), x); // Local variable changed: prints "localchanged global": 
console.log(g(), y); // Global variable changed: prints "local globalchanged":*/

let y = 2020;

y%4 === 0 ?console.log("y") : console.log("N")


/*
let includes  =  function(x,f,t) { return f <= x && "fuck you";}
let g = includes(5,4,10);
//let f = 0;
//let t = 10;
console.log(g)
*/