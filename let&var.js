//let is block scoped

let a=10;
let a=20;
console.log(a);
//gives error //no error if diff blocks let

var a=10;
var a=20;
console.log(a); //works             


// HOISTING: declare variable anywhere doesn't matter
//works with var , not let


for(var i=0;i<10;i++){
  setTimeout(()=>{
    console.warn(i)
  },1000)
} //var-global so sets to 10 always
for(let i=0;i<10;i++){
  setTimeout(()=>{
    console.warn(i)
  },1000)
}

