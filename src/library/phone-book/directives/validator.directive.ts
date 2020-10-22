import { Directive } from '@angular/core';
import { ValidationErrors, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: ValidatorDirective,
      multi: true
    }
  ]
})
export class ValidatorDirective implements Validator{

  constructor() { }

  /**
   * Validator function to validate the email input field.
   * @param control Abstract Control of the form
   */
  validate(control: AbstractControl) : ValidationErrors | null {
    if(control.value !== null || control.value !== "") {
      return !/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(control.value) ? 
      {'isEmailInvalid' : true} : null;
      }
      return null;
  }

}
