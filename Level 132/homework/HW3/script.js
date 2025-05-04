class dog {
  constructor(name) {
    this.name = name
  }
  
  bark() {
    console.log("woof!")
  }
}

let mydog = new dog("buddy")

console.log("dog's name:", mydog.name)
