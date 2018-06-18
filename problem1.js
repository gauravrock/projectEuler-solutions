function multiplesOf3and5(number) {
    // Good luck!
    var j=0;
    for(var i=3;i<number;i++){
    if(i%3===0 || i%5===0){
    j=j+i;
    }
    }
    return j;
  }
  
  multiplesOf3and5(1000);