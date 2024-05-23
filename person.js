console.log(__filename, __dirname)

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greeting() {
    console.log(`This is ${this.name}, I'm ${this.age}.`)
  }
}

module.exports = Person
