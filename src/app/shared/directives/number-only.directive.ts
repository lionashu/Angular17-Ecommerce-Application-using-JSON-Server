import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
  standalone: true
})
export class NumberOnlyDirective {

  constructor(private _el:ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any){
    const initialValue = this._el.nativeElement.value;
    if(initialValue ==0){
      this._el.nativeElement.value ="";
    }else{
      this._el.nativeElement.value = initialValue.replace(/[^0-9]*/g, "");
      if(initialValue !== this._el.nativeElement.value){
        event.stopPropagration();
      }
    }
  }

}
