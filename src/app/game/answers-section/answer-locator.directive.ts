import { Directive, AfterContentInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[answerLocator]'
})
export class AnswerLocatorDirective implements AfterContentInit {

  constructor(private elementRef: ElementRef) { }

  @Output() locationUpdate = new EventEmitter<{}>()


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

    const centerLocation = { xCord: undefined, yCord: undefined, diameter: undefined, element: undefined }
    centerLocation.xCord = circleLeft + (circleWidth / 2)
    centerLocation.yCord = circleTop + (circleHeight / 2)
    centerLocation.diameter = this.elementRef.nativeElement.getBoundingClientRect().width
    centerLocation.element = this.elementRef.nativeElement;


    this.locationUpdate.emit(centerLocation)

  }

}
