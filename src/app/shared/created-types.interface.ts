export interface QuestionType {
  number: string;
  text: string;
  answers: { text: string, state: boolean }[]
}

export interface UserPreferences {
  userName: string;
  boxesNumber: number;
}
