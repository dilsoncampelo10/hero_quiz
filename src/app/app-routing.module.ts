import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroQuizComponent } from './pages/hero-quiz/hero-quiz.component';
import { VillainQuizComponent } from './pages/villain-quiz/villain-quiz.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'hero/quiz',
    component: HeroQuizComponent
  },
  {
    path: 'villain/quiz',
    component: VillainQuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
