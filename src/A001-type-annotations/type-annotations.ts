/* eslint-disable */

//arrays
let arrayNumbers: number[] = [1, 2, 3];
let arrayString: string[] = ["string teste", "string"];

//objetos
interface People {
  name: string;
  age: number;
}

interface Animal {
  name: string;
  bark: boolean;
}

let people: People = {
  name: "Matheus",
  age: 20,
};

class Dog implements Animal {
  bark: boolean;
  name: string;

  constructor(name: string, bark: boolean) {
    this.name = name;
    this.bark = bark;
  }

  isBark(): string {
    if (this.bark) {
      return "woof woof";
    } else {
      return "The dog cant bark :(";
    }
  }
}

const fred = new Dog("Fred", false);
console.log(fred.isBark());

function getNameAndAge(object: People): People {
  return object;
}

const peopleInfo = getNameAndAge(people);
console.log(peopleInfo.name);
