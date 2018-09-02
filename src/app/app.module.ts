import { NavService } from './nav/nav.service';
import { CoverImagesService } from './cover-images/cover-images.service';
import { WordsService } from './words/words.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Angular2TokenService } from 'angular2-token';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PeopleService } from './people.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PeopleComponent } from './people/people.component';
import { WordsComponent } from './words/words.component';
import { NewPointComponent } from './points/new-point/new-point.component';
import { PointsComponent } from './points/points.component';
import { PointsService } from './points/points.service';
import { HttpClientModule } from '@angular/common/http';
import { RankingComponent } from './ranking/ranking.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PersonComponent } from './people/person/person.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PeopleComponent,
    WordsComponent,
    NewPointComponent,
    PointsComponent,
    RankingComponent,
    LoginComponent,
    RegisterComponent,
    TopBarComponent,
    PersonComponent,
    StatsComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    PeopleService,
    WordsService,
    PointsService,
    CoverImagesService,
    NavService,
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
