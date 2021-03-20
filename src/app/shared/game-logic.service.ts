import { Injectable } from '@angular/core';
import { QuestionType, UserPreferences } from "./created-types.interface";

@Injectable({
  providedIn: 'root'
})

export class GameLogicService {

  private userPreferences!: UserPreferences;

  private userResult = 0;

  private questionsList: QuestionType[] = [
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

  getNextQuestion(): QuestionType {
    console.log(this.nextQuestionIndex);

    const nextQuestion = this.questionsList[this.nextQuestionIndex]
    console.log(nextQuestion);

    this.nextQuestionIndex += 1
    return nextQuestion
  }



  setUserPreferences(userPreferences: UserPreferences) {
    this.userPreferences = userPreferences
    console.log(this.userPreferences);

  }


  getUserLoginState(): boolean {
    return !!this.userPreferences
  }

  getSquaresNumber(): number {
    return this.userPreferences.boxesNumber
  }

  getUserName(): string {
    console.log(this.userPreferences.userName);

    return this.userPreferences.userName
  }

  getUserResult(): number {
    return this.userResult
  }

  addRightAnswerToResult(): void {
    this.userResult += 50
  }



}
