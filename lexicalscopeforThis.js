// LEXICALSCOPEFORTHIS
//this ->use :when create obj and use its prop in itself
let data={
  list:'friend' ,
  names:['bruce','peter','sam'] ,
  getfriend:function(){
    let that=this.list;
    this.names.map(function(item){
      console.warn(that, item);
    })
  }
}
data.getfriend();
