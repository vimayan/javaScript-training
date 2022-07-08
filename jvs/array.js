/*let b = [1,2,3];
b[3.5] = 5;
b[1,7] = 6;
console.log(b)
*/

/*a = [1,2,3]; // Start with a 3-element array.
Object.defineProperty(a, "length", // Make the length property
 {writable: false}); // readonly.
a.length = 0;*/


/*var sum = a.reduce(function(x,y) { return x+y }, 0); // Sum of values
var product = a.reduce(function(x,y) { return x*y }, 1); // Product of values
var max = a.reduce(function(x,y) { return (x>y)?x:y; }); // Largest value
var dim  = a.reduce( (a,b,d ) => a+=b+d,25);
console.log(dim)


a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(x) { return x < 3 }); // [2, 1]
let ev = a.filter(function(x,i) { return x%2==0 }); // [5, 3, 1]
console.log(ev)*/


/*
var a = {"0":"a", "1":"b", "2":"c", length:3}; // An array-like object
let b =Array.prototype.join.call(a, "+"); // => "a+b+c";
console.log(b);
//Array.slice(a, 0)
//Array.map(a, function(x) { return x.toUpperCase(); })
*/

/*
const obj = {
  b: 42,
  a: 42,
  c: 3
};
let d= Object.entries(obj).sort((a,b)=>a[1]-b[1])
console.log(d)
// expected output:
// "a: somestring"
// "b: 42"
*/

/*let s = [4,5,6,7];
if(s.indexOf(5)){console.log(s)}*/
/*
var increment = function(n) {
  return function() {
    n += 1;
    return n;
  }
}(0); // -1 if you want the first increment to return 0

console.log(increment());
*/
/*
var a = [0,0,0,0];
a[3]++;
console.log(a);
this.ball.moveY = [DIRECTION.UP, DIRECTION.DOWN][Math.round(Math.random())]; 
*//*var b = [1,4][3];
console.log(b)*/
/*
var z = {
direction: 5,
sideway:4
}
*/
/*
let q =[10, [5,4,3,2][1,3,2],8,[54,2]]+5*(5+6);
console.log(q)

let w =[5,4,3,2][3]+5*(5+6);
console.log(w)

let p =[5,4,3,2][3];
console.log(p);
let r = 2%4;
console.log(r)
let s = 0111;
console.log(s);
*/

/*[j % 4 |0]*/
/*console.log(14%6)*/
/*
console.log(5.567|0)

var j = [2, 4, 3, 5][5 % 4 |0];
console.log(j)*/
/*
let i = 6;
var j = 6;
console.log(([2, 4, 3, 5][j % 4 |0] + i % 2 * ((j|0) % 4 * 2 + 3) + 2 * (i / 2 |0)) % 6);;
//console.log(17 % 2 * ((17) % 4 * 2 + 3) )

*/

/*
let p =[5,4,3,2];
let g = [].indexOf.call(p,5);
console.log(g)
*/
function trialit (word){

  return 'mo'+ word;
};
function doword(word){
  return 'mo'+ word;
};

const [word,doword] = trialit('jo');
console.log(trialit());

