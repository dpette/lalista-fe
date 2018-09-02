import { StatsComponent } from './stats/stats.component';
import { PersonComponent } from './people/person/person.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
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
  { path: 'people/:id', component: PersonComponent },
  { path: 'words', component: WordsComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
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
