import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {


  private userPreferences!: { userName: string; boxesNumber: number; };

  private userResult = 0;

  private questionsList = [
    {
      number: "الأول",
      text: "ذلك سؤال إجابتُه هي نعم؟",
      answers:
        [
          { text: 'نعم', state: true },
          { text: 'لا', state: false }
        ]
    }
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



  setUserPreferences(userPreferences: { userName: string; boxesNumber: number; }) {
    this.userPreferences = userPreferences
    console.log(this.userPreferences);

  }


  getUserLoginState() {
    return !!this.userPreferences
  }

  getSquaresNumber() {
    return this.userPreferences.boxesNumber
  }

  getUserName() {
    console.log(this.userPreferences.userName);

    return this.userPreferences.userName
  }

  getUserResult() {
    return this.userResult
  }

  addRightAnswerToResult() {
    this.userResult += 50
  }



}
