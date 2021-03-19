import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { GameComponent } from './game/game.component';
import { AnswerComponent } from './game/answer/answer.component';
import { AnswersSectionComponent } from './game/answers-section/answers-section.component';
import { QuestionSectionComponent } from './game/question-section/question-section.component';
import { BoardSectionComponent } from './game/board-section/board-section.component';
import { ChoiceComponent } from './game/answers-section/choice/choice.component';
import { NumberComponent } from './game/question-section/number/number.component';
import { TextComponent } from './game/question-section/text/text.component';
import { SquareComponent } from './game/board-section/square/square.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    GameComponent,
    AnswerComponent,
    AnswersSectionComponent,
    QuestionSectionComponent,
    BoardSectionComponent,
    ChoiceComponent,
    NumberComponent,
    TextComponent,
    SquareComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
