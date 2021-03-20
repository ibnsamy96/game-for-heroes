import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { GameComponent } from './game/game.component';
import { AnswerComponent } from './game/answers-section/answer/answer.component';
import { AnswersSectionComponent } from './game/answers-section/answers-section.component';
import { QuestionSectionComponent } from './game/question-section/question-section.component';
import { BoardSectionComponent } from './game/board-section/board-section.component';
import { ChoiceComponent } from './game/answers-section/choice/choice.component';
import { NumberComponent } from './game/question-section/number/number.component';
import { TextComponent } from './game/question-section/text/text.component';
import { SquareComponent } from './game/board-section/square/square.component';
import { LoginComponent } from './login/login.component';
import { TrueAnswerDirective } from './game/answers-section/answer/true-answer.directive';
import { ActiveDirective } from './game/board-section/square/active.directive';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './shared/user-info/user-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from "@angular/cdk/drag-drop";

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
    LoginComponent,
    TrueAnswerDirective,
    ActiveDirective,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
