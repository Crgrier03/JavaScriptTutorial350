// I used the mozilla developer docs javascript classes tutorial
// link 
class Person {

    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  
  }
const bob = new Person('Bob');

bob.introduceSelf();

class Animal {

  sleep() {
    console.log('honk shoo honk shoo');
  }

}

const charlie = new Animal();

charlie.sleep();

class Professor extends Person {

  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }

}

class Student extends Person {

  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }


  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }

}

const scott = new Student('Scott', 2);

scott.introduceSelf(); 
scott.canStudyArchery(); 

// scott.#year; 