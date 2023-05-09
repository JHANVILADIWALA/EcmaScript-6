 // methods
//find-> value at first index acc to condn
//findindex-> finds index

/* 
let data=[10,20,7,50,1,100]
let result=data.find(function(item){
     return item<50
})
let result=data.findIndex(function(item){
     return item<7
}) 

let result=data.find((item)=>item<50 && item>10)
console.warn(result)
*/


//array of objects
let data=[
  {id:10 },
  {id:8 },
  {id:50  },
  {id:1  },
  {id:100 },
]
function custom(item){
  return item.id>50
}
let result=data.find(custom)
console.warn(result)
