class dog {
  constructor(name) {
    this.name = name
  }
  
  bark() {
    console.log("woof!")
  }
}

let mydog = new dog("buddy")

console.log("calling the bark method:")
mydog.bark()
