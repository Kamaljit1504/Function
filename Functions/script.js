var i=0;
for (i=1; i<10;i++){console.log(i);}
console.log(i);
var b="again";
let a = "hello";
function myFunction(){

  console.log(b);
}
myFunction();

var b="hahaha";
console.log(b);
console.log(a);

// var age =prompt("entre you age");
// if(age % Math.sqrt(age) == 0)
// {
//   console.log("perfect squre");
// }
// else
//   {
//   console.log(" not a perfect squre");
//   }

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}
var str=prompt("enter a string");
camelize(str);
console.log(str);

// function fun() {
//
// }
// var pwd = prompt("enter password");
//
// if(pwd=="hahaha")
// {
//   console.log("log in successful");
// }
// else{
//   while (pwd!="hahaha") {
//     var pwd = prompt("try again");
//   }
// }
