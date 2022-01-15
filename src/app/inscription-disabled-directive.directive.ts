import { Directive, HostBinding, Input}  from '@angular/core';

@Directive({
  selector: '[appInscriptionDisabled]'
})
export class InscriptionDisabledDirectiveDirective {
  @HostBinding('class.link-is-disabled') status: any;
  @Input()
 set appInscriptionDisabled(value:any) {
 this.status = value;
 }

  constructor() { }

}
