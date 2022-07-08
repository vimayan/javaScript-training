function invoke(f, start, interval, end) {
    if (!start) start = 0; // Default to 0 ms
    if (arguments.length <= 2) // Single-invocation case
    setTimeout(f, start); // Single invocation after start ms.
    else { // Multiple invocation case
    setTimeout(repeat, start); // Repetitions begin in start ms
    function repeat() { // Invoked by the timeout above
    var h = setInterval(f, interval); // Invoke f every interval ms.
    // And stop invoking after end ms, if end is defined
    if (end) setTimeout(function() { clearInterval(h); }, end);
    }
    }
   }
   
  let f = function (){console.log("hellohi")};
   let start = 10;
   let interval = 2000;
   let end = 50;
   let q = invoke (f,start,end)
   console.log(q)