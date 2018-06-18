function fiboEvenSum(number) {
    // You can do it!
   var i=[1,2]
  var x=0;
    for(var j=0;i.length<=number;j++){
       var k=i[j]+i[j+1];
           i.push(k);
    }
    for(var k=0;k<=i.length;k++){
        if(i[k]%2===0)
        var x=x+i[k];
    }
    return x;
  }
  
  fiboEvenSum(10);