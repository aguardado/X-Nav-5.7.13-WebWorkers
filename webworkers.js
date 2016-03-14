self.onmessage = function(event){
console.log("I've received " + event.data);
  var n = 1;
  var np = 0;
  primelist = "";
  search: while(n < parseInt(event.data)){
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    primelist += " " + n;
    np++
    if(np == 100000){
      np = 0;
      self.postMessage(primelist)
      primelist = ""
    }
  }
}


