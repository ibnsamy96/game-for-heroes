import { Directive, AfterContentInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[answerLocator]'
})
export class AnswerLocatorDirective implements AfterContentInit {

  constructor(private elementRef: ElementRef) { }

  @Output() locationUpdate = new EventEmitter<{ xCord: number, yCord: number, diameter: number, element: HTMLElement }>()


  ngAfterContentInit() {
    setTimeout(() => {
      this.locationUpdated()
    }, 10)
  }

  locationUpdated() {
    console.log(this.elementRef.nativeElement.getBoundingClientRect());

    const circleLeft = this.elementRef.nativeElement.getBoundingClientRect().left
    const circleTop = this.elementRef.nativeElement.getBoundingClientRect().top
    const circleWidth = this.elementRef.nativeElement.getBoundingClientRect().width
    const circleHeight = this.elementRef.nativeElement.getBoundingClientRect().height

    const centerLocation = { xCord: 0, yCord: 0, diameter: 0, element: this.elementRef.nativeElement };



    centerLocation.xCord = circleLeft + (circleWidth / 2)
    centerLocation.yCord = circleTop + (circleHeight / 2)
    centerLocation.diameter = this.elementRef.nativeElement.getBoundingClientRect().width

    this.locationUpdate.emit(centerLocation)
  }

}
