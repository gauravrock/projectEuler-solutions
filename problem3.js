let number=13195;
let j=[];
for(var i=2;i<=number;i++){
if(number%i===0)
j.push(i);
}
var counter;
for(var k=0;k<j.length;k++){
     for(counter=2;counter<=j[k]/2;counter++){
       if(j[k]%counter===0){
       j[k]=-1;
       }
     }
}
j.sort(function(a, b) {
    return a - b;
  });
  var largest = j[j.length - 1];


console.log(j);
console.log(largest);

