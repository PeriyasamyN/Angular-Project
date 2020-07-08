import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http : HttpClientModule,private fb: FormBuilder){}
//before fromgroup
//topics = ['apple','banana','orange'];
//userModel = new User('ravi','nnn@gmail.com',444444,'apple','morning',true);

//without formbuilder
// userForm = new FormGroup({
//   name: new FormControl('Ramya'),
//   email: new FormControl(),
//   phone: new FormControl(),
//   address: new FormGroup({

//     street: new FormControl(),
//     city: new FormControl(),
//     state: new FormControl(),
//     postalCode: new FormControl()
//   })
// });

registrationForm = this.fb.group({

  name: ['',Validators.required],
  email: [''],
  phone:[''],
  address:this.fb.group({
    street: ['',Validators.required],
    city: [''],
    state: [''],
    postalCode: ['']
  })
});

onSubmit(){
console.log(this.registrationForm.value);
}
}
