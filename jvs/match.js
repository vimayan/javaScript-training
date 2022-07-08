/*var pattern = /Java/g;
var text = "JavaScript is more fun than Java!";
var result;
while((result = pattern.exec(text)) != null) {
 console.log("Matched '" + result[0] + "'" +
 " at position " + result.index +
 "; next search begins at " + pattern.lastIndex);
}
*/

function range(min, max) {
    for(let i = Math.ceil(min); i <= max; i++) {yield i};
   }
   // Invoke the generator function to obtain a generator, then iterate it.
   for(let n in range(3,8)) console.log(n); 