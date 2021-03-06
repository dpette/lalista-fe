import { NavService } from './../nav/nav.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Word } from './word.model';
import { WordsService } from './words.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit, OnDestroy {

  words: Word[];

  wordsSubscription: Subscription;

  constructor(private wordsService: WordsService, private navService: NavService) { }

  ngOnInit() {
    this.words = this.wordsService.getWords();

    this.navService.setTitle('Parole');
    this.navService.setBasicLevel();

    this.wordsSubscription = this.wordsService.wordsUpdated.subscribe(
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

  onArchive(i) {
    this.wordsService.archive(i);
  }


  ngOnDestroy() {
    this.wordsSubscription.unsubscribe();
  }

}
