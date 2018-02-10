import { WordsService } from './words/words.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { PeopleService } from './people.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PeopleComponent } from './people/people.component';
import { WordsComponent } from './words/words.component';
import { ChartComponent } from './chart/chart.component';
import { NewPointComponent } from './points/new-point/new-point.component';
import { PointsComponent } from './points/points.component';
import { PointsService } from './points/points.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PeopleComponent,
    WordsComponent,
    ChartComponent,
    NewPointComponent,
    PointsComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
  ],
  providers: [PeopleService, WordsService, PointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
