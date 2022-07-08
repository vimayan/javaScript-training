
/*

var empty = {}; // An object with no properties
var point = { x:0, y:0 }; // Two properties
var point2 = { x:point.x, y:point.y+1 }; // More complex values
var book = { 
 "main title": "JavaScript", // Property names include spaces,
 'sub-title': "The Definitive Guide", // and hyphens, so use string literals
 "for": "all audiences", // for is a reserved word, so quote
 author: { // The value of this property is
 firstname: "David", // itself an object. Note that
 surname: "Flanagan" // these property names are unquoted.
 }
};
book.author[point.z] = 50;
console.log(b);
*/

/*let o = [];
console.log(o.valueOf())*/
/*let o = {
    'r':15,
    'h':25,
    'l':45, 
}
let b = o.values(r)

console.log (b)*/

//NEW =====

/*let arr1 = new Array(5,6,7);
console.log(arr1)

let obj1 = new Object(
    {
        f:'name',
        l:'you'
    }
);
//console.log(obj1)
let obj2 = Object.create(obj1)
//console.log(obj2.f)
let obj3 = Object.create(arr1);
console.log(obj3[0])

/*let obj1  = {
    r: 'racoon'
}
let dic = Object(obj1);
dic.l = 5
console.log(obj1)*/


/*var s = {
    "test": 5,
    "class": 4
    
    
};let n = 1, b = true; // A string, number, and boolean value.
var S = new String(s); // A String object
var N = new Number(n); // A Number object
var B = new Boolean(b); // A Boolean object
var O = new Object(s)
console.log(O.test)*/


/*function inherit(p) {
    //if (p == null) throw TypeError(); // p must be a non-null object
    //if (Object.create){ // If Object.create() is defined...
    //return Object.create(p); // then just use it.
    var t = typeof p;
    //console.log(t);// Otherwise do some more type checking
    //if (t !== "object" && t !== "function") throw TypeError();
    function f() {}; // Define a dummy constructor function.
    f.prototype = p; // Set its prototype property to p.
    return new f(); // Use f() to create an "heir" of p.
   }

   let p = {x:5,y:8};
   inherit(p);
  // console.log(q)*/


  /*let gee = {hello: 'world',
hi: 'rookie'

}

let groot = { woo: 'roe'

}

Object.setPrototypeOf(groot,gee);
console.log(gee.woo);
console.log(groot._proto_)*/

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


// GETTER AND SETTER
/*
var p = {
    // x and y are regular read-write data properties.
    x: 1.0,
    y: 1.0,
    // r is a read-write accessor property with getter and setter.
    // Don't forget to put a comma after accessor methods.
    get r() { return Math.sqrt(this.x*this.x + this.y*this.y); },
    set r(newvalue) {
    var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
    var ratio = 5/oldvalue;
    this.x *= ratio;
    this.y *= ratio;
    },
     // theta is a read-only accessor property with getter only.
 get theta() { return Math.atan2(this.y, this.x); }
};
//let newvalue = 5;
//let f = r(5)
p.r = 10;
//console.log(p.__lookupGetter__('r') );
 console.log(p);
*/
//var q = Object.create(p); // Create a new object that inherits getters and setters
//q.x = 25, q.y = 0; // Create q's own data properties
//console.log(q.r); // And use the inherited accessor properties
//console.log(q.theta);


// ATTRIBUTES OBJECT

/*var o = {}; // Start with no properties at all
// Add a nonenumerable data property x with value 1.
Object.defineProperty(o, "x", { value : 1, 
 writable: true,
 enumerable: false,
 configurable: true});
// Check that the property is there but is nonenumerable
console.log(o.x); // => 1
Object.keys(o) // => []
// Now modify the property x so that it is read-only
Object.defineProperty(o, "x", { writable: false });
// Try to change the value of the property
o.x = 2; // Fails silently or throws TypeError in strict mode
o.x // => 1
// The property is still configurable, so we can change its value like this:
Object.defineProperty(o, "x", { value: 2 });
o.x // => 2
// Now change x from a data property to an accessor property
Object.defineProperty(o, "x", { get: function() { return 0; } });
o.x // => 0*/


/*var p = Object.defineProperties({}, {
    x: { value: 1, writable: true, enumerable:true, configurable:true }, 
    y: { value: 1, writable: true, enumerable:true, configurable:true },
    r: { 
    get: function() { return Math.sqrt(this.x*this.x + this.y*this.y) },
    enumerable:true,
    configurable:true
    }
   });

   console.log(p.r)*/
/*let b = {
    x: 5,
    z: 10,
    q: 20
}
//let m = Object.toString.isPrototypeOf(o);
//console.log(m)
console.log(toString(b.keys))*/

/*
let a = 5;
let b = 3;
function ra (a,b) { return a.compareTo(b); }

console.log(ra (a,b))
*/
/*
// Define a generator function for iterating over a range of integers
function range(min, max) {
    for(let i = Math.ceil(min); i <= max; i++) yield (i);
   }
   // Invoke the generator function to obtain a generator, then iterate it.
   for(let n in range(3,8)) console.log(n); // Prints numbers 3 through 8.
   */

 /*  let z = { let v = 0,
    var y = 5,
    z:50

   }*/
/*
   let c;
let b = [ a = 0, c = 0];
c= 4
console.log(c)
*/
/*
let v  = 10;
let z = { v : 0,
    x:5
}
z.v=v;
console.log()*/
/*
let c = {
    ckeck : function(){
        var r = function  (){
            return this.b = 5}();
        
        return r
    }()
}

console.log(c.b)
*/
/*
var player = {
   z: 50,
   q:80,
    y:function(){
        return this.z + this.q
    },
    t:function(){ 
        
        return player.y()}(),

}
console.log(player)
*/

/*
var player = {
    y:5,
   t:function(){ 
       let x;
       return x=this.y},
    

}

console.log(player.t())
*/


let b = [{ x: 15,
    z: 10,
    q: 20},
    {
        a:10,
        b:5,
        c:8,
    },
    {
        q:6,
        g:'pot'

    }];

    b[0].x =  18;
    //b[0].x =  {y:15};
    console.log(b)