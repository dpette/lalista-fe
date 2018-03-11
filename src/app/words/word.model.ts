export interface WordJSON {
  id: number;
  name: string;
}

export class Word  {
  id: number;

  constructor(public name: string) {
  }

  static fromJSON(wordJSON: WordJSON) {
    const word = new Word(wordJSON.name);
    word.id = wordJSON.id;
    return word;
  }
}
