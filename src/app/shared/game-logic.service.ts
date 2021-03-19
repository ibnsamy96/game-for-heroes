import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {


  private userPreferences!: { userName: String; boxesNumber: Number; };

  private questionsList = [
    { number: "الأول", text: "ذلك سؤال إجابتُه هي نعم؟" }
  ]
  private nextQuestionIndex = 0;


  constructor() { }

  getNextQuestion() {
    console.log(this.nextQuestionIndex);

    const nextQuestion = this.questionsList[this.nextQuestionIndex]
    console.log(nextQuestion);

    this.nextQuestionIndex += 1
    return nextQuestion
  }


  setUserPreferences(userPreferences: { userName: String; boxesNumber: Number; }) {
    this.userPreferences = userPreferences
    console.log(this.userPreferences);

  }

  getUserPreferences() {
    return this.userPreferences
  }


}
