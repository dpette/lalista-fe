export interface PersonJSON {
  id: number;
  name: string;
}

export class Person {
  id: number;

  constructor(public name: string) {
  }

  static fromJSON(personJSON: PersonJSON): Person {
    const person = new Person(personJSON.name);
    person.id = personJSON.id;
    return person;
  }
}
