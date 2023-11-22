import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DevQuizComponent } from './pages/dev-quiz/dev-quiz.component';
import { HumanQuizComponent } from './pages/human-quiz/human-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevQuizComponent,
    HumanQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
