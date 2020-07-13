import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as validate from './validation-message/validation-message.component';
import { Validators } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';



@NgModule({

  imports: [
    CommonModule,
    FormlyModule.forRoot({
      validators: [
        {name: 'name', validation:validate.nameValidation}
      ],

      validationMessages: [
          {name: 'name', message: validate.alphaValidatiorMessage}
      ],
    }),

  ],
  declarations: [ ],
  exports:      [CommonModule, ]
})
export class SharedModule { }
