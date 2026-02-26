class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  getName() {
    return this.name;
  }
}

class Rhino extends Animal {
  constructor() {
    super("Rhino");
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

export default function classPractice() {
  let animal = new Animal("Goat");
  const rhino = new Rhino();
  const employee = new Employee("Bob");
  console.log();
  console.log();
  animal = rhino;
}
