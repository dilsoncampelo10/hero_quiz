import { Component, OnInit } from '@angular/core';
import { QuestionType } from 'src/app/types/QuestionType';
import  questionsHero from '../../../data/questionsHero.json';
@Component({
  selector: 'app-hero-quiz',
  templateUrl: './hero-quiz.component.html',
  styleUrls: ['./hero-quiz.component.scss']
})

export class HeroQuizComponent implements OnInit {
  title: string = "";
  questions: any = [];
  questionSelected: any;

  answers: string[] = [];
  answerSelected:string =""

  questionIndex:number =0
  questionMaxIndex:number=0

  finished:boolean = false

  ngOnInit(): void {
    if(questionsHero){
      this.finished = false
      this.title = questionsHero.title

      this.questions = questionsHero.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length

    }
  }
  playerChoose(value:string){
    this.answers.push(value)
    this.nextStep()

  }

  async nextStep(){
    this.questionIndex+=1

    if(this.questionMaxIndex > this.questionIndex){
        this.questionSelected = this.questions[this.questionIndex]
    }else{
      const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true
      this.answerSelected = questionsHero.results[finalAnswer as keyof typeof questionsHero.results ]
    }
  }

  async checkResult(anwsers:string[]){

    const result = anwsers.reduce((previous, current, i, arr)=>{
        if(
          arr.filter(item => item === previous).length >
          arr.filter(item => item === current).length
        ){
          return previous
        }else{
          return current
        }
    })

    return result
  }

  reload(){
    location.reload()
  }
}
