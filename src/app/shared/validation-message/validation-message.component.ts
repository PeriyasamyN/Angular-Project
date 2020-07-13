import { Component, OnInit } from '@angular/core';
import { FormControl, ValidationErrors, Validators, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';




export function nameValidation(control: AbstractControl): ValidationErrors {

  return !control.value || /^([a-zA-Z ]+)$/.test(control.value) ? null : {'name': true};
}

export function alphaValidatiorMessage(err,field: FormlyFieldConfig) {
  return `Only alpha characters are allowed`;
}
