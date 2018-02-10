import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Word } from './word.model';

@Injectable()
export class WordsService {

  wordsFetched = new Subject<Word[]> ();
  baseUrl = 'http://localhost:3000/words';

  words = [
  ];

  constructor(private http: HttpClient) { }

  getWords(): Word[] {
    this.http.get(this.baseUrl).subscribe(
      (words: Word[]) => {
        this.words = words;
        this.wordsFetched.next(words);
      }
    );

    return this.words;
  }

  getWord(i: number): Word {
    return this.words[i];
  }

  add(word: Word) {
    this.http.post(this.baseUrl, { word: word}).subscribe(
      (addedWord: Word) => {
        this.words.push(addedWord);
      }
    );
  }

  delete(i) {
    const word = this.words[i];

    this.http.delete(this.baseUrl + '/' + word.id).subscribe(
      (deletedWord: Word) => {
        this.words.splice(i, 1);
      }
    );
  }

}
