import { Component,OnInit } from '@angular/core';
import  questionsVillain from '../../../data/questionsVillain.json';
@Component({
  selector: 'app-villain-quiz',
  templateUrl: './villain-quiz.component.html',
  styleUrls: ['./villain-quiz.component.scss'],
})
export class VillainQuizComponent implements OnInit{

  title: string = "";
  questions: any = [];
  questionSelected: any;

  answers: string[] = [];
  answerSelected:string =""

  questionIndex:number =0
  questionMaxIndex:number=0

  finished:boolean = false

  ngOnInit(): void {
    if(questionsVillain){
      this.finished = false
      this.title = questionsVillain.title

      this.questions = questionsVillain.questions
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
      this.answerSelected = questionsVillain.results[finalAnswer as keyof typeof questionsVillain.results ]
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
}
