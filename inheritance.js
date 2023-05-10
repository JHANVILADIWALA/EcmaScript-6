//inheritance
class category {
  dryfruit() {
    return "almond dry fruit"
  }
  pomefruit() {
    return "apple is pome fruit"
  }
}
class fruits extends category {
  constructor() {
    super()
    console.warn("constructor");
  }
  getfruit() {
    return "u got apple"
  }
}
let c1 = new category;
let f1 = new fruits;
console.warn(f1.pomefruit())
console.warn(c1.dryfruit())
//super key->used to call constructor of parent class
//parent cant inherit child prop
