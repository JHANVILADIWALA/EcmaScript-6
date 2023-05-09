class fruits{//user defined datatype
  
   name="orange";//no let var etc
  
   constructor(){ //calls immediately as soon as obj is created
     console.log("constructor",this.name);
     //if we want to call its properties inside class itself-->use "this"
   }

   getfruit(){//function
        return "apple"
      }
}
let f1=new fruits; //f1= var of fruits type
console.warn(f1.getfruit());
console.log(f1.name)
