import { Injectable } from '@angular/core';
import { Word } from './word.model';

@Injectable()
export class WordsService {

  words = [
    new Word('parole'),
    new Word('internet')
  ];

  constructor() { }

  getWords(): Word[] {
    return this.words;
  }

  getWord(i: number): Word {
    return this.words[i];
  }

  add(word: Word) {
    this.words.push(word);
  }

  delete(i) {
    this.words.splice(i, 1);
  }

}
