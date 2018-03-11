import { RankingComponent } from './ranking/ranking.component';
import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';

import { PointsComponent } from './points/points.component';
import { NewPointComponent } from './points/new-point/new-point.component';
import { WordsComponent } from './words/words.component';
import { PeopleComponent } from './people/people.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: RankingComponent, pathMatch: 'full' },
  { path: 'new-point', component: NewPointComponent },
  { path: 'points', component: PointsComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'words', component: WordsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
