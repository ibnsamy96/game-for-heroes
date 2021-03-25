import { Directive, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[choiceLocator]'
})
export class ChoiceLocator implements OnInit {

  constructor(private elementRef: ElementRef) { }

  @Output() locationUpdate = new EventEmitter<{}>()

  ngOnInit() {
  }

  @HostListener('mouseup') locationUpdated() {
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
