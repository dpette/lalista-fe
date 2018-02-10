import { Component, OnInit } from '@angular/core';

import { Word } from './word.model';
import { WordsService } from './words.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  words: Word[];

  wordsUpdated: Subscription;

  constructor(private wordsService: WordsService) { }

  ngOnInit() {
    this.words = this.wordsService.getWords();

    this.wordsUpdated = this.wordsService.wordsFetched.subscribe(
      (words: Word[]) => {
        this.words = words;
      }
    );
  }

  onSubmit(name: HTMLInputElement) {
    if (name.value !== '') {
      this.wordsService.add(new Word(name.value));
      name.value = '';
    }
  }

  onDelete(i) {
    this.wordsService.delete(i);
  }

}