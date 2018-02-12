import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Word } from './word.model';

@Injectable()
export class WordsService {

  baseUrl = 'http://localhost:3000/words/';

  wordsUpdated = new Subject<Word[]>();

  words = [
    new Word('parole'),
    new Word('cose'),
  ];

  constructor(private http: HttpClient) { }

  getWords(): Word[] {
    this.http.get(this.baseUrl).subscribe(
      (words: Word[]) => {
        this.words = words;
        this.wordsUpdated.next(this.words);
      }
    );

    return this.words;
  }

  add(word: Word) {
    this.http.post(this.baseUrl, {word: word}).subscribe(
      (addedWord: Word) => {
        this.words = [addedWord, ...this.words];
        this.wordsUpdated.next(this.words);
      }
    );
  }

  delete(i) {
    this.http.delete(this.baseUrl + this.words[i].id).subscribe(
      (deletedWord: Word) => {
        this.words.splice(i, 1);
        this.wordsUpdated.next(this.words);
      }
    );
  }

}
