import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DevQuizComponent } from './pages/dev-quiz/dev-quiz.component';
import { HumanQuizComponent } from './pages/human-quiz/human-quiz.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dev/quiz',
    component: DevQuizComponent
  },
  {
    path: 'human/quiz',
    component: HumanQuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
