
/*
let userInput=-5;

    if(userInput!==0){
        
        if(userInput>0){
  userInput = userInput * userInput;
            console.log(userInput);
        }
  else(console.log('negative value'));}

else (console.log('N=0'));//start-here
  //Your code goes here … replace the below line with your code logic 

  //end-here*/

  /*var v = [4,5];
  var g = [4,5];
  console.log(v===g)*/

/*let x = 5
  console.log(!!x);
 let b = {
  x:1, 
  y:2
 } 
 console.log(b.toString())*/


 /*let a = "23 1";
 b = a.split(" ");
 if(b[0]>b[1]){
   console.log(b[1]);
 }
else(console.log(b[0]))*/
/*let ui = 2
if(ui> 0 ){
  let read = function (ui){
    let c = [31,28,31,30,31,30,31,31,30,31,31,31];
       let b = [1,2,3,4,5,6,7,8,9,10,11,12];
       if(ui<13) {

    for (const d of b){
    if(d==ui){
      let f = ui-1 ;
     return (c[f])}}}
    
     else {
       return "error"
     } 
  }//start-here
console.log(read(ui)) //Your code goes here … replace the below line with your code logic 
}
else (console.log('Error'))*/

/*var n = 17;
binary_string = n.toString(10); 
console.log(binary_string )*/
 
/*let w = (5+4 )* 4;
console.log(w)*/
/*
var o = { x : 1 };
var p = null;
console.log(o && o.x); // => 1: o is truthy, so return value of o.x
console.log (p && p.x); // => null: p is falsy, so return it and don't evaluate p.x
*/
/*let max_width;
var max = max_width || preferences.max_width || 500;
console.log(max)*/


/*var geval = eval; // Using another name does a global eval
var x = "global";
var y = "global"; // Two global variables
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


/*let i = 0;
let a = []
if(u !== 0){
do {
 i += 1;
 a.push((9*i));
} while (i <= u);
let c = a.join(" ")//start-here
 //Your code goes here … replace the below line with your code logic 

 console.log(c);}
 else(console.log('NULL'))*/



 
/* function smallTobig(numbers) {

 let A_B = []
      for(let i = 0; i < numbers.length; i++) {
       for(let j = i; j < numbers.length; j++) {
          if (numbers[i] > numbers[j]) {
              let temp = numbers[i];
              numbers[i] = numbers[j];
              numbers[j] = temp;
          }
      }
      A_B.push(numbers[i])
  }
  return A_B
  }
  let a = [5,2,1,4]
  console.log(smallTobig(a)); 
  console.log(smallTobig([999, 5, 0, 1, 4, 998])); 
  console.log(smallTobig([15, 32, 11, 14]));
  console.log(smallTobig([5, 4, 3, 2, 1, 0]));
  console.log(smallTobig([123, 321, 143, 313]));
  console.log(a)
*/


/*var o = { x : 2 };
var p = null;
console.log(o && o.x); // => 1: o is truthy, so return value of o.x
p && p.x; // => null: p is falsy, so return it and don't evaluate p.x
let x = 0, y = 0;
console.log(x==0 && o.x)
*/

// hcf

/*let u = "25 50"
u = u.split(" ");
   var b = [];
     for(var n = 1;n<=u[0];n++){
         
          
         if( u[0] % n == 0){

             b.push(n);   
            
         }
 
        }
       
        b = b.reverse();
         console.log(b);
          var c = [];
        for(var m = 1;m<=u[1];++m){
         
         if( u[1] % m == 0){ 
           c.push(m)
             
         }}
         c = c.reverse(); 
         console.log(c);
        
      result: for(let i = 0; i < b.length; i++) {
       for(let j = 0; j < c.length; j++){
           if(b[i]==c[j]){ 
             console.log(b[i]);
               break result;
           } }}*/



/*

           
   var u = '12 9 6 8 8 12 5 5 4 8 9 2 2 1'
  var  b= u.split(' ')
  console.log(b[13])
  //var b = [12,9,6,8,8,12,5,5,4,8,9,2,2,1];
     let a = [];
   let o = {};
   b.forEach(c =>{
    if(o[c]){
      o[c]++
    }
    else(o[c] = 1)
      
  })
  //console.log(o)
   
   
   let g = Object.entries(o).sort((a, b) => a[1]-(b[1]));
   let y = Object.fromEntries(g);
   let d = Object.keys(y).join(' ');
      console.log(g); */
      //for(var i )

/*var y = [['5',6],['8',3],['2',4]];
var d = [];
var i; var j;
      for(i=0,j=0;i<y.length;i++){
        let k = y[i][j];
        d.push(k);
    }
console.log(d)*/

/*let b = 5;
let s =  '5'.repeat(b)
console.log(s)
*/

function trial(){
  
}