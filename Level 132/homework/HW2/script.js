class dog {
  constructor(name) {
    this.name = name
  }
  
  bark() {
    console.log("woof!")
  }
}

let mydog = new dog("buddy")

console.log("created a dog instance named buddy")
