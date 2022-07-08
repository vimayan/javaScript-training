/*let a ='helloworld';
a[3].toUpperCase();
console.log(a);
//a.replace('l','H');
console.log(a.replace('l','H'))*/


/*var s = "test"; // Start with a string value.
s.len = 4; // Set a property on it.
var t = s.len; 
console.log(t)*/

/*var name_1 [ = value_1] [ ,..., name_n [= value_n]];
console.log(name_1)*/
/*

var s = "hello,world" // Start with some text.
s.charAt(0) // => "h": the first character.
s.charAt(s.length-1) // => "d": the last character.
console.log(s.substring(0,3)) // => "ell": the 2nd, 3rd and 4th characters.
s.slice(1,4) // => "ell": same thing
s.slice(-3) // => "rld": last 3 characters
s.indexOf("l") // => 2: position of first letter l.
s.lastIndexOf("l") // => 10: position of last letter l.
s.indexOf("l", 3) 
s.replace("h","i");
s.toUpperCase()
//let s = "1.5"

console.log(s.length)
//console.log(s.valueOf())
/*
var s = String.fromCharCode(97, 101, 108, 108, 111);
console.log(s)*/
/*
f = 'whoX'
var a = f.charCodeAt(3);
console.log(a)


console.log(1<<2)

var q =  String.fromCharCode('X'.charCodeAt(0) + 5 / 2);
console.log(q)
console.log(15||"fuck")
*/


const count_duplicate_characters = function(str) {

    var result = {}

    var arr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g)
    console.log(arr)

    if (arr !== null) {
        arr.forEach(element => {
            result[element[0]] = element.length
        });
    }

    return result

}

let str = 'asxdaxsdwedaxsdeaxsdfouchiusicach';

console.log(count_duplicate_characters(str))

