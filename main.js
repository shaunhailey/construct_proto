//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog(hungry) {
  this.status = 'normal'
  this.color = 'black'
  this.hungry = hungry
}

const sadie = new Dog(false)
const moonshine = new Dog(true)
const atticus = new Dog()

// Instances of Dog
// Needed: sadie, moonshine, atticus
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/
// Human Constructor & Prototype
function Human(feed) {
  this.name = name
  this.cool = true
  this.feed = feed
  this.feed = function(dog) {
    dog.hungry = false
  }
}

Human.prototype.pet = function(dog) {
  // do something with the given instance of Dog
  dog.status = 'happy'
}

const mason = new Human()
mason.cool = false

const julia = new Human('Julia')

// Instances of Human
// Needed: mason, julia
