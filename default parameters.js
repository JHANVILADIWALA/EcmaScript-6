//used to handle when parameters are not passed in fn
function someval(){
  return "last";
}
function add(a,b="middle",c=someval()){
  return a +" "+b+c;
}
console.warn(add("first"));
//can pass functions,numbers etc. in default parameters

// function main(a,b=main()){
//   return a+b;
// }
// main();
//recursion with no base case
